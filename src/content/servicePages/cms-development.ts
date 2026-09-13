import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'cms-development',
  route: '/cms-development',
  breadcrumbTitle: 'CMS Development',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'CMS Development',
    metaTitle: 'WordPress & Drupal CMS Development | AT Tech Global',
    metaDescription:
      'WordPress, Drupal and Joomla development for growing teams: custom themes, plugin work, content modelling and editorial workflows, plus safe content migration.',
    keywords:
      'cms development, wordpress development, drupal development, joomla development, custom cms theme, cms plugin development, content management system',
    ogTitle: 'WordPress & Drupal CMS Development | AT Tech Global',
    ogDescription:
      'Established CMS platforms built properly: lean plugin stacks, clean content models and editors who can publish without calling a developer.',
  },
  intro: {
    eyebrow: 'CMS Development',
    heading: 'Content Management Built Around Your Editors, Not the Demo',
    paragraphs: [
      'A content management system earns its keep only when the people who write and publish can work without raising a ticket for every paragraph. In practice most CMS pain is not caused by the software. It comes from content models that were guessed at during the first build, plugins installed to patch gaps in that model, and publishing roles handed out informally as the team grew.',
      'We develop on WordPress, Drupal, Joomla and Craft, choosing the platform after the content structure is agreed rather than before. That means bespoke themes, custom plugin and module work when core genuinely falls short, deliberate editor roles, a governed media library and a migration that brings your existing pages across intact. The stack stays small enough to update safely every month.',
    ],
  },
  highlights: [
    {
      icon: 'wordpress.svg',
      title: 'Platform-Native Builds',
      text: 'Themes and extensions written to platform standards, so core updates never quietly break your templates.',
    },
    {
      icon: 'strategy.svg',
      title: 'Content Models That Fit',
      text: 'Fields, taxonomies and templates shaped around how your team actually writes, not around sample content.',
    },
    {
      icon: 'security.svg',
      title: 'A Deliberately Small Plugin Stack',
      text: 'Every extension is justified, licensed and documented, with no abandoned plugins left behind after handover.',
    },
  ],
  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our CMS Development Covers',
    intro:
      'One engagement takes you from a content audit through to trained editors publishing on a site you can upgrade without fear.',
    items: [
      {
        icon: 'template.svg',
        title: 'Custom Theme Development',
        text: 'Your approved design built as a bespoke theme with reusable blocks, not a premium template stretched to fit.',
      },
      {
        icon: 'php.svg',
        title: 'Plugin & Module Development',
        text: 'Custom functionality packaged as maintainable extensions with updates that survive the next core release.',
      },
      {
        icon: 'content.svg',
        title: 'Content Modelling',
        text: 'Content types, fields, relationships and taxonomies defined once so every page is structured and searchable.',
      },
      {
        icon: 'automation.svg',
        title: 'Editorial Workflows & Roles',
        text: 'Draft, review and publish stages with permissions that match who owns which section of the site.',
      },
      {
        icon: 'cloud.svg',
        title: 'Media Library Governance',
        text: 'Naming conventions, size limits and automatic derivative images keep a fast, searchable asset library.',
      },
      {
        icon: 'pipeline.svg',
        title: 'Migration & Editor Training',
        text: 'Existing pages, media and metadata imported into the new structure, then your editors trained hands on.',
      },
    ],
  },
  process: {
    eyebrow: 'How a CMS Build Runs',
    heading: 'From Content Audit to Trained Editors',
    intro:
      'The sequence keeps decisions in the order that avoids rework: structure first, platform second, code last.',
    steps: [
      { title: 'Content Audit', text: 'We inventory pages, media and authors, and flag what should not survive the move.' },
      { title: 'Model & Wireframe', text: 'Content types, fields and page templates are agreed before code starts.' },
      { title: 'Theme & Plugin Build', text: 'Reusable blocks come first, with custom plugins only where core falls short.' },
      { title: 'Content Migration', text: 'Pages, assets and metadata are imported, then reconciled section by section.' },
      { title: 'Training & Handover', text: 'Editors get a live walkthrough, a written guide and thirty days of support.' },
    ],
  },
  deliverables: {
    eyebrow: 'What You Receive',
    heading: 'The CMS Handover Pack',
    intro:
      'You own the code, the database and the documentation. Nothing is locked behind a proprietary builder.',
    items: [
      'Custom theme with reusable, editor-friendly content blocks',
      'Plugin audit and a documented, updated extension list',
      'Content model reference covering every field and template',
      'Role and permission matrix for authors, editors and admins',
      'Full migration of existing pages, media and metadata',
      'Redirect map for every legacy URL that changes',
      'Editor training session plus a written publishing guide',
      'Staging environment and a tested rollback procedure',
    ],
  },
  faqs: {
    eyebrow: 'CMS Questions Answered',
    heading: 'CMS Development FAQ',
    items: [
      {
        question: 'How do you choose between WordPress, Drupal and Joomla?',
        answer:
          'The content model decides it. WordPress suits editorial sites with straightforward page structures and a large pool of available developers. Drupal handles complex taxonomies, strict approval chains and large multi-lingual publishing. Joomla sits between the two and is a sensible fit when a team already runs it. We recommend one platform with written reasons, not a preference.',
      },
      {
        question: 'What is plugin bloat and why does it matter?',
        answer:
          'Plugin bloat is what happens when each new requirement is solved by installing another extension instead of adjusting the content model. Every added plugin increases page weight, upgrade conflicts and the chance of a security advisory against code nobody maintains. We audit what is installed, replace overlapping plugins with one maintained option, and write small custom code where nothing suitable exists.',
      },
      {
        question: 'Can you migrate the content from our current website?',
        answer:
          'Yes. We export existing pages, media, authors and metadata, map them onto the new content model, and import in batches with a reconciliation pass. URLs that change get 301 redirects, and we crawl the staging site afterwards to catch broken links, duplicate titles and images that lost their alt text during import.',
      },
      {
        question: 'How long does a CMS build take?',
        answer:
          'A focused brochure site on a custom theme typically takes four to six weeks. A multi-section site with bespoke plugins, several editor roles and a large content migration usually runs eight to twelve weeks. The longest dependency is normally content readiness on your side, so we schedule migration in parallel with development.',
      },
      {
        question: 'Who maintains the CMS once it is live?',
        answer:
          'You can. We hand over documented code and a staging environment, and we walk your team through applying core and plugin updates safely. Many clients still prefer a maintenance plan that covers updates, backups, uptime monitoring and a monthly security review, which removes the risk of an update being deferred until something breaks.',
      },
      {
        question: 'Can our marketing team publish without a developer?',
        answer:
          'That is the aim of the build. We design templates so new pages are assembled from approved blocks, which keeps layouts consistent and prevents editors from inventing new styling. Where a section must stay tightly controlled, we restrict the role to text and image edits while leaving structure locked.',
      },
      {
        question: 'Will the CMS slow our website down?',
        answer:
          'Not if page weight is treated as a build constraint. We cache rendered pages, compress and lazy-load imagery, avoid page builders that inject large stylesheets, and measure Core Web Vitals on staging before launch. Where traffic is heavy we add a CDN and object caching so the database is not queried for every visit.',
      },
    ],
  },
  related: [
    { label: 'Custom CMS Development', href: '/custom-cms-development' },
    { label: 'Dynamic Website Design', href: '/dynamic-website-design' },
    { label: 'Custom Website Development', href: '/custom-website-development' },
    { label: 'Website Maintenance', href: '/website-maintenance' },
    { label: 'Security Audits', href: '/security-audits' },
    { label: 'Website Redesigning', href: '/website-redesigning' },
  ],
}

export default content
