import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'corporate-website-design',
  route: '/corporate-website-design',
  breadcrumbTitle: 'Corporate Website Design',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Corporate Website Design',
    metaTitle: 'Corporate Website Design Services | AT Tech Global',
    metaDescription:
      'Corporate website design for complex organisations: governed multi-department content, WCAG 2.2 AA accessibility and integration with your enterprise systems.',
    keywords:
      'corporate website design, enterprise website design, multi department website, wcag accessible website, investor relations website, corporate web design company',
    ogTitle: 'Corporate Website Design Services | AT Tech Global',
    ogDescription:
      'Websites that hold up to brand, legal, HR and procurement scrutiny while staying maintainable for the next five years.',
  },
  intro: {
    eyebrow: 'Corporate Website Design',
    heading: 'Websites for Companies With Real Organisational Weight',
    paragraphs: [
      'A corporate website is rarely one website. Marketing owns the homepage, HR owns careers, finance owns investor relations, six regional teams own their own landing pages, and legal has opinions about every claim. Design that ignores this reality produces a beautiful launch followed by eighteen months of drift, as each department quietly edits its own corner until the brand no longer holds together.',
      'We design and build corporate sites as governed systems. That means a documented content ownership model, a component library that constrains styling to approved brand tokens, accessibility treated as a release requirement rather than a retrofit, and integration points into the CRM, ERP, HR and investor platforms your teams already use. The result is a site that survives stakeholder change, audits and regional expansion.',
    ],
  },
  highlights: [
    {
      icon: 'business.svg',
      title: 'Governance Before Graphics',
      text: 'Every section has a named owner, an approval route and a review cycle agreed before the first layout.',
    },
    {
      icon: 'visibility.svg',
      title: 'Accessibility as a Requirement',
      text: 'WCAG 2.2 AA conformance is tested before launch, not promised afterwards in a statement no one checks.',
    },
    {
      icon: 'scalable.svg',
      title: 'Maintainable for the Long Term',
      text: 'A constrained component library keeps new pages consistent years after the original designers have moved on.',
    },
  ],
  features: {
    eyebrow: 'What the Engagement Covers',
    heading: 'Corporate Website Capabilities',
    intro:
      'The work spans strategy, design, engineering and governance, run as one programme with a single point of accountability.',
    items: [
      {
        icon: 'brand.svg',
        title: 'Brand Guideline Compliance',
        text: 'Typography, colour and tone locked into design tokens so contributors cannot accidentally step outside the brand.',
      },
      {
        icon: 'finance.svg',
        title: 'Investor & Careers Sections',
        text: 'Results archives, regulatory filings, share information and applicant tracking built as purpose-made templates.',
      },
      {
        icon: 'location.svg',
        title: 'Regional & Multilingual Content',
        text: 'Locale templates, translation workflows and regional variants that inherit global structure where it matters.',
      },
      {
        icon: 'pipeline.svg',
        title: 'Enterprise System Integration',
        text: 'Connections into CRM, ERP, HR and marketing automation so the site reads live data instead of stale copies.',
      },
      {
        icon: 'assessment.svg',
        title: 'Procurement & Compliance Support',
        text: 'Documentation, questionnaires, security answers and staged invoicing shaped to fit your purchasing process.',
      },
      {
        icon: 'support.svg',
        title: 'Long-Term Maintainability',
        text: 'Version-controlled code, documented components and a support plan with defined response times.',
      },
    ],
  },
  process: {
    eyebrow: 'Governance-Led Delivery',
    heading: 'How a Corporate Website Programme Runs',
    intro:
      'Corporate projects succeed or fail on stakeholder alignment, so discovery and governance come before design.',
    steps: [
      { title: 'Stakeholder Discovery', text: 'We interview every department that publishes and map competing priorities.' },
      { title: 'Governance Model', text: 'Owners, approval routes and review cycles are agreed in writing before design.' },
      { title: 'Design System & Templates', text: 'Brand tokens and page templates are built for the sections that need them.' },
      { title: 'Accessibility & Integration', text: 'AA conformance is tested while CRM, ERP and HR connections are wired in.' },
      { title: 'Staged Rollout & Training', text: 'Sections go live in waves, with each department trained on its own part.' },
    ],
  },
  deliverables: {
    eyebrow: 'Deliverables & Governance Assets',
    heading: 'What a Corporate Build Delivers',
    intro:
      'Beyond the website itself, you receive the governance documentation that keeps it coherent after handover.',
    items: [
      'Content governance model naming every section owner',
      'Brand-compliant design system and component library',
      'WCAG 2.2 AA audit report with remediation evidence',
      'Investor relations and careers section templates',
      'Locale templates for each operating region',
      'Integrations with your CRM, ERP or HR platform',
      'Editor roles, approval chains and publishing SLAs',
      'Accessibility statement and maintainability handbook',
    ],
  },
  faqs: {
    eyebrow: 'Corporate Website FAQ',
    heading: 'Corporate Website Design FAQ',
    items: [
      {
        question: 'How do you keep multiple departments from fighting over the site?',
        answer:
          'By agreeing ownership in discovery. Each section gets a named owner, a defined editorial scope and an approval route, recorded in a governance document that everyone signs off before design starts. When two departments want the same homepage slot, the escalation path is already written down, so the decision is made by the agreed owner rather than by whoever is most persistent.',
      },
      {
        question: 'What level of accessibility do you build to?',
        answer:
          'We target WCAG 2.2 Level AA as the default for corporate work, which is also the standard referenced by equality legislation in the UK and India. That covers colour contrast, keyboard operation, focus management, form labelling, captions and screen reader semantics. Testing combines automated scans with manual keyboard and assistive technology passes, and we hand over the audit evidence.',
      },
      {
        question: 'Can you work within our procurement and legal process?',
        answer:
          'Yes. We routinely supply capability statements, insurance certificates, data processing agreements, security questionnaires and vendor onboarding forms. Delivery can be structured as fixed-scope phases with milestone invoicing, and we work alongside an internal programme manager or a nominated agency of record where governance requires it.',
      },
      {
        question: 'How do you handle regional and language variants?',
        answer:
          'Each locale gets its own URL structure, metadata and hreflang annotations so search engines serve the right version. Translators work from the same content model as the source language, which keeps structure identical while allowing regional wording, currency and contact details to differ. Regional teams can publish locally without the ability to alter global brand pages.',
      },
      {
        question: 'Will the site connect to our existing systems?',
        answer:
          'Integration is planned during discovery. Typical connections include CRM lead routing, ERP product or pricing data, HR applicant tracking for careers, and single sign-on for internal content contributors. Where direct API access is restricted, we agree a scheduled export with your IT team and document the contract so both sides know what is expected.',
      },
      {
        question: 'How long does a corporate website project take?',
        answer:
          'A single-region corporate site with investor and careers sections usually takes ten to fourteen weeks. Multi-region builds with localisation, several integrations and a formal procurement process typically run four to six months, with content migration and accessibility remediation scheduled as separate phases so progress stays visible to stakeholders.',
      },
      {
        question: 'Who owns the design files and source code?',
        answer:
          'You do. On final payment the design system, source repository, content model documentation and assets transfer to your organisation, with no licence fees attached to the website itself. Third-party components are listed with their licence terms so your legal team can review them.',
      },
    ],
  },
  related: [
    { label: 'Business Profile Design', href: '/business-profile-design' },
    { label: 'Website Designing', href: '/website-designing' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'Security Audits', href: '/security-audits' },
    { label: 'Website Maintenance', href: '/website-maintenance' },
    { label: 'CRM Development', href: '/crm-development' },
  ],
}

export default content
