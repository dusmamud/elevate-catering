// Batch 3 motion: GSAP + Lenis, SplitText hero, magnetic buttons, custom
// cursor, scroll progress, hide-on-scroll header, scrollspy, velocity
// marquee, parallax, draggable/keyboard testimonial slider, animated FAQ
// accordion, animated project filter, per-field form validation + toast.
// Everything animated lives behind the prefers-reduced-motion guard; the
// no-JS state stays readable because reveals default to visible and
// gsap.from() only hides content once GSAP actually runs.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---- Toast (works with or without animation) ----
const toastEl = document.getElementById('toast');
let toastTimer = 0;
function showToast(msg: string) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toastEl.classList.remove('show'), 4500);
}

// ---- Lenis smooth scroll (motion only) ----
let lenis: Lenis | null = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

if (!reduced) {
  // ---- 1. Split-text hero reveal (words, settles < 1.2s) ----
  document.querySelectorAll<HTMLElement>('h1[data-split]').forEach((h1) => {
    try {
      const split = new SplitText(h1, { type: 'words' });
      gsap.from(split.words, {
        y: 26, opacity: 0, duration: 0.55, ease: 'power3.out', stagger: 0.045, delay: 0,
      });
    } catch {
      // Fallback: manual word spans if SplitText ever fails.
      const words = (h1.textContent || '').trim().split(/\s+/);
      h1.innerHTML = words.map((w) => `<span class="inline-block">${w}</span>`).join(' ');
      gsap.from(h1.querySelectorAll('span'), {
        y: 26, opacity: 0, duration: 0.55, ease: 'power3.out', stagger: 0.045,
      });
    }
  });

  // Other hero elements — fast entrance, delay 0.
  gsap.from('[data-hero]', { y: 16, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.06, delay: 0 });

  // ---- 5. Scroll reveals with stagger (sibling index within same parent) ----
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    const siblings = [...(el.parentElement?.children ?? [])].filter((c) => c.classList.contains('reveal'));
    const delay = Math.min(Math.max(siblings.indexOf(el), 0) * 0.07, 0.21);
    gsap.from(el, {
      opacity: 0, y: 24, duration: 0.8, ease: 'power3.out', delay,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  // Animated counters (numbers already render server-side for no-JS).
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count || 0);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target, duration: 1.6, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%' },
      onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString('en-IN'); },
    });
  });

  // ---- 5. Subtle parallax (transform only) ----
  const heroPar = document.querySelector('[data-parallax]');
  if (heroPar) {
    gsap.to(heroPar, {
      yPercent: 5, ease: 'none',
      scrollTrigger: { trigger: heroPar.closest('section'), start: 'top top', end: 'bottom top', scrub: true },
    });
  }
  document.querySelectorAll<HTMLElement>('[data-parallax-img]').forEach((img) => {
    gsap.fromTo(img, { yPercent: -4 }, {
      yPercent: 4, ease: 'none',
      scrollTrigger: { trigger: img.closest('figure, div') ?? img, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  // ---- 2. Magnetic buttons (desktop pointer only) ----
  if (finePointer) {
    document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        gsap.to(btn, { x: (e.clientX - (r.left + r.width / 2)) * 0.25, y: (e.clientY - (r.top + r.height / 2)) * 0.35, duration: 0.3, ease: 'power2.out' });
      });
      btn.addEventListener('mouseleave', () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' }));
    });

    // ---- 2. Custom cursor dot with hover-grow ----
    const dot = document.getElementById('cursor-dot');
    if (dot) {
      const xTo = gsap.quickTo(dot, 'x', { duration: 0.18, ease: 'power2.out' });
      const yTo = gsap.quickTo(dot, 'y', { duration: 0.18, ease: 'power2.out' });
      window.addEventListener('mousemove', (e) => { dot.classList.add('cursor-on'); xTo(e.clientX); yTo(e.clientY); }, { passive: true });
      document.addEventListener('mouseleave', () => dot.classList.remove('cursor-on'));
      document.addEventListener('mouseover', (e) => {
        dot.classList.toggle('cursor-grow', !!(e.target as HTMLElement).closest('a, button, [data-magnetic], input, select, textarea, [role="button"]'));
      });
    }
  }
}

// ---- 3/4. Scroll progress, hide-on-scroll header, back-to-top (rAF-throttled) ----
const progress = document.getElementById('scroll-progress');
const header = document.getElementById('site-header');
const toTop = document.getElementById('back-to-top');
const mobileMenu = document.getElementById('mobile-menu');
let lastY = window.scrollY;
let ticking = false;
function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
  if (header) {
    const menuOpen = mobileMenu && !mobileMenu.classList.contains('hidden');
    const hide = y > 140 && y > lastY + 4 && !menuOpen;
    const show = y < lastY - 4 || y <= 140;
    if (hide) header.classList.add('header-hidden');
    else if (show) header.classList.remove('header-hidden');
  }
  toTop?.classList.toggle('show', y > 600);
  lastY = y;
  ticking = false;
}
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();
toTop?.addEventListener('click', () => {
  if (lenis) lenis.scrollTo(0, { immediate: reduced });
  else window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
});

