// MOCK DATA — demo placeholders for the client presentation.
// NOTHING here is real yet. Replace every value with real details
// before launch: team names, email, phone, venues and client stories
// are all invented for the demo. Social links are '#' placeholders.
export const site = {
  name: 'Elevate Catering',
  tagline: 'Exquisite Catering Services',
  url: 'https://elevate-catering.pages.dev',
  description:
    'Elevate Catering — culinary excellence for corporate events, weddings & special occasions. Customizable menus, fresh quality ingredients and elegant presentation across Mumbai, Delhi & Bengaluru.',
  year: 2026,
};

export const contact = {
  email: 'hello@elevatecatering.in',
  phoneDisplay: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  hours: 'Mon–Sat, 10am–7pm IST',
  location: 'Bandra West, Mumbai, India · Serving Mumbai, Delhi, Bengaluru & destination weddings',
};

export const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
];

export const stats = [
  { value: 850, suffix: '+', label: 'Events Catered', sub: 'across India' },
  { value: 12, suffix: '+', label: 'Years', sub: 'of culinary craft' },
  { value: 48, suffix: 'k+', label: 'Guests Served', sub: 'and counting' },
  { value: 49, suffix: '/10', label: 'Average Rating', sub: '4.9 from 600+ reviews', display: '4.9' },
];

export const pillars = [
  { title: 'Customizable Menus', text: 'Tailored gourmet selections', icon: 'chef' },
  { title: 'Fresh, Quality Ingredients', text: 'Seasonal, farm-to-table sources', icon: 'leaf' },
  { title: 'Elegant Presentation', text: 'Beautiful and refined displays', icon: 'cloche' },
];

export const services = [
  {
    slug: 'corporate-events', num: '01', title: 'Corporate Events',
    short: 'Shrimp appetizers, working lunches and gala dinners that keep teams and clients talking.',
    price: 'From ₹1,450 per guest', img: '/images/corporate-shrimp.jpg',
    points: ['Canapés & live counters', 'Working lunches & buffets', 'Boardroom fine dining', 'Branded dessert stations'],
    includes: ['Menu tasting for 2', 'Service staff & setup', 'Crockery, cutlery & linen', 'Tea, coffee & beverages'],
  },
  {
    slug: 'weddings', num: '02', title: 'Weddings',
    short: 'Vegetable and prosciutto canapés, multi-course celebrations and midnight snacks for your big day.',
    price: 'From ₹2,250 per guest', img: '/images/wedding-canapes.jpg',
    points: ['Sangeet to reception menus', 'Live chaat & tandoor counters', 'Wedding cake & desserts', 'Late-night snack bar'],
    includes: ['Dedicated wedding planner', 'Full tasting for 4', 'Decor-coordinated styling', 'Cake cutting & service'],
  },
  {
    slug: 'private-parties', num: '03', title: 'Private Parties',
    short: 'Charcuterie, gourmet bites and grazing tables for birthdays, anniversaries and house parties.',
    price: 'From ₹1,250 per guest', img: '/images/private-charcuterie.jpg',
    points: ['Grazing & charcuterie boards', 'Small plates & bowls', 'Cocktail & mocktail pairings', 'Kids-friendly menus'],
    includes: ['Home setup & styling', 'Bartender on request', 'Cleanup included', 'Leftover packing'],
  },
  {
    slug: 'gala-fundraisers', num: '04', title: 'Galas & Fundraisers',
    short: 'Black-tie plated dinners and auction-night canapés with flawless, quiet service.',
    price: 'From ₹2,800 per guest', img: '/images/tablescape.jpg',
    points: ['3–5 course plated dinners', 'Champagne & canapé receptions', 'Silent, trained service team', 'Stage & AV coordination'],
    includes: ['Event captain', 'Sommelier on request', 'Printed menu cards', 'Donor dessert auction support'],
  },
  {
    slug: 'drop-off-catering', num: '05', title: 'Drop-Off Catering',
    short: 'Chef-made trays delivered hot and styled — no staff needed, perfect for offices and shoots.',
    price: 'From ₹850 per guest', img: '/images/buffet-spread.jpg',
    points: ['Breakfast, lunch & snack trays', 'Eco packaging', 'Same-week ordering', 'Dietary-labelled portions'],
    includes: ['Hot-box delivery', 'Serving spoons & labels', 'Setup in 20 minutes', 'Pickup of equipment next day'],
  },
  {
    slug: 'full-service-events', num: '06', title: 'Full-Service Events',
    short: 'We run the whole table — planning, rentals, staff, bar and cleanup — you host, we handle it.',
    price: 'From ₹3,400 per guest', img: '/images/chef-plating.jpg',
    points: ['End-to-end event production', 'Rentals, decor & florals', 'Full bar service', 'On-day coordination team'],
    includes: ['Site recce & layout plan', 'All rentals included', 'Event manager on site', 'Complete cleanup'],
  },
];

