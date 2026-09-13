import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'performance-optimization',
  route: '/performance-optimization',
  breadcrumbTitle: 'Performance Optimization',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Performance Optimization',
    metaTitle: 'Performance Optimization Services | AT Tech Global',
    metaDescription:
      'Improve Core Web Vitals with compressed images, leaner JavaScript, better fonts, CDN caching and query tuning, measured on real user field data.',
    keywords:
      'performance optimization, core web vitals optimization, website speed optimization, improve lcp, reduce inp, website speed audit, cdn and caching setup',
    ogTitle: 'Performance Optimization Services | AT Tech Global',
    ogDescription:
      'We find what actually slows a page down and fix it, using field data rather than a single lab score.',
  },
  intro: {
    eyebrow: 'Core Web Vitals',
    heading: 'Make an Existing Website Fast, Then Prove It With Data',
    paragraphs: [
      'A slow page is almost never slow for one reason. It is a 2.4 MB hero image, two render-blocking font files, a tag manager loading three separate analytics tools, and a database query that reruns on every single page view. Fix one of those alone and the gain disappears into the noise; fix them together and the difference is visible within the same week.',
      'We optimise sites that already exist rather than rebuilding them. Work starts with real visitor data from the Chrome UX Report and your own analytics, then moves through images, fonts, JavaScript, caching and server response time in the order the measurements demand. Every change is tied to the metric it was meant to move, and verified four weeks later.',
    ],
  },
  highlights: [
    {
      icon: 'speed.svg',
      title: 'LCP: The Main Element',
      text: 'Largest Contentful Paint records when the biggest image or headline finishes rendering on a genuine visitor session.',
    },
    {
      icon: 'performance.svg',
      title: 'INP: The Reaction Time',
      text: 'Interaction to Next Paint measures how long the page takes to visibly respond after a tap, click or keypress.',
    },
    {
      icon: 'analytics.svg',
      title: 'CLS: The Jitter Score',
      text: 'Cumulative Layout Shift counts how far visible content jumps around while the page is still settling.',
    },
  ],
  features: {
    eyebrow: 'What We Fix',
    heading: 'The Six Levers Behind Most Slow Websites',
    intro:
      'Each item is measured before and after, so you can see which change bought which improvement.',
    items: [
      {
        icon: 'performance.svg',
        title: 'Image Compression and Formats',
        text: 'AVIF and WebP conversion, correctly sized variants per breakpoint, and lazy loading for everything below the fold.',
      },
      {
        icon: 'content.svg',
        title: 'Font Loading Strategy',
        text: 'Self-hosted subsets, preloaded critical faces and font-display swap so text never flashes invisible.',
      },
      {
        icon: 'technical.svg',
        title: 'JavaScript Reduction',
        text: 'Bundle analysis, tree shaking and per-route code splitting so each page ships only the code it actually runs.',
      },
      {
        icon: 'cloud.svg',
        title: 'Caching and CDN Delivery',
        text: 'Long-lived immutable asset headers plus edge delivery from locations close to where your visitors actually are.',
      },
      {
        icon: 'nodejs.svg',
        title: 'Server and Query Tuning',
        text: 'Lower time to first byte through opcode caching, query indexing, object caching and connection pooling.',
      },
      {
        icon: 'assessment.svg',
        title: 'Third-Party Script Audit',
        text: 'Every tag, chat widget and tracking pixel costed in milliseconds, then deferred, self-hosted or removed.',
      },
    ],
  },
  process: {
    eyebrow: 'Our Method',
    heading: 'Measure, Attribute, Fix, Re-Measure',
    intro:
      'Guessing at speed work wastes budget, so the sequence below is deliberately evidence first.',
    steps: [
      { title: 'Baseline Measurement', text: 'We capture field data and lab scores for each key template before touching anything.' },
      { title: 'Bottleneck Attribution', text: 'Network waterfalls and main-thread traces show which resource costs the most time.' },
      { title: 'Prioritised Fix List', text: 'Changes are ranked by measured impact against the effort each one requires.' },
      { title: 'Batched Implementation', text: 'Fixes ship in small batches so any regression is easy to attribute and reverse.' },
      { title: 'Verification and Alerts', text: 'Field data is re-checked for four weeks and monitoring flags future regressions.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope of Work',
    heading: 'What the Optimisation Engagement Produces',
    intro:
      'You receive both the working improvements and the evidence that they landed.',
    items: [
      'Field data baseline taken from real visitor sessions',
      'Lighthouse and WebPageTest lab reports per template',
      'Optimised images in AVIF and WebP at correct sizes',
      'Third-party scripts deferred, consolidated or removed',
      'Cache header and CDN configuration applied',
      'Database query and indexing recommendations',
      'Before and after Core Web Vitals comparison',
      'Regression monitoring alerts on key templates',
    ],
  },
  faqs: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Website Speed and Core Web Vitals FAQ',
    items: [
      {
        question: 'What is the difference between field data and lab tools?',
        answer:
          'Lab tools such as Lighthouse run one page load on one fast machine and are useful for diagnosis. Field data comes from real visitors on real devices and connections, and is what Google actually uses for ranking signals. A page can score 95 in the lab and still fail Core Web Vitals in the field, so we always start with field data.',
      },
      {
        question: 'How long before the improvements show up in reports?',
        answer:
          'Most technical gains are live the moment they deploy, and you will see them immediately in Lighthouse. The Chrome UX Report and Search Console Core Web Vitals report use a rolling twenty-eight day window, so field figures typically take three to four weeks to reflect a change properly.',
      },
      {
        question: 'Does page speed really affect search rankings?',
        answer:
          'Yes, but it is a tie-breaker rather than a silver bullet. Core Web Vitals are a confirmed ranking input, and speed influences how many pages Google crawls. The bigger commercial effect is behavioural: slower pages lose visitors before they read anything, which reduces conversions and the engagement signals that follow.',
      },
      {
        question: 'Can you speed up my site without redesigning it?',
        answer:
          'In most cases yes. Image handling, font loading, script deferral, caching and query tuning account for the bulk of the gains and require no visual change. If a template is fundamentally heavy, we will quantify how much is recoverable without a rebuild and let you decide whether a redesign is worth the extra cost.',
      },
      {
        question: 'Why is my site fast on desktop but slow on mobile?',
        answer:
          'Mobile devices have slower processors, less memory and often weaker connections, so the same JavaScript executes several times more slowly. Mobile is also where most traffic and all of the Google ranking assessment happens. Optimisation work therefore targets mid-range Android hardware rather than a developer laptop.',
      },
      {
        question: 'How much does a performance optimisation project cost?',
        answer:
          'A single-template speed sprint is usually a fixed one-off fee, while multi-template sites or ecommerce stores are scoped after a baseline audit. We quote only work with a realistic measurable benefit, and we say so when a suggested fix would cost more than the milliseconds it saves.',
      },
      {
        question: 'What is a good Core Web Vitals score to aim for?',
        answer:
          'Google treats a good result as Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift below 0.1, measured at the 75th percentile of real visits. Aim for all three at that percentile, since averaging across all visitors hides the slow experiences that damage trust.',
      },
    ],
  },
  related: [
    { label: 'Website Maintenance', href: '/website-maintenance' },
    { label: 'SEO Services', href: '/seo-services' },
    { label: 'Website Redesigning', href: '/website-redesigning' },
    { label: 'Responsive Website Design', href: '/responsive-website-design' },
    { label: 'Security Audits', href: '/security-audits' },
  ],
}

export default content