// ---- 4. Active-section highlight (home sections only) ----
const spyLinks = new Map<string, HTMLElement>();
document.querySelectorAll<HTMLElement>('[data-nav-for]').forEach((a) => spyLinks.set(a.dataset.navFor || '', a));
if (spyLinks.size) {
  const spyObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const key = (en.target as HTMLElement).dataset.spy || '';
      spyLinks.forEach((link, k) => link.classList.toggle('text-gold', k === key));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll<HTMLElement>('[data-spy]').forEach((s) => spyObs.observe(s));
}

// ---- 5. Scroll-velocity marquee (speeds/slows with scroll, eases back) ----
if (!reduced) {
  const tracks = [...document.querySelectorAll<HTMLElement>('.marquee-track, .marquee-track-slow')];
  const base = new Map<HTMLElement, number>();
  tracks.forEach((t) => {
    const d = parseFloat(getComputedStyle(t).animationDuration) || 22;
    base.set(t, d);
    t.dataset.factor = '1';
  });
  let prevY = window.scrollY;
  let vel = 0;
  window.addEventListener('scroll', () => { vel = Math.abs(window.scrollY - prevY); prevY = window.scrollY; }, { passive: true });
  gsap.ticker.add(() => {
    const target = 1 + Math.min(vel / 14, 2.2);
    vel *= 0.92;
    tracks.forEach((t) => {
      const cur = parseFloat(t.dataset.factor || '1');
      const next = cur + (target - cur) * 0.08;
      t.dataset.factor = String(next);
      t.style.animationDuration = `${(base.get(t) || 22) / next}s`;
    });
  });
}

