const fs = require('fs');

const pages = [
  'index',
  'accommodations',
  'highlights',
  'location',
  'dining',
  'faq',
  'contact',
];

function head({ title, description, extra = '' }) {
  return `<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${description}" />
    <meta name="keywords" content="Rooms near temple West Nada, Family stay near temple, Safe hotel near temple West Entrance, Budget rooms near West Nada, Pure veg stays near temple, Sree Ayyappan Rooms" />
    <title>${title}</title>
    <script>
      (function () {
        var path = window.location.pathname;
        if (path && !path.endsWith('/') && !/\\.[a-zA-Z0-9]+$/.test(path)) {
          window.location.replace(path + '/' + window.location.search + window.location.hash);
        }
      })();
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="styles.css" />
    ${extra}
  </head>`;
}

function navLink(href, label, active) {
  const cls = active ? 'nav-link-active' : 'nav-link';
  return `<a href="${href}" class="${cls}">${label}</a>`;
}

function mobileLink(href, label) {
  return `<a href="${href}" class="mobile-link rounded-lg px-3 py-3 text-sm font-medium text-brand-text transition hover:bg-brand-soft hover:text-brand-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sub">${label}</a>`;
}

function header(active) {
  return `
    <header class="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur-md">
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <a href="index.html" class="flex min-w-0 items-center gap-2 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sub">
          <img src="images/Sree_ayyapan_rooms-LOGO.png" alt="Sree Ayyappan Rooms" class="h-9 w-auto shrink-0 object-contain sm:h-11" />
          <span class="font-serif text-xs font-bold tracking-wide text-brand-heading transition hover:text-brand-sub sm:text-base lg:text-lg">SREE AYYAPPAN ROOMS</span>
        </a>
        <nav class="hidden items-center gap-4 xl:flex" aria-label="Primary">
          ${navLink('index.html', 'Home', active === 'index')}
          ${navLink('accommodations.html', 'Accommodations', active === 'accommodations')}
          ${navLink('highlights.html', 'Highlights', active === 'highlights')}
          ${navLink('location.html', 'Location', active === 'location')}
          ${navLink('dining.html', 'Dining', active === 'dining')}
          ${navLink('faq.html', 'FAQ', active === 'faq')}
          ${navLink('contact.html', 'Contact', active === 'contact')}
        </nav>
        <div class="flex shrink-0 items-center gap-2">
          <a href="tel:7511148115" class="inline-flex min-h-[40px] shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-brand-btn px-2.5 py-1.5 text-xs font-semibold text-brand-text shadow transition hover:bg-brand-btnHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sub sm:min-h-[44px] sm:px-4 sm:py-2 sm:text-sm">Book Now</a>
          <button type="button" id="menu-toggle" class="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-brand-line bg-white text-brand-heading transition hover:bg-brand-soft xl:hidden" aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu">
            <svg id="icon-open" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" /></svg>
            <svg id="icon-close" class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" class="hidden border-t border-brand-line bg-white xl:hidden" hidden>
        <nav class="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6" aria-label="Mobile">
          ${mobileLink('index.html', 'Home')}
          ${mobileLink('accommodations.html', 'Accommodations')}
          ${mobileLink('highlights.html', 'Highlights')}
          ${mobileLink('location.html', 'Location')}
          ${mobileLink('dining.html', 'Dining')}
          ${mobileLink('faq.html', 'FAQ')}
          ${mobileLink('contact.html', 'Contact')}
          <a href="tel:7511148115" class="mobile-link mt-2 btn-primary">Call Us</a>
          <a href="https://wa.me/917511148115?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Sree%20Ayyappan%20Rooms%20near%20Temple%20West%20Nada." class="mobile-link btn-secondary" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer class="border-t border-brand-line bg-brand-heading text-white">
      <div class="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 lg:px-8">
        <img src="images/Sree_ayyapan_rooms-LOGO.png" alt="Sree Ayyappan Rooms" class="mx-auto h-14 w-auto object-contain" />
        <p class="mt-4 font-serif text-lg font-semibold">Sree Ayyappan Rooms</p>
        <p class="mt-3 text-sm text-brand-btn">
          <a href="tel:7511148115" class="transition hover:text-white">7511148115</a>
          <span class="mx-2 opacity-60" aria-hidden="true">|</span>
          <a href="tel:9061338169" class="transition hover:text-white">9061338169</a>
          <span class="mx-2 opacity-60" aria-hidden="true">|</span>
          <a href="mailto:kiranraveendran74@gmail.com" class="transition hover:text-white">kiranraveendran74@gmail.com</a>
        </p>
        <p class="mt-2 text-sm text-white/80">Safe family stay, 80 meters from Temple West Nada, near Police Check Point</p>
        <div class="mt-5 flex flex-wrap justify-center gap-4 text-sm text-brand-btn">
          <a href="index.html" class="hover:text-white">Home</a>
          <a href="accommodations.html" class="hover:text-white">Accommodations</a>
          <a href="highlights.html" class="hover:text-white">Highlights</a>
          <a href="location.html" class="hover:text-white">Location</a>
          <a href="dining.html" class="hover:text-white">Dining</a>
          <a href="faq.html" class="hover:text-white">FAQ</a>
          <a href="contact.html" class="hover:text-white">Contact</a>
        </div>
        <p class="mt-6 text-sm text-white/70">&copy; Sree Ayyappan Rooms. All rights reserved.</p>
      </div>
    </footer>
    <script src="js/nav.js"></script>
  </body>
</html>`;
}

