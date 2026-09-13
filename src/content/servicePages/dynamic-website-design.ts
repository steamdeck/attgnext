import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'dynamic-website-design',
  route: '/dynamic-website-design',
  breadcrumbTitle: 'Dynamic Website Design',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Dynamic Website Design',
    metaTitle: 'Dynamic Website Design Company in Gurgaon | AT Tech Global',
    metaDescription:
      'Database-driven dynamic website design: user accounts, admin dashboards, search, personalisation and CMS pages. Honest advice on when static is the better buy.',
    keywords:
      'dynamic website design, database driven website, dynamic website development, user login website, cms website design, custom admin dashboard',
    ogTitle: 'Dynamic Website Design Company | AT Tech Global',
    ogDescription:
      'Websites that generate pages from data, with secure accounts, searchable content and admin control that non-technical teams can use.',
  },
  intro: {
    eyebrow: 'Database-Driven Websites',
    heading: 'Dynamic Websites That Do the Work a Static Page Cannot',
    paragraphs: [
      'A dynamic website builds each page at the moment it is requested, pulling content from a database and passing it through application logic before it reaches the browser. That is what makes a member area possible, a search box that returns useful results, a product catalogue with live stock, or a dashboard showing today numbers rather than last quarter report. Anything that must differ per visitor, or change without a developer, needs that machinery somewhere.',
      'The trade-off is real and worth stating plainly. Dynamic sites cost more to build, need a server and database to keep running, and carry a wider security surface that has to be maintained. We design them around the smallest amount of dynamism that solves your problem, so pages that never change are cached or pre-rendered and only the interactive parts touch the database. That keeps hosting cheap and response times fast without losing the features you asked for.',
    ],
  },
  highlights: [
    {
      icon: 'cms.svg',
      title: 'Content You Control',
      text: 'Editing pages, products and prices through an admin panel removes the developer from routine publishing tasks.',
    },
    {
      icon: 'security.svg',
      title: 'Accounts Done Properly',
      text: 'Hashed passwords, session handling, role based permissions and audit trails rather than a login form bolted on late.',
    },
    {
      icon: 'scalable.svg',
      title: 'Built to Hold Data',
      text: 'Indexed schemas, query tuning and sensible caching so performance holds as records move into the tens of thousands.',
    },
  ],
  features: {
    eyebrow: 'Dynamic Capabilities',
    heading: 'What a Data-Backed Website Can Do',
    intro:
      'These are the building blocks we assemble into member portals, catalogues, booking systems and internal tools.',
    items: [
      {
        icon: 'customer.svg',
        title: 'Registration and Sign-In',
        text: 'Email or social login, password reset, email verification and two-factor options, with sessions that expire safely.',
      },
      {
        icon: 'automation.svg',
        title: 'Admin Dashboards',
        text: 'Role restricted panels for creating records, moderating submissions, exporting reports and seeing activity history.',
      },
      {
        icon: 'search.svg',
        title: 'Search and Filtering',
        text: 'Full-text search with facets, sorting and pagination, backed by properly indexed columns or a dedicated search engine.',
      },
      {
        icon: 'segmentation.svg',
        title: 'Personalised Content',
        text: 'Pages that adapt to plan, location, language or purchase history, with sensible defaults for logged-out visitors.',
      },
      {
        icon: 'cms.svg',
        title: 'CMS-Backed Pages',
        text: 'Templates fed by structured content types, so marketing can publish landing pages without waiting on a release.',
      },
      {
        icon: 'mongodb.svg',
        title: 'Data Layer Design',
        text: 'Relational MySQL or PostgreSQL schemas, or document stores where the data genuinely fits a flexible shape.',
      },
    ],
  },
  process: {
    eyebrow: 'Build Stages',
    heading: 'How We Deliver a Dynamic Website',
    intro:
      'Data modelling comes early because changing a schema after launch means migrating live records.',
    steps: [
      { title: 'Requirements and Roles', text: 'We list every user type and exactly what each one may see and change.' },
      { title: 'Data Modelling', text: 'Tables, relationships and indexes are designed before any interface work starts.' },
      { title: 'Interface and Admin Design', text: 'Public pages and the admin panel are designed together as one system.' },
      { title: 'Application Development', text: 'Front end, API layer and database are built in testable vertical slices.' },
      { title: 'Hardening and Launch', text: 'Security review, load testing, backups and monitoring go live with the site.' },
    ],
  },
  deliverables: {
    eyebrow: 'Included Scope',
    heading: 'What a Dynamic Build Includes',
    intro:
      'Hosting, deployment and documentation are part of the project, not an afterthought billed separately.',
    items: [
      'Normalised database schema with indexes and relationships',
      'Secure authentication with roles and permission rules',
      'Admin panel for managing content and site data',
      'Search, filtering, sorting and pagination behaviour',
      'API layer documented for future apps and integrations',
      'Automated nightly backups with a tested restore path',
      'Server configuration, SSL and deployment pipeline',
      'Monitoring for uptime, errors and slow database queries',
    ],
  },
  faqs: {
    eyebrow: 'Dynamic vs Static',
    heading: 'Choosing the Right Architecture',
    items: [
      {
        question: 'When is a dynamic website genuinely necessary?',
        answer:
          'You need dynamic behaviour when the site must store information rather than only display it. Typical triggers are user accounts, a searchable catalogue of more than a few dozen items, bookings or orders, personalised dashboards, and editorial teams who publish daily without a developer. If none of those apply, a static or pre-rendered site will usually serve you better and cost far less to run.',
      },
      {
        question: 'What does a dynamic website cost compared with a static one?',
        answer:
          'Expect a dynamic build to cost noticeably more, because you are paying for a data model, application logic, an admin interface, security hardening and ongoing server maintenance. Static hosting is often a few pounds a month, while a dynamic site needs an application server, a managed database and backup storage. The question is whether the features justify that recurring cost.',
      },
      {
        question: 'Is a dynamic website slower than a static site?',
        answer:
          'Left unoptimised, yes, because each request may involve several database queries before HTML is produced. In practice we cache rendered pages, store frequent queries in memory and serve assets from a CDN, so visitors see response times close to a static site. Only pages that genuinely differ per user, such as a dashboard, are generated fresh on every request.',
      },
      {
        question: 'Does a database make my website less secure?',
        answer:
          'A database adds risk only when it is handled carelessly. We use parameterised queries to prevent injection, hash passwords with bcrypt or Argon2, apply least-privilege database users, keep secrets out of the repository and patch dependencies on a schedule. The biggest real-world risk is an unpatched plugin, which is exactly why we prefer maintained custom code over a stack nobody is updating.',
      },
      {
        question: 'Can you migrate our existing static site to a dynamic one?',
        answer:
          'Yes, and it does not have to happen all at once. We often keep the fast static marketing pages exactly as they are and add dynamic sections for the parts that need data, such as a store locator, a job board or a customer portal. URL structures are preserved with redirects so existing search rankings and inbound links continue to work.',
      },
      {
        question: 'Which technologies do you use for dynamic websites?',
        answer:
          'The usual stack is PHP with Laravel or a Node.js service using Next.js, paired with MySQL or PostgreSQL. Where content editing is the main requirement we build on WordPress or a headless CMS instead. The decision follows the data and the team who will run it, not a preference for a particular framework.',
      },
      {
        question: 'Who maintains the site after it is built?',
        answer:
          'Either we do, under a maintenance agreement covering updates, backups, monitoring and small changes, or your team takes it over with the repository, deployment notes and admin documentation. Either way the source code is yours. We recommend deciding this before launch, because unmaintained dynamic sites and databases degrade quietly rather than all at once.',
      },
    ],
  },
  related: [
    { label: 'Static Website Design', href: '/static-website-design' },
    { label: 'CMS Development', href: '/cms-development' },
    { label: 'Custom CMS Development', href: '/custom-cms-development' },
    { label: 'CRM Development', href: '/crm-development' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'Security Audits', href: '/security-audits' },
  ],
}

export default content