// ---- 6. Testimonial slider: drag/swipe + keyboard + pause on hover/focus ----
const track = document.querySelector<HTMLElement>('#testi-track');
const viewport = document.getElementById('testi-viewport');
const slides = track?.querySelectorAll<HTMLElement>('[data-slide]');
const dots = [...document.querySelectorAll<HTMLElement>('[data-dot]')];
let idx = 0;
let timer: number | undefined;
let paused = false;
const go = (i: number) => {
  if (!track || !slides?.length) return;
  idx = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${idx * 100}%)`;
  dots.forEach((d, di) => {
    d.classList.toggle('bg-gold', di === idx);
    d.classList.toggle('bg-white/25', di !== idx);
    if (di === idx) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
  });
};
const startAuto = () => {
  window.clearInterval(timer);
  if (track && slides?.length && !paused && !reduced) timer = window.setInterval(() => go(idx + 1), 6000);
};
const pauseAuto = () => { paused = true; window.clearInterval(timer); };
const resumeAuto = () => { paused = false; startAuto(); };
document.getElementById('testi-prev')?.addEventListener('click', () => { go(idx - 1); startAuto(); });
document.getElementById('testi-next')?.addEventListener('click', () => { go(idx + 1); startAuto(); });
dots.forEach((d, di) => d.addEventListener('click', () => { go(di); startAuto(); }));
if (viewport && track && slides?.length) {
  viewport.addEventListener('mouseenter', pauseAuto);
  viewport.addEventListener('mouseleave', resumeAuto);
  viewport.addEventListener('focusin', pauseAuto);
  viewport.addEventListener('focusout', resumeAuto);
  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
    else if (e.key === 'Home') { e.preventDefault(); go(0); }
    else if (e.key === 'End') { e.preventDefault(); go(slides.length - 1); }
  });
  // Drag / swipe (pointer events; vertical scroll untouched via touch-action)
  let startX = 0; let dx = 0; let dragging = false;
  viewport.addEventListener('pointerdown', (e) => {
    dragging = true; startX = e.clientX; dx = 0;
    viewport.classList.add('dragging');
    viewport.setPointerCapture(e.pointerId);
  });
  viewport.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    dx = e.clientX - startX;
    track.style.transform = `translateX(calc(-${idx * 100}% + ${dx}px))`;
  });
  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove('dragging');
    if (Math.abs(dx) > 60) go(idx + (dx < 0 ? 1 : -1));
    else go(idx);
    startAuto();
  };
  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);
  document.addEventListener('visibilitychange', () => { if (document.hidden) window.clearInterval(timer); else startAuto(); });
  startAuto();
}

// ---- 6. FAQ accordion (button + grid-rows height animation) ----
document.querySelectorAll<HTMLElement>('[data-faq-btn]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling as HTMLElement | null;
    if (!panel) return;
    const open = panel.dataset.open === 'true';
    panel.dataset.open = String(!open);
    btn.setAttribute('aria-expanded', String(!open));
  });
});

// ---- 6. Project filter with animated transition ----
const filterBar = document.getElementById('project-filter');
const filterCount = document.getElementById('filter-count');
const cards = [...document.querySelectorAll<HTMLElement>('[data-project-card]')];
if (filterBar && cards.length) {
  filterBar.querySelectorAll<HTMLElement>('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter || 'All';
      filterBar.querySelectorAll('[data-filter]').forEach((b) => {
        const active = b === btn;
        b.setAttribute('aria-pressed', String(active));
        b.classList.toggle('bg-gold', active);
        b.classList.toggle('text-forest', active);
        b.classList.toggle('border-gold', active);
        b.classList.toggle('border-line', !active);
      });
      const show = cards.filter((c) => f === 'All' || c.dataset.category === f);
      const hide = cards.filter((c) => !(f === 'All' || c.dataset.category === f));
      filterCount && (filterCount.textContent = `Showing ${show.length} of ${cards.length} projects`);
      const finish = () => {
        hide.forEach((c) => { c.style.display = 'none'; });
        show.forEach((c) => { c.style.display = ''; });
        if (!reduced) {
          gsap.fromTo(show, { opacity: 0, y: 14, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out', stagger: 0.05, overwrite: true, clearProps: 'transform,opacity' });
        }
      };
      if (reduced || !hide.length) finish();
      else gsap.to(hide, { opacity: 0, duration: 0.18, ease: 'power1.in', onComplete: finish });
    });
  });
}

// ---- 7. Forms: inline per-field validation + toast (mailto unchanged) ----
function fieldError(input: HTMLInputElement | HTMLTextAreaElement, msg: string) {
  const err = document.getElementById(`${input.id}-error`);
  if (err) { err.textContent = msg; err.classList.remove('invisible'); }
  input.setAttribute('aria-invalid', 'true');
}
function fieldClear(input: HTMLInputElement | HTMLTextAreaElement) {
  const err = document.getElementById(`${input.id}-error`);
  if (err) { err.textContent = ''; err.classList.add('invisible'); }
  input.removeAttribute('aria-invalid');
}
function validName(input: HTMLInputElement | null) {
  if (!input) return false;
  if (input.value.trim().length < 2) { fieldError(input, 'Please enter your name.'); return false; }
  fieldClear(input); return true;
}
function validEmail(input: HTMLInputElement | null) {
  if (!input) return false;
  if (!emailRe.test(input.value.trim())) { fieldError(input, 'Please enter a valid email address.'); return false; }
  fieldClear(input); return true;
}
function validMsg(input: HTMLTextAreaElement | null) {
  if (!input) return false;
  if (input.value.trim().length < 10) { fieldError(input, 'Please tell us a little more (at least 10 characters).'); return false; }
  fieldClear(input); return true;
}

// Contact form
const cf = document.getElementById('contact-form') as HTMLFormElement | null;
if (cf) {
  const name = document.getElementById('cf-name') as HTMLInputElement;
  const email = document.getElementById('cf-email') as HTMLInputElement;
  const msg = document.getElementById('cf-message') as HTMLTextAreaElement;
  name.addEventListener('blur', () => validName(name));
  email.addEventListener('blur', () => validEmail(email));
  msg.addEventListener('blur', () => validMsg(msg));
  cf.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = [validName(name), validEmail(email), validMsg(msg)];
    if (ok.includes(false)) { (document.querySelector('[aria-invalid="true"]') as HTMLElement)?.focus(); return; }
    const service = (document.getElementById('cf-service') as HTMLSelectElement).value;
    const budget = (document.getElementById('cf-budget') as HTMLSelectElement).value;
    const body = `Hi Elevate Catering team,\n\nName: ${name.value.trim()}\nEmail: ${email.value.trim()}\nService: ${service || 'Not sure yet'}\nBudget: ${budget || 'Not shared'}\n\n${msg.value.trim()}`;
    showToast('Thanks — opening your mail app…');
    window.setTimeout(() => {
      window.location.href = `mailto:hello@elevatecatering.in?subject=${encodeURIComponent('New project enquiry — ' + name.value.trim())}&body=${encodeURIComponent(body)}`;
    }, 500);
    cf.reset();
  });
}

// Book form (days + slots rendered here; was an inline page script)
const bf = document.getElementById('book-form') as HTMLFormElement | null;
if (bf) {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const slots = ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM', '6:30 PM'];
  const daysEl = document.getElementById('bk-days');
  const slotsEl = document.getElementById('bk-slots');
  const slotErr = document.getElementById('bk-slot-error');
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today); d.setDate(today.getDate() + i);
    return { label: `${dayNames[d.getDay()]} ${d.getDate()} ${monthNames[d.getMonth()]}`, full: `${dayNames[d.getDay()]}, ${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}` };
  });
  let day = days[0];
  let slot: string | null = null;
  const renderDays = () => {
    if (!daysEl) return;
    daysEl.innerHTML = '';
    days.forEach((d) => {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = d.label;
      b.setAttribute('aria-pressed', String(day.label === d.label));
      b.className = 'rounded-xl border px-3 py-3 text-sm font-semibold transition ' + (day.label === d.label ? 'border-forest bg-forest text-cream' : 'border-line bg-white text-ink/80 hover:border-gold');
      b.addEventListener('click', () => { day = d; renderDays(); });
      daysEl.appendChild(b);
    });
  };
  const renderSlots = () => {
    if (!slotsEl) return;
    slotsEl.innerHTML = '';
    slots.forEach((s) => {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = s;
      b.setAttribute('aria-pressed', String(slot === s));
      b.className = 'rounded-xl border px-3 py-3 text-sm font-semibold transition ' + (slot === s ? 'border-forest bg-forest text-cream' : 'border-line bg-white text-ink/80 hover:border-gold');
      b.addEventListener('click', () => { slot = s; slotErr?.classList.add('invisible'); renderSlots(); });
      slotsEl.appendChild(b);
    });
  };
  renderDays(); renderSlots();
  const plan = new URLSearchParams(window.location.search).get('plan');
  if (plan) {
    const sel = document.getElementById('bk-service') as HTMLSelectElement | null;
    if (sel) {
      const opt = [...sel.options].find((o) => o.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(plan) || o.value.toLowerCase().includes(plan.replace(/-/g, ' ')));
      if (opt) sel.value = opt.value;
    }
  }
  const name = document.getElementById('bk-name') as HTMLInputElement;
  const email = document.getElementById('bk-email') as HTMLInputElement;
  name.addEventListener('blur', () => validName(name));
  email.addEventListener('blur', () => validEmail(email));
  bf.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!slot) { slotErr?.classList.remove('invisible'); (slotsEl?.querySelector('button') as HTMLElement)?.focus(); return; }
    const ok = [validName(name), validEmail(email)];
    if (ok.includes(false)) { (document.querySelector('[aria-invalid="true"]') as HTMLElement)?.focus(); return; }
    const service = (document.getElementById('bk-service') as HTMLSelectElement).value;
    const notes = (document.getElementById('bk-notes') as HTMLTextAreaElement).value.trim();
    const body = `Hi Elevate Catering team,\n\nI would like to request a catering quote.\n\nName: ${name.value.trim()}\nEmail: ${email.value.trim()}\nService: ${service}\nDay: ${day.full}\nTime: ${slot} IST\n\n${notes ? 'Notes: ' + notes + '\n' : ''}\nPlease confirm. Thank you!`;
    showToast('Thanks — opening your mail app…');
    window.setTimeout(() => {
      window.location.href = `mailto:hello@elevatecatering.in?subject=${encodeURIComponent('Catering quote request — ' + name.value.trim() + ' — ' + day.label + ' ' + slot)}&body=${encodeURIComponent(body)}`;
    }, 500);
    bf.reset(); slot = null; renderSlots();
  });
}

// Newsletter (footer)
const nf = document.getElementById('newsletter-form') as HTMLFormElement | null;
if (nf) {
  const email = document.getElementById('newsletter-email') as HTMLInputElement;
  email.addEventListener('blur', () => validEmail(email));
  nf.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validEmail(email)) { email.focus(); return; }
    document.getElementById('newsletter-ok')?.classList.remove('hidden');
    showToast('Thanks — you are on the list.');
    nf.reset();
  });
}

// Contact CTA email capture (home/footer sections)
const cta = document.getElementById('contact-cta-form') as HTMLFormElement | null;
if (cta) {
  const email = document.getElementById('cta-email') as HTMLInputElement;
  email.addEventListener('blur', () => validEmail(email));
  cta.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validEmail(email)) { email.focus(); return; }
    document.getElementById('contact-cta-ok')?.classList.remove('hidden');
    showToast('Thanks — opening your mail app…');
    window.setTimeout(() => {
      window.location.href = `mailto:hello@elevatecatering.in?subject=${encodeURIComponent('New catering enquiry — Elevate Catering')}&body=${encodeURIComponent('Hi Elevate Catering team,\n\nMy email: ' + email.value.trim() + '\n\nMy event: ')}`;
    }, 500);
    cta.reset();
  });
}

// ---- Gallery lightbox (native <dialog>: Esc closes, arrows navigate, focus returns) ----
const lb = document.getElementById('lightbox') as HTMLDialogElement | null;
if (lb) {
  const lbImg = document.getElementById('lb-img') as HTMLImageElement;
  const lbCap = document.getElementById('lb-cap');
  const triggers = [...document.querySelectorAll<HTMLElement>('[data-lightbox]')];
  let cur = 0;
  let lastTrigger: HTMLElement | null = null;
  const visible = () => triggers.filter((b) => (b.closest('[data-project-card]') as HTMLElement | null)?.style.display !== 'none');
  const show = (btn: HTMLElement) => {
    lbImg.src = btn.dataset.full || '';
    lbImg.alt = btn.getAttribute('aria-label')?.replace('View larger photo: ', '') || '';
    if (lbCap) lbCap.textContent = btn.dataset.caption || '';
  };
  const step = (d: number) => {
    const list = visible();
    if (!list.length) return;
    const idx = list.indexOf(triggers[cur]);
    const next = list[(idx + d + list.length) % list.length];
    cur = triggers.indexOf(next);
    show(next);
  };
  triggers.forEach((btn, i) => btn.addEventListener('click', () => {
    cur = i; lastTrigger = btn; show(btn);
    if (typeof lb.showModal === 'function') lb.showModal(); else lb.setAttribute('open', '');
    document.getElementById('lb-close')?.focus();
  }));
  document.getElementById('lb-close')?.addEventListener('click', () => lb.close());
  document.getElementById('lb-prev')?.addEventListener('click', () => step(-1));
  document.getElementById('lb-next')?.addEventListener('click', () => step(1));
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
  });
  lb.addEventListener('close', () => { lastTrigger?.focus(); });
}