export const menus = [
  {
    slug: 'wedding-celebration', title: 'Wedding Celebration Menu', price: '₹2,250', per: 'per guest',
    img: '/images/tablescape.jpg', tagline: 'A grand, joyful feast — Indian classics meet continental favourites.',
    courses: [
      { name: 'Welcome', items: ['Kokum & mint cooler', 'Masala papad cones', 'Cheese corn croquettes'] },
      { name: 'Starters', items: ['Paneer tikka angara (veg)', 'Tandoori prawns', 'Vegetable & prosciutto canapés', 'Live chaat counter'] },
      { name: 'Mains', items: ['Dal-e-Elevate', 'Subz miloni', 'Butter chicken / Paneer lababdar', 'Saffron pulao & assorted breads'] },
      { name: 'Desserts', items: ['Wedding cake', 'Kesar rasmalai', 'Chocolate fondant', 'Kulfi falooda'] },
    ],
    dietary: ['Vegetarian options', 'Jain on request', 'Gluten-free breads'],
  },
  {
    slug: 'corporate-lunch', title: 'Corporate Lunch Menu', price: '₹1,450', per: 'per guest',
    img: '/images/buffet-spread.jpg', tagline: 'Fast, fresh and impressive — served in 45 minutes, remembered all week.',
    courses: [
      { name: 'Salads & Soup', items: ['Caprese chicken salad', 'Garden greens & feta', 'Roasted tomato soup'] },
      { name: 'Mains', items: ['Grilled herb chicken', 'Paneer & seasonal vegetables', 'Dal tadka & jeera rice', 'Assorted breads'] },
      { name: 'Desserts & Beverages', items: ['Fruit & yogurt cups', 'Brownie bites', 'Filter coffee & masala tea'] },
    ],
    dietary: ['Vegan options', 'Gluten-free options', 'Low-spice on request'],
  },
  {
    slug: 'private-party', title: 'Private Party Menu', price: '₹1,650', per: 'per guest',
    img: '/images/private-charcuterie.jpg', tagline: 'Grazing, sharing and small plates — food that keeps the party moving.',
    courses: [
      { name: 'Grazing', items: ['Charcuterie & cheese board', 'Hummus & crudités', 'Bruschetta trio'] },
      { name: 'Small Plates', items: ['Shrimp appetizer skewers', 'Stuffed mushrooms', 'Mini sliders (veg & chicken)'] },
      { name: 'Sweet Finish', items: ['Dessert shots', 'Cheesecake bites', 'Fresh fruit platter'] },
    ],
    dietary: ['Vegetarian boards', 'Vegan dips', 'Nut-free on request'],
  },
  {
    slug: 'seasonal-tasting', title: 'Seasonal Tasting Menu', price: '₹3,400', per: 'per guest',
    img: '/images/chef-plating.jpg', tagline: 'Seven chef-led courses that change with the season — our signature experience.',
    courses: [
      { name: 'Courses 1–3', items: ['Amuse-bouche of the day', 'Indian-fusion starter', 'Soup & palate cleanser'] },
      { name: 'Courses 4–6', items: ['Signature main (veg / non-veg)', 'Artisan bread course', 'Pre-dessert'] },
      { name: 'Course 7', items: ['Plated dessert with gold leaf', 'Petit fours & coffee'] },
    ],
    dietary: ['Full vegetarian tasting', 'Vegan tasting', 'Allergen-aware kitchen'],
  },
];

export const occasions = [
  { title: 'Corporate Events', text: 'Shrimp appetizer selections', img: '/images/corporate-shrimp.jpg', href: '/services/corporate-events/' },
  { title: 'Elegant Weddings', text: 'Vegetable and prosciutto canapés', img: '/images/wedding-canapes.jpg', href: '/services/weddings/' },
  { title: 'Private Parties', text: 'Charcuterie & gourmet bites', img: '/images/private-charcuterie.jpg', href: '/services/private-parties/' },
];

