import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'corporate-website-design-service',
  route: '/corporate-website-design-service',
  breadcrumbTitle: 'Corporate Website Design Service',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Corporate Website Design Service',
    metaTitle: 'Managed Corporate Website Design Service | AT Tech Global',
    metaDescription:
      'Corporate website design run as a governed engagement: stakeholder workshops, legal sign-off, system integration, staged regional rollout and training.',
    keywords:
      'corporate website design service, enterprise website design, corporate web design engagement, multi stakeholder website project, corporate website redesign service, enterprise web programme',
    ogTitle: 'Managed Corporate Website Design Service | AT Tech Global',
    ogDescription:
      'A governed corporate website programme with stakeholder workshops, approval matrices, staged rollout and a formal service transition.',
  },
  intro: {
    eyebrow: 'Corporate Programmes',
    heading: 'Corporate Websites Run as a Managed Engagement',
    paragraphs: [
      'Corporate websites fail on process far more often than on design. Marketing wants speed, legal wants approvals, IT wants a security review and procurement wants a purchase order. We run corporate website design as a governed programme with named owners, a decision log, an approval matrix and a dated release schedule, so a project survives contact with all four of those groups.',
      'Engagements typically span one to four quarters. Discovery includes interviews with every stakeholder group, brand and legal review happens before build rather than after, and the roll-out is staged by region or business unit so a single launch day never carries the whole risk. Training, documentation and a support retainer follow the release. You keep one named account lead for the whole programme, with escalation contacts agreed on day one.',
    ],
  },
  highlights: [
    {
      icon: 'strategy.svg',
      title: 'Governance Built In',
      text: 'A decision log, approval matrix and named owners keep multi-stakeholder programmes moving without silent stalls.',
    },
    {
      icon: 'security.svg',
      title: 'Procurement Ready',
      text: 'We complete vendor questionnaires, sign your NDA and master agreement, and work inside your IT security policies.',
    },
    {
      icon: 'scalable.svg',
      title: 'Staged Regional Rollout',
      text: 'Go live by region, brand or business unit with redirects, content freeze windows and rollback plans agreed.',
    },
  ],
  features: {
    eyebrow: 'Engagement Components',
    heading: 'How the Corporate Engagement Is Structured',
    intro:
      'Each component below is a scheduled workstream with its own deliverable, owning stakeholder and acceptance criterion.',
    items: [
      {
        icon: 'business.svg',
        title: 'Stakeholder Workshops',
        text: 'Structured interviews with marketing, sales, legal, HR and IT to capture requirements, constraints and hidden dependencies.',
      },
      {
        icon: 'brand.svg',
        title: 'Brand and Legal Compliance',
        text: 'Design follows the brand system, and every claim, disclaimer and privacy notice is routed to the right approver.',
      },
      {
        icon: 'pipeline.svg',
        title: 'System Integration',
        text: 'CRM, ERP, ATS and marketing automation connected through documented APIs rather than manual exports.',
      },
      {
        icon: 'cms.svg',
        title: 'Content Operations',
        text: 'A governed CMS with roles, editorial workflows, localisation and publishing permissions mapped to your teams.',
      },
      {
        icon: 'assessment.svg',
        title: 'Accessibility and Standards',
        text: 'WCAG 2.2 AA checks, semantic markup and performance targets agreed with your digital governance function.',
      },
      {
        icon: 'support.svg',
        title: 'Training and Transition',
        text: 'Role-based admin training, written documentation and a formal service transition pack at the close of the programme.',
      },
    ],
  },
  process: {
    eyebrow: 'Programme Phases',
    heading: 'The Five Phases of a Corporate Build',
    intro:
      'Corporate programmes run in phases with gate reviews. Nothing advances to the next phase until the previous one is signed off in writing.',
    steps: [
      { title: 'Mobilisation', text: 'Kick-off, stakeholder map, governance model and a shared decision log.' },
      { title: 'Discovery and Definition', text: 'Requirements workshops produce a signed scope, sitemap and success measures.' },
      { title: 'Template Approval Gates', text: 'Templates pass brand, legal and accessibility review before build begins.' },
      { title: 'Build and Integration', text: 'Development, system integration and content migration run in parallel sprints.' },
      { title: 'Rollout and Transition', text: 'Staged regional go-live, then training, documentation and support handover.' },
    ],
  },
  deliverables: {
    eyebrow: 'Programme Outputs',
    heading: 'What the Programme Leaves Behind',
    intro:
      'A corporate engagement closes with a transition pack, not simply a live website and a folder of design files.',
    items: [
      'Signed scope, sitemap and governance charter',
      'Corporate design system and template library',
      'CMS configuration with roles and publishing workflow',
      'Integration specifications for CRM, ERP and ATS',
      'Accessibility conformance report against WCAG 2.2 AA',
      'Content migration with redirect mapping and QA',
      'Role-based admin training and written documentation',
      'Support retainer covering SLAs and release windows',
    ],
  },
  faqs: {
    eyebrow: 'Procurement and Delivery Questions',
    heading: 'Corporate Website Design Service FAQ',
    items: [
      {
        question: 'How do you handle sign-off across several departments?',
        answer:
          'Each stakeholder group gets a named reviewer and a defined scope of approval, so legal signs off disclaimers, IT signs off security and brand signs off visual identity. One decision log records every approval, change and open item, which prevents the late reversal that delays most corporate launches.',
      },
      {
        question: 'Can you work within our procurement process?',
        answer:
          'Yes. We respond to RFPs, complete vendor onboarding and security questionnaires, sign your NDA and master services agreement, and invoice against a purchase order. For UK entities the Leicester office contracts directly, while Indian and NCR engagements are contracted from Gurgaon.',
      },
      {
        question: 'Who owns the website and the code after launch?',
        answer:
          'You do. Source code, design files, content and credentials transfer to your organisation at handover. We retain no lock-in on hosting or licensing, and the transition pack documents environment variables, third-party accounts and renewal dates so your IT team can maintain the platform without us.',
      },
      {
        question: 'What does a typical corporate website delivery schedule look like?',
        answer:
          'A single-region corporate site usually runs eight to twelve weeks from kick-off. Multi-region programmes with integration work and localisation commonly span three to six months, sequenced so each region goes live on its own release date instead of one high-risk global launch.',
      },
      {
        question: 'Do you integrate with our internal systems?',
        answer:
          'We connect the site to CRM, ERP, HR and marketing platforms through documented APIs, webhooks or middleware. If a system has no API, we scope a scheduled file exchange as a fallback. Every integration ships with error handling, retry behaviour and logging your IT team can inspect.',
      },
      {
        question: 'What accessibility standard do you design to?',
        answer:
          'Our baseline is WCAG 2.2 level AA, tested with automated tooling plus manual keyboard and screen reader passes. Where your sector demands a stricter standard, we align the acceptance criteria at scoping stage and include the conformance report in the transition pack.',
      },
      {
        question: 'How is post-launch support structured?',
        answer:
          'Support runs on a retainer with response times defined by severity, a monthly release window for changes, and monitoring covering uptime, performance and security patching. Routine content updates are handled by your own team through the CMS, and the admin training is built to make that realistic.',
      },
    ],
  },
  related: [
    { label: 'Corporate Website Design', href: '/corporate-website-design' },
    { label: 'Custom Website Development', href: '/custom-website-development' },
    { label: 'CMS Development', href: '/cms-development' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'Business Transformation', href: '/business-transformation' },
    { label: 'Security Audits', href: '/security-audits' },
  ],
}

export default content
