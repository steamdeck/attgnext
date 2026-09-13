import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'static-website-design',
  route: '/static-website-design',
  breadcrumbTitle: 'Static Website Design',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Static Website Design',
    metaTitle: 'Static Website Design Company | AT Tech Global',
    metaDescription:
      'Fast, secure and affordable static website design. Hand-coded pages, lightning load times and zero plugin maintenance. Get a free quote from AT Tech Global.',
    keywords:
      'static website design, static website development, html website design, fast static site, static website company',
    ogTitle: 'Static Website Design Company | AT Tech Global',
    ogDescription:
      'Hand-coded static websites that load in under a second, stay secure and need almost no maintenance.',
  },
  intro: {
    eyebrow: 'Static Website Design',
    heading: 'Blazing-Fast Static Websites Built to Last',
    paragraphs: [
      'A static website is built from pre-rendered HTML, CSS and JavaScript files instead of a database-driven engine. That means there is nothing to query, nothing to compile on each request and nothing that can be taken down by a plugin conflict. Pages are delivered straight from the server or a global CDN, which is why static sites consistently rank among the fastest experiences on the web.',
      'Our static website design service is aimed at businesses that need a sharp, trustworthy online presence without the overhead of a heavy CMS. We hand-code semantic markup, compress every asset and ship a build that scores green on Core Web Vitals from day one. You get a site that is cheap to host, simple to secure and effortless to scale.',
    ],
  },
  highlights: [
    {
      icon: 'speed.svg',
      title: 'Sub-Second Load Times',
      text: 'Pre-rendered pages and optimised assets mean your content paints almost instantly on any connection.',
    },
    {
      icon: 'security.svg',
      title: 'A Fraction of the Attack Surface',
      text: 'No database and no server-side runtime removes the most common vectors attackers rely on.',
    },
    {
      icon: 'cost.svg',
      title: 'Low Cost, Low Maintenance',
      text: 'Static hosting is inexpensive and your site keeps running without monthly plugin updates.',
    },
  ],
  features: {
    eyebrow: 'What You Get',
    heading: 'Everything Included in Our Static Website Builds',
    intro:
      'Each static website is designed, written and engineered as a complete package — not a template with your logo dropped in.',
    items: [
      {
        icon: 'ux-ui.svg',
        title: 'Bespoke Design',
        text: 'A custom layout built around your brand, audience and conversion goals rather than a recycled theme.',
      },
      {
        icon: 'responsive.svg',
        title: 'Fully Responsive',
        text: 'Pixel-accurate across mobile, tablet and desktop with tested breakpoints at every common screen width.',
      },
      {
        icon: 'search.svg',
        title: 'Technical SEO Ready',
        text: 'Semantic headings, clean URLs, structured data, sitemap and meta tags wired in from the first commit.',
      },
      {
        icon: 'performance.svg',
        title: 'Performance Budgeting',
        text: 'Compressed images, lazy loading and minified bundles kept within a strict page weight budget.',
      },
      {
        icon: 'template.svg',
        title: 'Reusable Components',
        text: 'Modular sections you can duplicate for new pages without touching a single line of styling.',
      },
      {
        icon: 'support.svg',
        title: 'Launch & Handover',
        text: 'DNS, SSL, hosting and analytics configured for you, plus a walkthrough of how to edit content.',
      },
    ],
  },
  process: {
    eyebrow: 'How We Work',
    heading: 'Our Static Website Design Process',
    intro:
      'A short, predictable delivery cycle keeps static projects moving quickly from brief to live site.',
    steps: [
      { title: 'Discovery & Sitemap', text: 'We map your goals, audience and the exact page set the site needs.' },
      { title: 'Wireframe & Design', text: 'Layouts are wireframed, then designed as responsive high-fidelity screens.' },
      { title: 'Hand-Coded Build', text: 'Clean semantic HTML and CSS, built component by component.' },
      { title: 'Speed & SEO Pass', text: 'Assets compressed, markup validated and Core Web Vitals tuned.' },
      { title: 'Launch & Handover', text: 'Hosting, SSL and analytics go live with documentation handed over.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope of Work',
    heading: 'The Handover Pack for Every Static Build',
    intro:
      'Static website projects are fixed-scope and fixed-price, so you know exactly what you are getting before we start.',
    items: [
      'Custom responsive design for every agreed page template',
      'Hand-coded, W3C-valid HTML5 and modern CSS',
      'Contact form with spam protection and email routing',
      'On-page SEO essentials and XML sitemap',
      'Image optimisation and lazy loading throughout',
      'Google Analytics and Search Console setup',
      'Cross-browser and cross-device QA sign-off',
      'Deployment, SSL and a written handover guide',
    ],
  },
  faqs: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Static Website Design FAQ',
    items: [
      {
        question: 'What is the difference between a static and a dynamic website?',
        answer:
          'A static website serves pre-built HTML files, so every visitor receives the same finished page. A dynamic website generates each page on request using a database and server-side code. Static sites are faster and more secure; dynamic sites are better when you need user accounts, search, or content that changes many times a day.',
      },
      {
        question: 'Can I update a static website myself?',
        answer:
          'Yes. We can connect a lightweight headless content layer or a Git-based editor so you can change text and images without touching code. If you prefer zero tooling, we simply hand over the source files and update them for you under a maintenance plan.',
      },
      {
        question: 'How long does a static website take to build?',
        answer:
          'A typical five to eight page brochure site takes two to three weeks from approved design to launch. Larger sites with many templates usually run four to six weeks. The timeline depends mainly on how quickly content and feedback come back from your side.',
      },
      {
        question: 'Is a static website good for SEO?',
        answer:
          'It is excellent for SEO. Because the HTML is pre-rendered, search engines see the complete page immediately without waiting for JavaScript. Combined with fast load times, clean markup and structured data, static sites frequently outrank heavier competitors for the same keywords.',
      },
      {
        question: 'Where will my static website be hosted?',
        answer:
          'We deploy to modern static hosting such as Netlify, Vercel, Cloudflare Pages or your existing cPanel account. Global CDN delivery is included, which means your pages load quickly for visitors regardless of their location.',
      },
      {
        question: 'What does a static website cost?',
        answer:
          'Pricing depends on the number of unique page templates and how much custom design work is involved. Static sites are typically less expensive than equivalent CMS builds because there is no database, admin panel or plugin stack to configure and secure.',
      },
      {
        question: 'Can you convert my existing website into a static site?',
        answer:
          'Yes. We audit your current pages, migrate the content into the new structure, redirect old URLs so rankings are preserved, and rebuild the design as a fast static site. The migration is planned so there is no downtime for your visitors.',
      },
    ],
  },
  related: [
    { label: 'Responsive Website Design', href: '/responsive-website-design' },
    { label: 'Dynamic Website Design', href: '/dynamic-website-design' },
    { label: 'Corporate Website Design', href: '/corporate-website-design' },
    { label: 'Website Maintenance', href: '/website-maintenance' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
    { label: 'SEO Services', href: '/seo-services' },
  ],
}

export default content