export const galleryItems = [
  { title: 'Wedding Tablescape', category: 'Weddings', img: '/images/tablescape.jpg' },
  { title: 'Caprese Hero Salad', category: 'Weddings', img: '/images/hero-salad.jpg' },
  { title: 'Shrimp Appetizers', category: 'Corporate', img: '/images/corporate-shrimp.jpg' },
  { title: 'Wedding Canapés', category: 'Weddings', img: '/images/wedding-canapes.jpg' },
  { title: 'Charcuterie Evening', category: 'Private Parties', img: '/images/private-charcuterie.jpg' },
  { title: 'Grand Buffet', category: 'Corporate', img: '/images/buffet-spread.jpg' },
  { title: 'Chef Plating', category: 'Behind the Scenes', img: '/images/chef-plating.jpg' },
  { title: 'Plated Dessert', category: 'Private Parties', img: '/images/dessert-plated.jpg' },
  { title: 'Indian Fusion', category: 'Corporate', img: '/images/indian-fusion.jpg' },
  { title: 'Wedding Cake', category: 'Weddings', img: '/images/wedding-cake.jpg' },
  { title: 'Starters Platter', category: 'Private Parties', img: '/images/starters-platter.jpg' },
  { title: 'Our Executive Chef', category: 'Behind the Scenes', img: '/images/chef-portrait.jpg' },
];

export const team = [
  { name: 'Chef Arjun Mehra', role: 'Executive Chef & Founder', img: '/images/chef-portrait.jpg', bio: '18 years across luxury hotels and destination weddings. Believes a menu should tell the couple’s — or the company’s — story.' },
  { name: 'Priya Nair', role: 'Head of Events', img: '/images/tablescape.jpg', bio: 'Runs 850+ events worth of calm: timelines, vendors and the hundred small things guests never notice because she did.' },
  { name: 'Rohan Kapoor', role: 'Pastry Chef', img: '/images/wedding-cake.jpg', bio: 'Wedding cakes, dessert tables and petit fours. His chocolate fondant with gold leaf is the most-requested plate we serve.' },
  { name: 'Sana Sheikh', role: 'Menu Designer', img: '/images/chef-plating.jpg', bio: 'Builds customizable menus around real guests — Jain, vegan, gluten-free and allergen-aware, without anyone feeling like an afterthought.' },
];

export const testimonials = [
  { quote: 'Elevate catered our 400-guest wedding in Mumbai and guests are still talking about the live counters. The tasting alone convinced us — the event day was flawless.', name: 'Ananya & Vikram Shah', company: 'Wedding, Taj Lands End', img: '/images/tablescape.jpg' },
  { quote: 'Our annual client gala needed quiet, perfect service and food that matched the room. Elevate delivered both — our CEO asked for their number before dessert.', name: 'Kavita Deshmukh', company: 'Corporate Gala, BKC', img: '/images/buffet-spread.jpg' },
  { quote: 'For my mother’s 70th at home, they turned our terrace into a restaurant. Charcuterie, small plates, cleanup — we actually got to enjoy our own party.', name: 'Rahul Malhotra', company: 'Private Party, Juhu', img: '/images/private-charcuterie.jpg' },
  { quote: 'Weekly drop-off lunches for 120 staff, always on time, always labelled for dietary needs. It is the one vendor I never have to chase.', name: 'Meera Iyer', company: 'Office Manager, Fintech Firm', img: '/images/corporate-shrimp.jpg' },
];

export const venues = [
  { name: 'Taj Lands End', city: 'Mumbai', capacity: '50–1,200 guests', style: 'Sea-facing ballrooms & lawns', img: '/images/tablescape.jpg' },
  { name: 'The Leela Palace', city: 'Bengaluru', capacity: '40–800 guests', style: 'Palace gardens & grand ballroom', img: '/images/buffet-spread.jpg' },
  { name: 'ITC Grand Bharat', city: 'Delhi NCR', capacity: '60–1,000 guests', style: 'Retreat lawns & heritage halls', img: '/images/wedding-canapes.jpg' },
  { name: 'Alila Diwa', city: 'Goa (Destination)', capacity: '30–500 guests', style: 'Beachside destination weddings', img: '/images/hero-salad.jpg' },
  { name: 'Aamby Valley', city: 'Lonavala (Destination)', capacity: '100–2,000 guests', style: 'Lakeside large celebrations', img: '/images/starters-platter.jpg' },
  { name: 'Your Home or Office', city: 'Mumbai · Delhi · Bengaluru', capacity: '10–300 guests', style: 'Private & corporate spaces', img: '/images/private-charcuterie.jpg' },
];

