import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'website-redesigning',
  route: '/website-redesigning',
  breadcrumbTitle: 'Website Redesigning',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Website Redesigning',
    metaTitle: 'Website Redesign Services That Keep SEO | AT Tech Global',
    metaDescription:
      'Redesign your website without losing rankings: a pre-launch audit, page-level redirect mapping, content pruning and a phased rollout measured against baselines.',
    keywords:
      'website redesigning, website redesign services, redesign without losing seo, url redirect mapping, website migration seo, corporate website redesign',
    ogTitle: 'Website Redesign Services That Keep SEO | AT Tech Global',
    ogDescription:
      'A redesign that protects the traffic you already earned: audit, redirect map, content decisions and post-launch measurement.',
  },
  intro: {
    eyebrow: 'Website Redesigning',
    heading: 'A New Website Without Losing the Traffic You Already Earned',
    paragraphs: [
      'Most redesign disasters are self-inflicted. A new template ships, the old URLs disappear, redirects are left to a catch-all, half the long-tail pages are quietly dropped, and within six weeks organic traffic has halved. Nothing was wrong with the new design. What went missing was the mapping between the site that rankings were earned on and the site that replaced it.',
      'Our redesign service starts with an audit of what already works, so the rebuild keeps the pages, phrases and internal links that bring in qualified visitors. We decide what is a genuine usability or conversion defect and what is only a matter of taste, produce a page-level redirect map, migrate and prune content deliberately, and measure the outcome against a baseline recorded before anything changed.',
    ],
  },
  highlights: [
    {
      icon: 'ranking.svg',
      title: 'Rankings Protected First',
      text: 'The pages and queries that already earn traffic are identified and preserved before any design decision is made.',
    },
    {
      icon: 'analytics.svg',
      title: 'Evidence Before Opinion',
      text: 'Heatmaps, funnel data and search console queries separate real conversion problems from cosmetic preferences.',
    },
    {
      icon: 'strategy.svg',
      title: 'Phased or Single Cutover',
      text: 'You choose a controlled section-by-section rollout or one launch, with the tradeoffs explained in advance.',
    },
  ],
  features: {
    eyebrow: 'Redesign Workstreams',
    heading: 'What a Careful Redesign Involves',
    intro:
      'Five workstreams run alongside the visual redesign, each with its own checklist and sign-off point.',
    items: [
      {
        icon: 'search.svg',
        title: 'Pre-Redesign SEO Audit',
        text: 'Crawl, rankings, backlinks and top landing pages captured as a frozen baseline for later comparison.',
      },
      {
        icon: 'ux.svg',
        title: 'UX & Conversion Diagnosis',
        text: 'Form abandonment, drop-off pages and mobile friction are diagnosed from data rather than personal taste.',
      },
      {
        icon: 'technical.svg',
        title: 'URL & Redirect Mapping',
        text: 'Every old URL is matched to its new destination, with 301s, canonical tags and hreflang updated together.',
      },
      {
        icon: 'content.svg',
        title: 'Content Migration & Pruning',
        text: 'Each page is kept, merged or retired on evidence, so thin duplicates are removed without losing equity.',
      },
      {
        icon: 'performance.svg',
        title: 'Pre-Launch QA Pass',
        text: 'Staging is crawled for broken links, stray noindex tags, missing metadata and Core Web Vitals regressions.',
      },
      {
        icon: 'engagement.svg',
        title: 'Post-Launch Measurement',
        text: 'Rankings, traffic and conversion are tracked weekly against the baseline with a documented recovery plan.',
      },
    ],
  },
  process: {
    eyebrow: 'The Redesign Sequence',
    heading: 'From Baseline to Measured Outcome',
    intro:
      'The order matters: capture the baseline, decide what actually changes, then rebuild with the redirect map already written.',
    steps: [
      { title: 'Baseline & Audit', text: 'We record current rankings, traffic, conversions and a full crawl of existing URLs.' },
      { title: 'Decide What Changes', text: 'Each proposed change is classified as a conversion fix or a cosmetic preference.' },
      { title: 'Redirect & Content Plan', text: 'The URL map and keep, merge or retire decisions are signed off in advance.' },
      { title: 'Rebuild & QA', text: 'Templates are rebuilt, then staging is crawled and compared against the audit.' },
      { title: 'Cutover & Measure', text: 'Launch happens with monitoring in place and weekly reporting for ninety days.' },
    ],
  },
  deliverables: {
    eyebrow: 'What a Redesign Produces',
    heading: 'Redesign Deliverables',
    intro:
      'The redesign itself is only part of the output. The audit trail and mapping documents are what protect your existing visibility.',
    items: [
      'Crawl, rankings and conversion baseline frozen before launch',
      'Page-level URL map with 301 redirects for every change',
      'Content inventory marking each page keep, merge or retire',
      'UX and conversion fixes for the journeys losing customers',
      'New responsive templates built on the existing design system',
      'Pre-launch QA report signed off on the staging environment',
      'Ninety-day post-launch monitoring dashboard',
      'Rollback plan with a tested restore point',
    ],
  },
  faqs: {
    eyebrow: 'Redesign & SEO FAQ',
    heading: 'Website Redesigning FAQ',
    items: [
      {
        question: 'Will a redesign damage our search rankings?',
        answer:
          'It will if URLs change without redirects, if content is deleted because it looks old, or if a new template removes the headings and internal links crawlers rely on. Those are avoidable mistakes rather than consequences of redesigning. With a frozen baseline, a complete redirect map, a content decision for every page and a QA crawl before launch, most sites see rankings hold or improve within a few weeks.',
      },
      {
        question: 'How do we know which pages actually matter?',
        answer:
          'We combine Search Console query data, analytics landing page reports and backlink profiles. Pages that earn organic entries or external links are protected by default. Pages with no traffic, no links and no conversion role become candidates for merging or retirement, which is often how a redesign improves crawl efficiency rather than harming it.',
      },
      {
        question: 'Should we rebuild in phases or launch all at once?',
        answer:
          'A single cutover is simpler to manage and avoids running two systems, but it concentrates risk. Phasing by section lets you watch each wave in search data before continuing and is safer on large sites with thousands of URLs. We recommend phasing when more than roughly five hundred indexable pages are changing templates at once.',
      },
      {
        question: 'How long should we keep redirects in place?',
        answer:
          'Keep permanent 301 redirects indefinitely. Search engines treat them as signals that consolidate ranking strength on the new URL, but links in old emails, PDFs, printed material and partner sites may still point at the previous address for years. Redirect chains should be collapsed to a single hop and monitored so they do not silently rot.',
      },
      {
        question: 'Can we redesign the look without touching the structure?',
        answer:
          'Yes, and it is the lowest-risk option when rankings are strong. We update typography, colour, imagery, spacing and component styling while keeping URLs, page hierarchy, headings and internal linking identical. Visual refresh projects can often be delivered in three to four weeks without any redirect work at all.',
      },
      {
        question: 'How do you measure whether the redesign worked?',
        answer:
          'Against the baseline captured before launch. We track organic sessions by landing page, keyword positions for the pages that previously earned traffic, form and checkout conversion rates, Core Web Vitals and crawl errors. Ninety days of weekly reporting shows whether movement is a temporary settling period or a genuine problem needing intervention.',
      },
      {
        question: 'What happens if something goes wrong at launch?',
        answer:
          'We keep the previous version deployable and a database backup taken immediately before cutover, so a rollback can be completed in minutes rather than rebuilt over days. The launch also happens early in the week during business hours, never on a Friday evening before a holiday, so any issue is caught while the full team is available.',
      },
    ],
  },
  related: [
    { label: 'SEO Services', href: '/seo-services' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
    { label: 'Responsive Website Design', href: '/responsive-website-design' },
    { label: 'Corporate Website Design', href: '/corporate-website-design' },
    { label: 'CMS Development', href: '/cms-development' },
    { label: 'Website Maintenance', href: '/website-maintenance' },
  ],
}

export default content
