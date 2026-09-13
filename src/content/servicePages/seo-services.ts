import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'seo-services',
  route: '/seo-services',
  breadcrumbTitle: 'SEO Services',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'SEO Services',
    metaTitle: 'SEO Services for Growing Businesses | AT Tech Global',
    metaDescription:
      'Search engine optimisation as a compounding process: technical foundations, keyword research, on-page work, content, local SEO and honest monthly reporting.',
    keywords:
      'seo services, search engine optimisation company, technical seo audit, keyword research services, local seo services, content strategy, link building and digital pr',
    ogTitle: 'SEO Services for Growing Businesses | AT Tech Global',
    ogDescription:
      'A structured SEO programme covering technical health, content and authority, reported without vanity metrics.',
  },
  intro: {
    eyebrow: 'Search Visibility',
    heading: 'SEO That Compounds Instead of Restarting Every Month',
    paragraphs: [
      'Optimisation is not a switch you flip. It is a set of technical, editorial and reputational improvements that accumulate, which means work done in month one is often still earning traffic in month eighteen. Pages that rank well tend to be quick to load, clearly structured, genuinely more useful than the alternatives, and mentioned by sites that have earned their own authority.',
      'We have run SEO alongside web design and development since 2010, so the recommendations we make are usually changes our own team can ship. This page explains the shape of the whole engagement: technical foundations first, then intent-led content, then authority building. Narrower, tactical detail lives on our dedicated search page and in the audits we produce for each client.',
    ],
  },
  highlights: [
    {
      icon: 'technical.svg',
      title: 'Foundations Before Content',
      text: 'If search engines cannot crawl, render and index the site cleanly, no amount of new writing will compensate.',
    },
    {
      icon: 'search.svg',
      title: 'Grouped by Search Intent',
      text: 'Keywords are clustered by what the searcher is trying to accomplish rather than by raw monthly volume.',
    },
    {
      icon: 'analytics.svg',
      title: 'Reporting Without Vanity',
      text: 'Impressions, qualified sessions and enquiries reported every month, with the caveats written in plain sight.',
    },
  ],
  features: {
    eyebrow: 'Programme Pillars',
    heading: 'The Workstreams Inside an SEO Engagement',
    intro:
      'Depending on your starting point, an engagement leans harder on some of these than others, and we say which and why.',
    items: [
      {
        icon: 'technical.svg',
        title: 'Technical SEO Review',
        text: 'Crawl budget, indexation, canonicals, redirect chains, structured data, sitemaps and Core Web Vitals in one pass.',
      },
      {
        icon: 'search.svg',
        title: 'Keyword and Intent Research',
        text: 'Cluster mapping across informational, commercial and local intent, each scored for difficulty and business value.',
      },
      {
        icon: 'on-page.svg',
        title: 'On-Page Optimisation',
        text: 'Titles, headings, internal links, schema markup and page structure aligned to the query being targeted.',
      },
      {
        icon: 'content.svg',
        title: 'Content Strategy and Production',
        text: 'Editorial calendars, detailed briefs and drafting for pages that answer a question better than the current top result.',
      },
      {
        icon: 'location.svg',
        title: 'Local and Map Visibility',
        text: 'Google Business Profile work, location pages, citation consistency and a repeatable review collection process.',
      },
      {
        icon: 'off-page.svg',
        title: 'Digital PR and Link Acquisition',
        text: 'Outreach, data-led assets and earned coverage that produce links a competitor cannot simply buy their way into.',
      },
    ],
  },
  process: {
    eyebrow: 'Engagement Path',
    heading: 'A Quarter-by-Quarter SEO Programme',
    intro:
      'The roadmap is planned in quarters so effort is visible and progress can be judged against something agreed in advance.',
    steps: [
      { title: 'Discovery and Access Setup', text: 'Analytics, Search Console and crawl access confirmed, then commercial goals agreed.' },
      { title: 'Technical Audit and Baseline', text: 'A full crawl records what is broken, what is blocked and where rankings stand today.' },
      { title: 'Keyword and Content Roadmap', text: 'Priority clusters are sequenced into a plan with effort and expected value attached.' },
      { title: 'Implementation Sprints', text: 'Technical fixes and page changes ship in fortnightly batches with a written changelog.' },
      { title: 'Measure, Report, Adjust', text: 'Monthly reporting reviews movement and the roadmap is adjusted on the evidence.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope of Work',
    heading: 'What You Receive Each Month',
    intro:
      'Deliverables are concrete items you can file, check and question rather than hours of unspecified activity.',
    items: [
      'Technical SEO audit with prioritised fixes',
      'Keyword and search intent map with volumes',
      'Optimised titles, headings and metadata per page',
      'Content briefs and a rolling editorial calendar',
      'Google Business Profile and citation work',
      'Link acquisition and digital PR outreach log',
      'Ranking, traffic and enquiry reporting dashboard',
      'Quarterly strategy call with the next roadmap',
    ],
  },
  faqs: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Search Optimisation Questions, Answered Honestly',
    items: [
      {
        question: 'How long does SEO take to show results?',
        answer:
          'Technical fixes can improve indexing within days, but meaningful ranking movement usually takes three to six months, and competitive commercial terms take longer. That is because search engines need time to recrawl, reassess and trust a page. Anyone promising page one positions in a fortnight is either targeting terms nobody searches or guessing.',
      },
      {
        question: 'Can you guarantee first-page rankings?',
        answer:
          'No, and no agency can. Search algorithms are not public and competitors keep working too. What we can commit to is a defined scope of work, transparent reporting and a documented record of what was changed and when. If progress stalls we will tell you which hypothesis failed rather than quietly reclassifying the goal.',
      },
      {
        question: 'What is the difference between SEO and paid advertising?',
        answer:
          'Paid search buys visibility immediately and stops the moment spending stops. Organic optimisation earns visibility that persists and tends to convert better because the visitor trusts a result they chose rather than one that was promoted. Most businesses get the best return using paid search for immediate demand while SEO compounds in the background.',
      },
      {
        question: 'What do you need from our side to get started?',
        answer:
          'Read-only access to Google Analytics and Search Console, a crawl allowance on the website, and roughly two hours with someone who knows the commercial priorities. A named contact for content approval keeps momentum. If we are also building or maintaining the site, most of the access is already in place.',
      },
      {
        question: 'How do you measure whether SEO is actually working?',
        answer:
          'We track impressions for target clusters, non-branded organic sessions, landing-page engagement and completed enquiries or sales. Rankings are a diagnostic, not a goal. The clearest sign of progress is non-branded traffic growing toward pages that convert, even when individual keyword positions fluctuate week to week.',
      },
      {
        question: 'Do you tie clients into a long contract?',
        answer:
          'Initial terms run three to six months because that is the shortest period in which the work can be fairly judged. After that the agreement continues monthly and you can stop with notice. Everything produced, including audits, briefs and dashboards, belongs to you and stays accessible after the engagement ends.',
      },
      {
        question: 'Is SEO still worth doing now that AI answers appear in search?',
        answer:
          'It is, though the shape of the opportunity has shifted. Clear structure, genuine expertise and citable facts matter more because answer engines lift from pages they can parse confidently. We now include entity clarity, well-marked-up data and content that answers a question directly, alongside the classic technical and editorial work.',
      },
    ],
  },
  related: [
    { label: 'Search Engine Optimisation', href: '/service/seo' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
    { label: 'Gurgaon Digital Marketing', href: '/gurgaon-digital-marketing' },
    { label: 'Website Maintenance', href: '/website-maintenance' },
    { label: 'Corporate Website Design', href: '/corporate-website-design' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default content