export const processSteps = [
  { num: '01', title: 'Enquiry', weeks: 'Day 1', short: 'Date, guests, venue — tell us the occasion.', who: 'You talk to Priya (events)', detail: 'Share your event date, guest count, venue and budget range through the quote form. We reply within one working day with availability and next steps — no obligation.', approval: 'You confirm the date is worth exploring.' },
  { num: '02', title: 'Tasting', weeks: 'Week 1–2', short: 'Taste the shortlist at our Bandra kitchen.', who: 'You talk to Chef Arjun', detail: 'A guided tasting of 8–10 dishes matched to your occasion and budget. Weddings include a tasting for four; corporate tastings can come to your office.', approval: 'You shortlist dishes and flag dietary needs.' },
  { num: '03', title: 'Menu Design', weeks: 'Week 2–3', short: 'Your customizable menu, course by course.', who: 'You talk to Sana (menu design)', detail: 'We design the full menu — starters to desserts, live counters, drinks pairings — with vegetarian, vegan, Jain and gluten-free paths built in from the start.', approval: 'You approve the final menu in writing.' },
  { num: '04', title: 'Proposal', weeks: 'Week 3', short: 'One transparent per-person price, in writing.', who: 'You talk to Priya (events)', detail: 'A single proposal: per-person price, staffing, rentals, taxes and payment schedule. No hidden charges appear later — the number you sign is the number you pay.', approval: 'You sign and pay the booking advance.' },
  { num: '05', title: 'Event Day', weeks: 'Your date', short: 'Setup, service and a captain on the floor.', who: 'Your event captain runs the day', detail: 'Our team arrives early, sets up, coordinates with the venue and serves. An event captain is your single point of contact all day, so you can actually be a guest.', approval: 'You enjoy the event — we handle the rest.' },
  { num: '06', title: 'Follow-Up', weeks: 'Next day', short: 'Cleanup, leftovers packed, feedback call.', who: 'You talk to Priya (events)', detail: 'Complete cleanup, leftovers packed for you, equipment collected, and a short feedback call within 48 hours. Most of our bookings come from guests who ate at a previous event.', approval: 'You tell us what to do even better next time.' },
];

export const pricingPlans = [
  { slug: 'essential', name: 'Essential', price: '₹1,450', per: 'per guest, from', bestFor: 'Corporate lunches & drop-off-plus', timeline: 'Min. 30 guests', features: ['3 salads & soups', '4 mains + breads & rice', '2 desserts', 'Service staff & basic setup', 'Standard crockery & linen'] },
  { slug: 'signature', name: 'Signature', price: '₹2,250', per: 'per guest, from', bestFor: 'Weddings & celebrations', timeline: 'Min. 50 guests', features: ['Welcome drinks & canapés', '2 live counters', '6 mains + breads & rice', '4 desserts + wedding cake service', 'Styled buffet & full service team'], popular: true },
  { slug: 'royal', name: 'Royal', price: '₹3,400', per: 'per guest, from', bestFor: 'Galas & full-service events', timeline: 'Min. 40 guests', features: ['7-course tasting option', 'Unlimited live counters', 'Premium ingredients & imports', 'Event manager + sommelier', 'Rentals, decor coordination & cleanup'] },
];