function pageShell({ active, title, description, extra = '', main }) {
  return `${head({ title, description, extra })}
  <body class="bg-white text-brand-text">
    ${header(active)}
    <main>${main}</main>
    ${footer()}`;
}

const home = pageShell({
  active: 'index',
  title: 'Sree Ayyappan Rooms | Safe Family Stay 80m from Temple West Nada',
  description: 'Sree Ayyappan Rooms: safe family stay just 80 meters from Temple West Nada, near the Police Check Point. Call 7511148115.',
  extra: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"LodgingBusiness","name":"Sree Ayyappan Rooms","telephone":"+917511148115","email":"kiranraveendran74@gmail.com","address":{"@type":"PostalAddress","addressLocality":"West Nada","addressRegion":"Kerala","addressCountry":"IN"},"geo":{"@type":"GeoCoordinates","latitude":8.482976978940794,"longitude":76.94207664834059}}</script>`,
  main: `
    <section class="relative overflow-hidden bg-white">
      <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <figure class="overflow-hidden rounded-xl border border-brand-line bg-white shadow-sm">
              <img src="sree%20ayyapan%20rooms%20distance%20to%20temple1.png" alt="Map showing Sree Ayyappan Rooms 80 meters from the Temple West Entrance" class="h-auto w-full object-cover object-center" />
            </figure>
          </div>
          <div class="text-center lg:text-left">
            <p class="section-eyebrow mb-3">Family Stay near West Nada</p>
            <p class="font-serif text-xl font-bold text-brand-heading sm:text-2xl">
              Call Us:
              <a href="tel:7511148115" class="hover:text-brand-sub">7511148115</a>
              <span class="mx-1 text-brand-sub">/</span>
              <a href="tel:9061338169" class="hover:text-brand-sub">9061338169</a>
            </p>
            <h1 class="mt-4 font-sans text-3xl font-light leading-tight text-brand-heading sm:text-4xl lg:text-[2.75rem]">
              Safe, Comfortable Family Stay Just <span class="whitespace-nowrap">80 Meters</span> from Temple West Nada
            </h1>
            <p class="mt-5 text-lg text-brand-text">
              Peaceful rooms steps from the West Entrance, next to the Police Check Point. Suitable for families and women travelers.
            </p>
            <div class="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              <span class="rounded-full bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand-heading">80m from Temple West Nada</span>
              <span class="rounded-full border border-brand-line bg-white px-4 py-1.5 text-sm font-medium text-brand-heading">Less than 1-minute walk</span>
            </div>
            <div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
              <a href="accommodations.html" class="btn-primary">View Rooms</a>
              <a href="https://wa.me/917511148115?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Sree%20Ayyappan%20Rooms%20near%20Temple%20West%20Nada." target="_blank" rel="noopener noreferrer" class="btn-secondary">WhatsApp Book</a>
            </div>
            <ul class="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start" aria-label="Quick information">
              <li class="rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-medium text-brand-heading shadow-sm">Police Checkpoint Safety</li>
              <li class="rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-medium text-brand-heading shadow-sm">24/7 Room Service</li>
              <li class="rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-medium text-brand-heading shadow-sm">Pure Veg Nearby</li>
              <li class="rounded-full bg-brand-soft px-4 py-2 text-sm font-medium text-brand-heading">Hot Water</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-brand-line bg-white py-8 md:py-10" aria-label="Room gallery">
      <div class="mx-auto mb-6 max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p class="section-eyebrow">Our Rooms</p>
        <h2 class="page-title mt-2 text-2xl sm:text-3xl">A Glimpse Inside</h2>
      </div>
      <div class="rooms-marquee">
        <div class="rooms-marquee-track">
          ${[1,2,3,4,5,6,7,1,2,3,4,5,6,7].map((n, i) => `
          <figure class="w-64 shrink-0 overflow-hidden rounded-xl border border-brand-line shadow-sm sm:w-72 md:w-80"${i >= 7 ? ' aria-hidden="true"' : ''}>
            <img src="images/sree_ayyapa_${n}.jpeg" alt="${i < 7 ? 'Room view at Sree Ayyappan Rooms' : ''}" class="h-44 w-full object-cover sm:h-48 md:h-52" loading="lazy" />
          </figure>`).join('')}
        </div>
      </div>
    </section>

    <section class="bg-white py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p class="section-eyebrow">Explore</p>
        <h2 class="page-title mt-2">Find What You Need</h2>
        <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${[
            ['accommodations.html', 'Accommodations', 'AC, Non-AC, and dormitory options'],
            ['highlights.html', 'Highlights', 'Safety, service, and guest comforts'],
            ['location.html', 'Location', '80m from Temple West Nada'],
            ['dining.html', 'Dining', 'Pure veg restaurants nearby'],
            ['faq.html', 'FAQ', 'Answers for pilgrim guests'],
            ['contact.html', 'Contact', 'Call or WhatsApp to book'],
          ].map(([href, title, text]) => `
          <a href="${href}" class="card block text-left transition hover:-translate-y-0.5 hover:border-brand-sub hover:shadow-md">
            <h3 class="font-serif text-xl font-semibold text-brand-heading">${title}</h3>
            <p class="mt-2 text-sm text-brand-text">${text}</p>
          </a>`).join('')}
        </div>
      </div>
    </section>`,
});

const accommodations = pageShell({
  active: 'accommodations',
  title: 'Accommodations | Sree Ayyappan Rooms',
  description: 'AC rooms, Non-AC rooms, and dormitory facilities at Sree Ayyappan Rooms near Temple West Nada.',
  main: `
    <section class="bg-white py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <p class="section-eyebrow">Stay Options</p>
          <h1 class="page-title mt-2">Accommodations</h1>
          <p class="mt-3 text-brand-text">Rooms near West Nada for pilgrim groups: AC rooms, Non-AC rooms, and dormitories.</p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          <article class="card group transition hover:-translate-y-0.5 hover:border-brand-sub hover:shadow-md">
            <div class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand-heading">
              <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2m0 14v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M3 12h2m14 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41M8 12a4 4 0 108 0 4 4 0 00-8 0z" /></svg>
            </div>
            <h2 class="text-xl font-semibold text-brand-sub">AC Rooms</h2>
            <p class="mt-3 text-brand-text">Air-conditioned rooms for rest after darshan. A cool, quiet option for families near Temple West Nada.</p>
          </article>
          <article class="card group transition hover:-translate-y-0.5 hover:border-brand-sub hover:shadow-md">
            <div class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand-heading">
              <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 12c2.5-2.5 5-3.5 8-3.5M12 12c-2.5-2.5-5-3.5-8-3.5M12 12c2.5 2.5 5 3.5 8 3.5M12 12c-2.5 2.5-5 3.5-8 3.5M12 4v16" /></svg>
            </div>
            <h2 class="text-xl font-semibold text-brand-sub">Non AC Rooms</h2>
            <p class="mt-3 text-brand-text">Well-ventilated, budget-friendly rooms with modern essentials, a short walk from West Nada.</p>
          </article>
          <article class="card group transition hover:-translate-y-0.5 hover:border-brand-sub hover:shadow-md">
            <div class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand-heading">
              <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7h18M3 12h18M3 17h18M6 7v10M12 7v10M18 7v10" /></svg>
            </div>
            <h2 class="text-xl font-semibold text-brand-sub">Dormitory Facilities</h2>
            <p class="mt-3 text-brand-text">Clean dormitory beds for large pilgrim groups and families, with a focus on hygiene and a convenient location.</p>
          </article>
        </div>
        <div class="mt-12 text-center">
          <a href="contact.html" class="btn-primary">Book a Room</a>
        </div>
      </div>
    </section>`,
});

const highlights = pageShell({
  active: 'highlights',
  title: 'Highlights & Amenities | Sree Ayyappan Rooms',
  description: 'Key highlights and amenities at Sree Ayyappan Rooms near Temple West Nada.',
  main: `
    <section class="bg-white py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <p class="section-eyebrow">Why Stay With Us</p>
          <h1 class="page-title mt-2">Key Highlights</h1>
          <p class="mt-3 text-brand-text">Location, safety, comfort, and nearby convenience for a family stay near the temple.</p>
        </div>
        <ul class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${[
            ['M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z', '80m from West Nada', 'Less than a 1-minute walk to the Temple West Entrance.', true],
            ['M12 3l8 3v6c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V6l8-3z', 'Police Checkpoint Safety', 'Located near the Police Check Point for added security.', false],
            ['', '24/7 Dedicated Room Service', 'Assistance and hospitality available at any hour.', 'clock'],
            ['M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z', 'Pure Drinking and Hot Water', 'Pure drinking water and continuous hot water supply.', false],
            ['M4 3v7a2 2 0 002 2h1v9M8 3v7M11 3v18M16 3c2.5 0 4 2 4 5v13M19 3v5', 'Pure Veg Food Nearby', 'Pure vegetarian restaurants within walking distance.', false],
            ['M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z', 'Clean and Peaceful', 'Clean rooms, fresh linens, and a calm family atmosphere.', false],
          ].map(([d, title, text, special]) => `
          <li class="flex items-start gap-4 card">
            <span class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-heading" aria-hidden="true">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
                ${special === true ? `<path stroke-linecap="round" stroke-linejoin="round" d="${d}" /><circle cx="12" cy="10" r="2.25" />` : ''}
                ${special === 'clock' ? `<circle cx="12" cy="12" r="9" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2" />` : ''}
                ${!special ? `<path stroke-linecap="round" stroke-linejoin="round" d="${d}" />` : ''}
                ${title === 'Police Checkpoint Safety' ? `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />` : ''}
              </svg>
            </span>
            <div>
              <p class="font-semibold text-brand-sub">${title}</p>
              <p class="mt-1 text-sm text-brand-text">${text}</p>
            </div>
          </li>`).join('')}
        </ul>
      </div>
    </section>

    <section class="border-t border-brand-line bg-white py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <p class="section-eyebrow">Guest Comfort</p>
          <h2 class="page-title mt-2">Comforts and Amenities</h2>
          <p class="mt-3 text-brand-text">Practical hospitality for a clean and restful stay near the temple.</p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          ${[
            ['24/7 Dedicated Room Service', 'A dedicated person is available round the clock for assistance whenever you need help.'],
            ['Pure Drinking Water', 'Pure drinking water is available for guests throughout their stay.'],
            ['Continuous Hot Water', 'Hot water for early-morning baths before temple visits and evening returns.'],
            ['Cleanliness and Hygiene', 'Clean rooms with fresh linens and neat washrooms.'],
            ['Flexible Check-In Help', 'Early morning and late-night check-in assistance, plus luggage storage for early arrivals.'],
            ['Darshan Guidance', 'Guidance on temple timing and darshan for a smoother visit.'],
          ].map(([title, text]) => `
          <article class="card">
            <h3 class="text-lg font-semibold text-brand-sub">${title}</h3>
            <p class="mt-2 text-brand-text">${text}</p>
          </article>`).join('')}
        </div>
      </div>
    </section>`,
});

const location = pageShell({
  active: 'location',
  title: 'Location | Sree Ayyappan Rooms near Temple West Nada',
  description: 'Sree Ayyappan Rooms is 80 meters from Temple West Nada, near the Police Check Point.',
  main: `
    <section class="bg-white py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p class="section-eyebrow">Prime Location</p>
            <h1 class="page-title mt-2">Family Safety Near West Nada</h1>
            <p class="mt-4 text-brand-text">Sree Ayyappan Rooms is 80 meters from the Temple West Entrance. Guests can walk to darshan in under a minute and return without long travel.</p>
            <p class="mt-4 text-brand-text">We are located near the Police Check Point, which helps with round-the-clock safety for families, elderly pilgrims, and solo women travelers.</p>
            <ul class="mt-6 space-y-3 text-brand-text">
              <li class="flex gap-2"><span class="text-brand-sub" aria-hidden="true">•</span><span>Less than 1-minute walk to West Entrance</span></li>
              <li class="flex gap-2"><span class="text-brand-sub" aria-hidden="true">•</span><span>Calm, family-oriented atmosphere close to the temple</span></li>
              <li class="flex gap-2"><span class="text-brand-sub" aria-hidden="true">•</span><span>Easy access along West Nada for early morning and late-night visits</span></li>
            </ul>
          </div>
          <div class="rounded-xl border border-brand-line bg-brand-soft p-8 shadow-sm">
            <div class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-heading text-white">
              <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
            </div>
            <h2 class="font-serif text-2xl font-bold text-brand-heading">Location and Distance</h2>
            <p class="mt-4 text-xl font-semibold text-brand-sub">Only 80 meters from the Temple West Entrance</p>
            <p class="mt-3 text-brand-text">Steps away from West Nada. Rest in a calm space after darshan without long walks.</p>
            <div class="mt-6"><span class="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium text-brand-heading border border-brand-line">Police Check Point nearby</span></div>
            <div class="mt-8" aria-hidden="true">
              <div class="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-brand-text/70"><span>Rooms</span><span>West Entrance</span></div>
              <div class="relative mt-2 h-2 rounded-full bg-white">
                <div class="absolute inset-y-0 left-0 w-[18%] rounded-full bg-gradient-to-r from-brand-heading to-brand-sub"></div>
                <div class="absolute left-[18%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-brand-heading shadow"></div>
              </div>
              <p class="mt-3 text-center text-sm font-semibold text-brand-heading">80 meters, under 1 min walk</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-brand-line bg-white py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <p class="section-eyebrow">Find Us</p>
          <h2 class="page-title mt-2">Our Location on the Map</h2>
          <p class="mt-3 text-brand-text">Sree Ayyappan Rooms, just steps from the Temple West Entrance on West Nada.</p>
        </div>
        <div class="mt-10 overflow-hidden rounded-xl border border-brand-line bg-white shadow-sm">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d914.6067966583072!2d76.94207664834059!3d8.482976978940794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbcf8cb5f6cb%3A0x6dba32601d84bbbc!2sSree%20Ayyappan%20Rooms!5e1!3m2!1sen!2sin!4v1792584761356!5m2!1sen!2sin" title="Sree Ayyappan Rooms on Google Maps" class="h-[300px] w-full border-0 sm:h-[400px] md:h-[450px]" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div class="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="https://www.google.com/maps/place/Sree+Ayyappan+Rooms/@8.482976978940794,76.94207664834059,18z" target="_blank" rel="noopener noreferrer" class="btn-primary">Open in Google Maps</a>
          <a href="contact.html" class="btn-secondary">Contact to Book</a>
        </div>
      </div>
    </section>`,
});

const dining = pageShell({
  active: 'dining',
  title: 'Dining Nearby | Sree Ayyappan Rooms',
  description: 'Pure vegetarian restaurants within walking distance of Sree Ayyappan Rooms on West Nada.',
  main: `
    <section class="bg-white py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <p class="section-eyebrow">Nearby Food</p>
          <h1 class="page-title mt-2">Dining and Local Conveniences</h1>
          <p class="mt-3 text-brand-text">Pure vegetarian restaurants are within walking distance of Sree Ayyappan Rooms on West Nada.</p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          ${[
            ['Suda Suda Idli', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.6068307347405!2d76.94097232104465!3d8.482962666048799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb001bb8718f%3A0x3591f98e7dccb312!2sSuda%20Suda%20Idli!5e1!3m2!1sen!2sin!4v1792594230100!5m2!1sen!2sin', true],
            ['Sri Udupi Hotel And Lodge', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.6060127977755!2d76.94079570472238!3d8.483306211917407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bba019fef183%3A0x49336781428c81dd!2sSri%20Udupi%20Hotel%20And%20Lodge!5e1!3m2!1sen!2sin!4v1792594250397!5m2!1sen!2sin', false],
            ['Venkadesa Bhavan', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d457.30348050082796!2d76.94142656193891!3d8.482907950703543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bba0053d11af%3A0xfb021d0976602a4d!2sVenkadesa%20Bhavan!5e1!3m2!1sen!2sin!4v1792594266765!5m2!1sen!2sin', false],
            ['SREE Punjabi Dhabha', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.65159202080636!2d76.94145485758781!3d8.483156988363568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb096bca3e33%3A0x3367d502a0a63f4c!2sSREE%20Punjabi%20Dhabha!5e1!3m2!1sen!2sin!4v1792594292800!5m2!1sen!2sin', false],
            ['Hotel Gowri Krishna', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.6519743968577!2d76.94160695417239!3d8.48251455106289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb00301b239b%3A0xe83a70634fd2782d!2sHOTEL%20GOWRI%20KRISHNA!5e1!3m2!1sen!2sin!4v1792594335018!5m2!1sen!2sin', false],
            ['Hotel Annapoorna', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1829.2142488525385!2d76.94036019673308!3d8.482839307804806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb0ee2e3de8b%3A0x5f547e8893107af8!2sHotel%20Annapoorna!5e1!3m2!1sen!2sin!4v1792594191784!5m2!1sen!2sin', false],
          ].map(([name, src, featured]) => `
          <article class="overflow-hidden rounded-xl border ${featured ? 'border-2 border-brand-heading bg-brand-soft shadow-md' : 'border-brand-line bg-white shadow-sm'}">
            <div class="px-4 pt-4">
              ${featured ? '<span class="mb-2 inline-block rounded-full bg-brand-heading px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">Closest option</span>' : ''}
              <h2 class="font-semibold text-brand-heading">${name}</h2>
              <p class="mt-1 text-sm text-brand-text">Walking distance, pure vegetarian</p>
            </div>
            <iframe src="${src}" title="${name} on Google Maps" class="mt-3 h-48 w-full border-0" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </article>`).join('')}
        </div>
        <div class="mx-auto mt-10 max-w-3xl rounded-xl border border-brand-line bg-brand-soft p-6 text-center shadow-sm sm:p-8">
          <h3 class="text-lg font-semibold text-brand-heading">Healthcare Nearby</h3>
          <p class="mt-2 text-brand-text">Government hospitals and medical care facilities are close by for emergencies.</p>
        </div>
      </div>
    </section>`,
});

const faq = pageShell({
  active: 'faq',
  title: 'FAQ | Sree Ayyappan Rooms',
  description: 'Frequently asked questions about Sree Ayyappan Rooms near Temple West Nada.',
  extra: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How far is Sree Ayyappan Rooms from the temple West Entrance / West Nada?","acceptedAnswer":{"@type":"Answer","text":"Sree Ayyappan Rooms is located just 80 meters from the Temple West Entrance (West Nada), less than a 1-minute walk for pilgrims and families."}},{"@type":"Question","name":"Is it safe for families and solo women travelers?","acceptedAnswer":{"@type":"Answer","text":"Yes. We are located near the Police Check Point, which supports round-the-clock security for families and female travelers."}},{"@type":"Question","name":"Are pure vegetarian restaurants available nearby?","acceptedAnswer":{"@type":"Answer","text":"Yes. Pure vegetarian restaurants within walking distance include Suda Suda Idli, Sri Udupi Hotel And Lodge, Venkadesa Bhavan, SREE Punjabi Dhabha, Hotel Gowri Krishna, and Hotel Annapoorna."}},{"@type":"Question","name":"Do you provide hot water and drinking water?","acceptedAnswer":{"@type":"Answer","text":"Yes. Guests have pure drinking water and continuous hot water, along with 24/7 room service."}},{"@type":"Question","name":"Can we check in early morning or late at night?","acceptedAnswer":{"@type":"Answer","text":"Yes. We offer early morning and late-night check-in help for pilgrims, luggage storage for early arrivals, and guidance on temple timing and darshan."}}]}</script>`,
  main: `
    <section class="bg-white py-16 md:py-20">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="section-eyebrow">Help</p>
          <h1 class="page-title mt-2">Frequently Asked Questions</h1>
          <p class="mt-3 text-brand-text">Common questions about rooms near Temple West Nada.</p>
        </div>
        <div class="mt-10 space-y-3">
          ${[
            ['How far is the lodge from the temple West Entrance / West Nada?', 'Sree Ayyappan Rooms is 80 meters from the Temple West Entrance (West Nada), less than a 1-minute walk for pilgrims and families.'],
            ['Is it safe for solo female travelers and families?', 'Yes. We are located near the Police Check Point. The setting is calm and suitable for families and women travelers.'],
            ['Are pure vegetarian restaurants available nearby?', 'Yes. Options within walking distance include Suda Suda Idli, Sri Udupi Hotel And Lodge, Venkadesa Bhavan, SREE Punjabi Dhabha, Hotel Gowri Krishna, and Hotel Annapoorna.'],
            ['Do you provide hot water and drinking water?', 'Yes. Guests have pure drinking water and continuous hot water, plus 24/7 room service.'],
            ['Can we check in early morning or late at night?', 'Yes. We support early morning and late-night check-in, offer luggage storage for early arrivals, and can share guidance on temple timing and darshan.'],
          ].map(([q, a]) => `
          <details class="faq-item group rounded-xl border border-brand-line bg-white p-5 shadow-sm open:shadow-md">
            <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sub">
              <span>${q}</span>
              <svg class="faq-chevron h-5 w-5 shrink-0 text-brand-sub transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <p class="mt-3 text-brand-text">${a}</p>
          </details>`).join('')}
        </div>
        <div class="mt-10 text-center">
          <a href="contact.html" class="btn-primary">Still have questions? Contact us</a>
        </div>
      </div>
    </section>`,
});

const contact = pageShell({
  active: 'contact',
  title: 'Contact & Booking | Sree Ayyappan Rooms',
  description: 'Book Sree Ayyappan Rooms near Temple West Nada. Call 7511148115 or 9061338169.',
  main: `
    <section class="bg-white py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <p class="section-eyebrow">Reservations</p>
          <h1 class="page-title mt-2">Book Your Stay Near Temple West Nada</h1>
          <p class="mt-3 text-brand-text">Call or WhatsApp to reserve a room. We welcome families, pilgrims, and women travelers.</p>
        </div>
        <div class="mx-auto mt-12 max-w-3xl rounded-xl border border-brand-line bg-brand-soft p-6 shadow-sm sm:p-8 md:p-10">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p class="text-sm font-semibold uppercase tracking-wider text-brand-sub">Phone</p>
              <a href="tel:7511148115" class="mt-2 inline-block text-2xl font-bold text-brand-heading transition hover:text-brand-sub sm:text-3xl">7511148115</a>
              <a href="tel:9061338169" class="mt-1 block text-xl font-bold text-brand-heading transition hover:text-brand-sub">9061338169</a>
            </div>
            <div>
              <p class="text-sm font-semibold uppercase tracking-wider text-brand-sub">Email</p>
              <a href="mailto:kiranraveendran74@gmail.com" class="mt-2 inline-block break-all text-lg font-semibold text-brand-heading transition hover:text-brand-sub">kiranraveendran74@gmail.com</a>
            </div>
          </div>
          <div class="mt-8 border-t border-brand-line pt-8">
            <p class="text-sm font-semibold uppercase tracking-wider text-brand-sub">Address / Proximity</p>
            <p class="mt-2 text-lg font-medium text-brand-text">80 meters from the Temple West Entrance (West Nada), near the Police Check Point.</p>
          </div>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="tel:7511148115" class="btn-primary flex-1">Call Now</a>
            <a href="https://wa.me/917511148115?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Sree%20Ayyappan%20Rooms%20near%20Temple%20West%20Nada." target="_blank" rel="noopener noreferrer" class="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#1ebe57]">WhatsApp Book</a>
            <a href="mailto:kiranraveendran74@gmail.com" class="btn-secondary flex-1">Send Email</a>
          </div>
        </div>
      </div>
    </section>`,
});

fs.writeFileSync('index.html', home);
fs.writeFileSync('accommodations.html', accommodations);
fs.writeFileSync('highlights.html', highlights);
fs.writeFileSync('location.html', location);
fs.writeFileSync('dining.html', dining);
fs.writeFileSync('faq.html', faq);
fs.writeFileSync('contact.html', contact);

console.log('Generated pages:', pages.map((p) => (p === 'index' ? 'index.html' : `${p}.html`)).join(', '));
