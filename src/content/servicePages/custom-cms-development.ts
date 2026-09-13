import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'custom-cms-development',
  route: '/custom-cms-development',
  breadcrumbTitle: 'Custom CMS Development',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Custom CMS Development',
    metaTitle: 'Custom & Headless CMS Development | AT Tech Global',
    metaDescription:
      'Headless and bespoke CMS development: content modelled from scratch, API-first architecture and Next.js front ends publishing to web, apps and partner channels.',
    keywords:
      'custom cms development, headless cms development, api first cms, nextjs headless cms, bespoke content management system, multi channel publishing',
    ogTitle: 'Custom & Headless CMS Development | AT Tech Global',
    ogDescription:
      'When WordPress and Drupal stop fitting: API-first content platforms that publish to every channel from one governed source.',
  },
  intro: {
    eyebrow: 'Custom CMS Development',
    heading: 'For Teams That Have Outgrown an Off-the-Shelf CMS',
    paragraphs: [
      'Standard platforms are a good deal until they are not. The turning point is usually recognisable: content that must appear identically on a website, a mobile app and a partner feed; regional teams who must not see each other drafts; approval chains that legal insists on; a product catalogue too relational to express as posts and pages. At that point every workaround adds a plugin, a cron job or a spreadsheet.',
      'We build bespoke and headless content platforms for exactly those situations. Content is modelled from the underlying business objects, exposed through a documented API, and rendered by a Next.js or comparable front end. One governed source of truth then feeds the website, an app, in-store screens and partner integrations, with versioning, audit trails and permissions decided by policy rather than by whichever plugin was installed last.',
    ],
  },
  highlights: [
    {
      icon: 'pipeline.svg',
      title: 'API-First From the First Commit',
      text: 'Every piece of content is created and retrieved through a documented contract that any channel can consume.',
    },
    {
      icon: 'broadcast.svg',
      title: 'Publish Once, Distribute Widely',
      text: 'Website, app, kiosk and partner feeds draw from one governed source instead of four drifting copies.',
    },
    {
      icon: 'custom.svg',
      title: 'Modelled Around Your Business',
      text: 'Content types mirror your real objects, so editors stop forcing products and locations into blog posts.',
    },
  ],
  features: {
    eyebrow: 'Architecture & Delivery',
    heading: 'How a Bespoke Content Platform Is Put Together',
    intro:
      'Each layer is chosen and documented on its own merits, so a change in one does not force a rewrite of the others.',
    items: [
      {
        icon: 'strategy.svg',
        title: 'Content Modelling From Scratch',
        text: 'Workshops with the teams who publish produce content types, relationships and localisation rules.',
      },
      {
        icon: 'nextjs.svg',
        title: 'Next.js Front End',
        text: 'Server-rendered React pages that keep search visibility and Core Web Vitals while consuming live content.',
      },
      {
        icon: 'broadcast.svg',
        title: 'Multi-Channel Publishing',
        text: 'Scheduled release to web, mobile app, digital signage and partner feeds from a single editorial action.',
      },
      {
        icon: 'certificate.svg',
        title: 'Versioning & Audit Trails',
        text: 'Every edit is attributed and reversible, with side-by-side diffs that satisfy legal and compliance reviews.',
      },
      {
        icon: 'trust.svg',
        title: 'Granular Permissions',
        text: 'Access scoped by region, brand, language and field, so contributors only ever touch their own content.',
      },
      {
        icon: 'cloud.svg',
        title: 'Integration & Webhooks',
        text: 'Content events push into your CRM, ERP, search index and analytics without nightly import jobs.',
      },
    ],
  },
  process: {
    eyebrow: 'From Model to Launch',
    heading: 'The Custom CMS Delivery Sequence',
    intro:
      'We prove the content model and the API before investing in interface polish, because that is where rework is cheapest to avoid.',
    steps: [
      { title: 'Model the Domain', text: 'We interview every publishing team and define each content type and relationship.' },
      { title: 'Choose the Stack', text: 'Data store, CMS layer and front end are matched to your team and hosting reality.' },
      { title: 'Build the API', text: 'Endpoints, authentication, webhooks and preview tokens are built and documented.' },
      { title: 'Render the Channels', text: 'Next.js templates and consuming apps read from the API with draft preview enabled.' },
      { title: 'Migrate & Train', text: 'Legacy content is imported, then editors are trained on the new publishing flow.' },
    ],
  },
  deliverables: {
    eyebrow: 'Project Outputs',
    heading: 'What a Custom CMS Engagement Produces',
    intro:
      'The platform, its documentation and the migration all transfer to you at handover, with no proprietary lock-in.',
    items: [
      'Content model specification listing every type, field and relationship',
      'Headless CMS configured with roles, locales and approval stages',
      'Documented REST or GraphQL API including authentication',
      'Next.js front end with draft preview and on-demand revalidation',
      'Publishing pipelines for app, kiosk and partner feed channels',
      'Bulk import of existing content, media and metadata',
      'Editor handbook plus two recorded training sessions',
      'Backup, monitoring and incident escalation runbook',
    ],
  },
  faqs: {
    eyebrow: 'Headless & Custom CMS FAQ',
    heading: 'Custom CMS Development FAQ',
    items: [
      {
        question: 'When does an off-the-shelf CMS genuinely stop working?',
        answer:
          'Four signals are reliable. Content must be identical across several channels and manual duplication has started. Permissions need to follow regions, brands or field-level rules that the platform cannot express. Approval chains demand version history for compliance. Or the data is highly relational, so products, venues and people keep being modelled as pages. Two or more together usually justify a custom build.',
      },
      {
        question: 'Why not simply extend WordPress with more plugins?',
        answer:
          'You can, and for many sites that is the right answer. It becomes expensive when custom post types, meta fields, custom REST endpoints and access-control plugins all have to agree, because each plugin upgrade risks the others. Once a large share of the site depends on code you did not write and cannot easily replace, a purpose-built platform is usually cheaper to own over three years.',
      },
      {
        question: 'What does headless actually mean in practice?',
        answer:
          'The content repository and the presentation layer are separate and connected by an API. Editors work in an admin interface; the website, app and partner feeds each request content from that API. It gives you freedom to rebuild one channel without touching content, but it also means preview, routing and caching must be designed deliberately rather than inherited from a theme.',
      },
      {
        question: 'Can our existing React developers maintain the front end?',
        answer:
          'Yes, and we encourage it. The front end is standard Next.js with typed API clients, environment configuration and component libraries, so any competent React team can pick it up. We hand over the repository, the API schema and architecture decision records explaining why each layer was chosen.',
      },
      {
        question: 'Does a headless build hurt search rankings?',
        answer:
          'Not when it is implemented properly. We server-render pages so crawlers receive complete HTML, generate sitemaps and canonical tags from the content model, and keep redirects in the routing layer. Where a legacy site is being replaced, the URL map is agreed before launch. The common failure is a client-rendered front end, which is a design choice rather than a constraint of headless.',
      },
      {
        question: 'How long does a custom content platform take to build?',
        answer:
          'A single-channel headless build with a moderate content model typically takes eight to twelve weeks. Multi-channel delivery with complex permissions, localisation and large-scale migration runs twelve to twenty weeks, delivered in stages so the website can go live before the app and partner integrations follow.',
      },
      {
        question: 'What does it cost compared with a standard CMS?',
        answer:
          'The build costs more, because the content model, API and front end are all engineered rather than configured. Running costs are often lower, since there is no page-builder overhead, fewer extensions to license or patch, and hosting scales with traffic rather than with plugin count. We provide a three-year cost comparison so the decision is made on total ownership.',
      },
      {
        question: 'Can we move back to a standard CMS later?',
        answer:
          'Your content is portable. Because it lives in a documented schema with structured exports, it can be migrated into another platform, and we can generate the export tooling. Front-end code is framework-standard, so it can also be repointed at a different content API without a full redesign.',
      },
    ],
  },
  related: [
    { label: 'CMS Development', href: '/cms-development' },
    { label: 'Custom Website Development', href: '/custom-website-development' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'Progressive Web Apps', href: '/progressive-web-apps' },
    { label: 'SaaS Development', href: '/saas-development' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
  ],
}

export default content