export const faqs = [
  { q: 'How much does catering cost per person?', a: 'Our packages start at ₹1,450 per guest (Essential), ₹2,250 (Signature) and ₹3,400 (Royal). Your final quote depends on menu, guest count and service style — and it is fixed in writing before you book.' },
  { q: 'Do you offer tastings before booking?', a: 'Yes. Every confirmed enquiry includes a guided tasting — for four at weddings, and at your office for corporate events. You taste the actual shortlist, not a sample menu.' },
  { q: 'Can you handle vegetarian, vegan, Jain and gluten-free guests?', a: 'Absolutely — dietary paths are designed into the menu from the start, clearly labelled at service, with separate preparation for allergen-sensitive dishes. Tell us the counts and we plan for them.' },
  { q: 'What is included in the per-person price?', a: 'Food, service staff, setup, standard crockery, cutlery and linen. Rentals beyond standard, decor and bar service are quoted separately in the same transparent proposal — never added later.' },
  { q: 'How far in advance should we book?', a: 'Weddings: 2–4 months is ideal in season. Corporate and private events: 2–3 weeks. Drop-off catering: as little as 5 days, subject to kitchen capacity.' },
  { q: 'Which cities do you serve?', a: 'We are based in Bandra West, Mumbai and regularly cater in Mumbai, Delhi and Bengaluru, plus destination weddings in Goa, Lonavala, Jaipur and Udaipur.' },
  { q: 'Are you FSSAI licensed and insured?', a: 'Yes — Elevate Catering operates with a valid FSSAI licence, trained food handlers and event liability cover. Certificates are shared with every proposal on request.' },
  { q: 'What is your cancellation policy?', a: 'Full refund of the advance up to 30 days before the event, 50% up to 14 days. Date changes are free once, subject to availability — life happens, and we plan for it.' },
];

export const blogPosts = [
  {
    slug: 'how-to-plan-wedding-menu-india', seoTitle: 'How to Plan a Wedding Menu in India — Elevate Catering Blog',
    title: 'How to Plan a Wedding Menu in India (Without Pleasing Nobody)',
    category: 'Weddings', author: 'Sana Sheikh', authorRole: 'Menu Designer', date: '2026-11-10', readingTime: '6 min read',
    excerpt: 'Five generations, three dietary rules and one unforgettable feast. Here is how we build a wedding menu every guest actually enjoys.',
    img: '/images/tablescape.jpg',
    body: [
      'Every Indian wedding menu carries an impossible brief: grandmother wants the dal she grew up with, the couple wants a continental course their friends will photograph, the kids want pasta, and at least forty guests eat Jain, vegan or gluten-free. A menu that tries to be everything becomes nothing. The fix is structure, not more dishes.',
      'Start with anchors. Pick two or three dishes that carry the family story — a regional main, a beloved starter, a dessert with history — and build around them. Anchors give elders the comfort they came for and give the menu an identity no buffet of forty random items ever has. Everything else earns its place by contrast: one live counter for theatre, one light course so guests survive to dessert, one late-night snack because the dancing runs long.',
      'Dietary paths must be designed, not patched. A Jain counter that is just "the same, without onion" tastes like an apology. We design Jain, vegan and gluten-free dishes as first-class plates with their own flavours, then label them clearly at service so guests never have to ask awkward questions in the queue. Ask your caterer how many of each path they plan per hundred guests — the answer tells you whether they have done this before.',
      'Sequence matters as much as selection. Heavy starters kill mains; mains served too late kill the party. We time courses to the event flow — pheras, performances, speeches — with the event captain watching the floor, not the clock. And always taste before you book: a caterer who will not feed you the shortlist is asking you to gamble on the biggest day of your life.',
      'Finally, budget honestly. Per-person prices in Mumbai weddings range widely, and the cheapest quote usually hides rentals, staffing or taxes that appear later. A transparent proposal lists everything once. Spend on the dishes guests will remember — starters, one signature main, dessert — and simplify the rest. Nobody recalls the seventh salad. Everybody recalls the chaat counter.',
      'Our rule after 850 events: a great wedding menu is edited, not accumulated. Twelve excellent dishes beat thirty ordinary ones, every single time.',
    ],
  },
  {
    slug: 'corporate-catering-that-impresses', seoTitle: 'Corporate Catering That Impresses Clients — Elevate Blog',
    title: 'Corporate Catering That Impresses Clients (and Keeps Staff Happy)',
    category: 'Corporate', author: 'Priya Nair', authorRole: 'Head of Events', date: '2026-11-03', readingTime: '5 min read',
    excerpt: 'The boardroom lunch is a sales tool. Here is how smart companies use catering to close deals, retain teams and stop wasting food.',
    img: '/images/buffet-spread.jpg',
    body: [
      'Nobody closes a deal because of a sandwich. But people absolutely remember how a company made them feel — and a chaotic, lukewarm lunch makes a company feel careless. Corporate catering is operations and impression in the same tray, and the best-run firms treat it that way.',
      'Reliability comes first. Food that arrives twenty minutes late to a board lunch does not just annoy people; it compresses the meeting and signals that details slip here. We build corporate menus around a hard service window: hot food hot at the minute promised, salads crisp, dietary portions labelled by name for senior guests. Ask any caterer for their on-time record before you ask for their menu.',
      'Second, design for the room. A working lunch needs one-hand food and no queues; a client gala needs theatre — a live counter, a plated course, a dessert worth photographing. The same kitchen should offer both, and a good caterer will ask about the meeting’s purpose before suggesting a single dish.',
      'Third, count honestly. Offices routinely over-order by 30 percent "to be safe" and bin the difference. We track actual consumption per event and adjust the next order, which is why our regular clients cut food waste — and cost — within a quarter. Drop-off catering with labelled portions makes this even easier.',
      'The quiet win is staff morale. A monthly team lunch people genuinely look forward to costs less than most perks and lands harder. Rotate cuisines, include a proper vegan and Jain spread, and let people vote on next month’s menu. Food is the cheapest culture budget you will ever spend — spend it deliberately.',
    ],
  },
  {
    slug: 'seasonal-menus-farm-to-table', seoTitle: 'Why Seasonal Menus Taste Better — Elevate Blog',
    title: 'Why Seasonal, Farm-to-Table Menus Simply Taste Better',
    category: 'Menus', author: 'Chef Arjun Mehra', authorRole: 'Executive Chef & Founder', date: '2026-10-27', readingTime: '5 min read',
    excerpt: 'Fresh, quality ingredients are not a slogan. They are a supply chain, a calendar and a promise we renew every single week.',
    img: '/images/hero-salad.jpg',
    body: [
      'A tomato in December and a tomato in May are legally the same vegetable and culinarily two different species. Seasonal cooking is not romance; it is the simple fact that produce picked ripe, nearby and in season needs less help from the kitchen — and tastes like it.',
      'Our menus are built on a seasonal calendar for western India: alphonso mangoes and kokum in summer, monsoon greens and corn, winter carrots, peas and strawberries that actually smell like strawberries. When an ingredient is at its peak, we let it lead — a caprese-style salad lives or dies on its tomatoes, so it appears when tomatoes deserve it.',
      'Farm-to-table also means relationships. We buy from the same growers in Maharashtra week after week, which gets us first pick and honest prices, and lets us plan menus around what is coming rather than what a catalogue promises. Shorter supply chains mean fresher food and fewer surprises on event day.',
      'For clients, the practical advice is simple: when a caterer proposes a menu, ask what is in season on your date and what they would swap. A confident kitchen answers instantly and offers alternatives at different prices. A kitchen that serves identical menus in June and January is cooking from a freezer and a spreadsheet.',
      'Seasonal menus are also kinder budgets. Peak-season produce costs less and needs less labour to taste great, so your money goes into the dishes guests remember. Fresh, quality ingredients — chosen at the right week of the year — are the whole secret. There is no other one.',
    ],
  },
  {
    slug: 'private-party-hosting-guide', seoTitle: 'Host a Private Party Without Cooking — Elevate Blog',
    title: 'How to Host a Private Party Where You Actually Enjoy It',
    category: 'Private Parties', author: 'Priya Nair', authorRole: 'Head of Events', date: '2026-10-20', readingTime: '5 min read',
    excerpt: 'The host who cooks all evening attends their own party the least. A grazing-first plan, honest counts and one golden rule fix that.',
    img: '/images/private-charcuterie.jpg',
    body: [
      'Every private party has the same tragedy available: the host spends the evening in the kitchen, reheating, plating and apologising, while their friends have a lovely time without them. Catering exists to delete that tragedy — but only if the format is right.',
      'Format first: graze, do not sit. Charcuterie boards, small plates and a couple of hot bites keep people moving, talking and eating at their own pace. A seated three-course dinner at home needs staff, space and timing most homes do not have; a grazing table needs a good board and refills. Guests consistently rate grazing parties as more fun — and hosts rate them as survivable.',
      'Counts second: plan food for the guests who confirmed, plus ten percent — not for the maybes. Drinks are the opposite: ice, water and mixers run out before alcohol does, so over-order those. And tell your caterer the truth about your kitchen and fridge space; we bring hot boxes and portable stations precisely because home kitchens are small.',
      'Third, the golden rule: nothing the host must cook, carve or explain. If a dish needs a speech, it is a burden. Everything should be labelled, self-serve and safe at room temperature for the party’s length, with dietary options placed inside the main spread — not on a sad separate table.',
      'Do that, and you get the strangest luxury in hosting: sitting down at your own party, plate in hand, while someone else quietly refills the board. That is the entire product. The food is just how we deliver it.',
    ],
  },
  {
    slug: 'dietary-needs-without-compromise', seoTitle: 'Catering for Dietary Needs Without Compromise — Elevate Blog',
    title: 'Vegan, Jain, Gluten-Free: Dietary Catering Without Compromise',
    category: 'Menus', author: 'Sana Sheikh', authorRole: 'Menu Designer', date: '2026-10-13', readingTime: '6 min read',
    excerpt: 'A dietary guest should never feel like a footnote. How we design parallel menus that stand on their own — and keep allergens safe.',
    img: '/images/indian-fusion.jpg',
    body: [
      'In almost every event we cater, between a fifth and a third of guests have a dietary requirement: vegetarian by family, Jain by faith, vegan by choice, gluten-free or allergic by necessity. Treating that third as an edge case is the single most common catering failure in India.',
      'The principle is parallel design. A vegan main is not the chicken dish minus chicken; it is a dish conceived vegan — smoked aubergine with tahini and pomegranate, a mushroom galouti that happens to be plant-based. Jain dishes get their own tempering logic with hing and raw banana instead of being the regular dish with ingredients removed. When each path is designed, nobody at the table can tell which plate was "the special one" — which is exactly the point.',
      'Safety is the non-negotiable layer. Allergen dishes are prepared separately, served with distinct utensils and labelled at the counter with the allergen named, not hidden in fine print. Our staff are trained to answer "does this contain nuts?" accurately, because for one guest that answer is not small talk.',
      'Hosts can help with one thing: honest counts. Tell us how many guests need each path, and update us when the RSVP list changes. We always cook a buffer, but a surprise forty Jain guests at a 200-guest wedding is a problem no buffer solves.',
      'Done well, dietary catering disappears. Guests eat what suits them, nobody queues twice or asks awkward questions, and the only feedback you hear is that everyone ate well. That invisibility takes more design work than the main menu — and it is worth every minute.',
    ],
  },
  {
    slug: 'catering-costs-explained-india', seoTitle: 'What Catering Really Costs in India — Elevate Blog',
    title: 'What Catering Really Costs in India: An Honest Breakdown',
    category: 'Planning', author: 'Chef Arjun Mehra', authorRole: 'Executive Chef & Founder', date: '2026-10-06', readingTime: '6 min read',
    excerpt: 'Per-person prices from ₹850 to ₹3,400+ — what each band actually buys, and the five charges to check in any quote.',
    img: '/images/dessert-plated.jpg',
    body: [
      'Ask five caterers for a price and you will hear five numbers that seem to describe five different industries. They do — because "catering" covers a dropped-off tray and a staffed seven-course tasting under one word. This breakdown explains what each band buys in Mumbai in 2026, so you can compare quotes like for like.',
      'Drop-off catering (₹850–₹1,200 per guest) buys chef-made food, delivered hot and styled, with no service staff. It suits offices, shoots and casual home gatherings. Full-service buffet catering (₹1,450–₹2,500) adds staff, setup, crockery, live counters and cleanup — this is where most weddings and corporate events sit, including our Essential and Signature packages. Plated and tasting formats (₹2,800–₹3,400+) buy courses, timing, an event captain and premium ingredients; that is gala and Royal territory.',
      'Whatever the band, check five lines in any quote: staffing (how many servers per hundred guests), rentals (are tables, chairs and premium linen extra), taxes (is GST included), transport, and the tasting (free, or charged and adjusted later?). A low headline price with all five missing is not a bargain; it is an instalment plan.',
      'Guest count is your biggest lever. Per-person prices fall as counts rise because kitchen and staffing costs spread — a 50-guest wedding will always cost more per head than a 400-guest one with the same menu. The second lever is live counters: each counter is a chef and a station, so choose one brilliant counter over three ordinary ones.',
      'Our own promise is boring and total: one proposal, every line visible, fixed before you sign. If a caterer cannot explain a line in their quote, that line is where your money leaks. Ask, compare, taste — then book the kitchen whose numbers survive daylight.',
    ],
  },
];
