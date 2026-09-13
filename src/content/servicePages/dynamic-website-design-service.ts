import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'dynamic-website-design-service',
  route: '/dynamic-website-design-service',
  breadcrumbTitle: 'Dynamic Website Design Service',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Dynamic Website Design Service',
    metaTitle: 'Dynamic Website Design Service | AT Tech Global Studio',
    metaDescription:
      'Database-driven website design as a service: data scoping, architecture, admin panels, third-party integrations, staged releases and ongoing support.',
    keywords:
      'dynamic website design service, database driven website service, dynamic website development, custom admin panel design, web application design service, dynamic site build',
    ogTitle: 'Dynamic Website Design Service | AT Tech Global Studio',
    ogDescription:
      'End-to-end dynamic website delivery: approved data models, custom admin panels, staged releases and support for the whole stack.',
  },
  intro: {
    eyebrow: 'Dynamic Builds',
    heading: 'Database-Driven Websites, Delivered End to End',
    paragraphs: [
      'A dynamic website is only as good as the decisions taken before the first line of code. Which records does the site store, who is allowed to change them, what happens when a third-party service goes down, and how does a fix reach production on a Friday afternoon. Our service answers those questions in a written scope, then builds against it instead of improvising later.',
      'We deliver the whole stack: the front end your visitors see, the application layer that enforces business rules, the database holding your records, and an admin panel your staff will actually use. Environments stay separated, releases are staged, and every integration carries error handling and logging. When the build finishes, you own the code, the schema and the data.',
    ],
  },
  highlights: [
    {
      icon: 'scalable.svg',
      title: 'Architecture Before Code',
      text: 'Data models, user roles and integration contracts are documented and approved before development work begins.',
    },
    {
      icon: 'automation.svg',
      title: 'Staged Release Process',
      text: 'Development, staging and production environments with migration scripts and a tested rollback path.',
    },
    {
      icon: 'support.svg',
      title: 'Support for the Whole Stack',
      text: 'Ongoing plans cover database maintenance, dependency updates and application-level monitoring and alerting.',
    },
  ],
  features: {
    eyebrow: 'What the Build Covers',
    heading: 'Components of a Dynamic Website Engagement',
    intro:
      'Each layer is specified, built and tested as its own workstream, then integrated and released as one application.',
    items: [
      {
        icon: 'ux-ui.svg',
        title: 'Front-End Experience',
        text: 'Server-rendered or hybrid pages that stay fast for visitors even when the underlying dataset grows large.',
      },
      {
        icon: 'nodejs.svg',
        title: 'Application Layer',
        text: 'Business logic, validation and permissions implemented as documented services with automated test coverage.',
      },
      {
        icon: 'mongodb.svg',
        title: 'Database Design',
        text: 'A schema, index set and backup routine sized for the read and write patterns your application really has.',
      },
      {
        icon: 'cms.svg',
        title: 'Admin Panel',
        text: 'A tailored dashboard for creating, approving, publishing and exporting records without a developer in the loop.',
      },
      {
        icon: 'technical.svg',
        title: 'Third-Party Integrations',
        text: 'Payments, email, SMS, CRM and logistics services connected with retries, timeouts and failure alerting.',
      },
      {
        icon: 'security.svg',
        title: 'Roles and Permissions',
        text: 'Granular access levels, audit trails and session controls mapped to how your team actually divides its work.',
      },
    ],
  },
  process: {
    eyebrow: 'Build Sequence',
    heading: 'How a Dynamic Website Comes Together',
    intro:
      'Dynamic projects follow a specification-first sequence. Late changes to the data model are the main cause of overruns, so we close that door early.',
    steps: [
      { title: 'Data and Role Discovery', text: 'We list every record type, field, relationship and user role the site must support.' },
      { title: 'Scope and Architecture', text: 'Tech stack, hosting, integrations and the release plan are documented and signed off.' },
      { title: 'Schema and Admin Build', text: 'Database, permissions and admin panel are built and reviewed before the front end.' },
      { title: 'Integration and Testing', text: 'Third-party services are connected, then tested for failure, load and permissions.' },
      { title: 'Staged Release', text: 'Data migrates to production, monitoring goes live and the support window opens.' },
    ],
  },
  deliverables: {
    eyebrow: 'Handover Package',
    heading: 'What You Receive When the Build Closes',
    intro:
      'Dynamic engagements end with source code, data and documentation that your own developers can run and extend without us.',
    items: [
      'Approved data model and user role specification',
      'Front end built against agreed performance targets',
      'Application layer with automated test coverage',
      'Custom admin panel with role-based access control',
      'Integration adapters with logging and retry logic',
      'Database migration scripts and scheduled backups',
      'Staging and production environments with CI deploys',
      'Technical runbook plus a developer handover session',
    ],
  },
  faqs: {
    eyebrow: 'Technical and Commercial Questions',
    heading: 'Dynamic Website Design Service FAQ',
    items: [
      {
        question: 'When does a website actually need a database?',
        answer:
          'When the same page must show different content to different people, or change without a developer. Catalogues, booking systems, member areas, job boards, dashboards and any site with search across hundreds of records need one. A brochure site with eight fixed pages does not, and we will tell you so.',
      },
      {
        question: 'Which technologies do you build dynamic sites on?',
        answer:
          'Most builds use Node.js or PHP on the server with PostgreSQL, MySQL or MongoDB behind it, and React or Next.js on the front end. The choice follows your hosting policy, existing team skills and integration requirements rather than a house preference, and it is fixed during the architecture stage.',
      },
      {
        question: 'How do you protect the data we store?',
        answer:
          'Passwords are hashed, access is role-scoped, and every write is logged against a user and timestamp. Data in transit uses TLS, and encrypted backups are verified through periodic test restores. If your organisation has a security policy or vendor questionnaire, we complete it during scoping.',
      },
      {
        question: 'Can our staff manage the site without developers?',
        answer:
          'That is the point of the admin panel. We model the screens around your real tasks, such as adding a product, approving a listing or exporting a report, then train the people who will use them daily. Developer time is only needed when you want new functionality, not for routine edits.',
      },
      {
        question: 'What happens if a third-party service goes down?',
        answer:
          'Every integration is built with timeouts, retries and a fallback path, plus alerting so you learn about a failure before your customers do. Where a service is business critical, we scope a queue so incoming requests are processed once it recovers instead of being silently lost.',
      },
      {
        question: 'How are updates released after launch?',
        answer:
          'Code merges to staging first, where it runs against a copy of the production database. Once checks pass, a scheduled release window promotes it to production with a documented rollback step. Genuinely urgent fixes can go outside that window when severity justifies it.',
      },
      {
        question: 'Do we own the source code and database?',
        answer:
          'Yes. Source code, schema definitions, admin credentials and data export utilities transfer to you at handover. There is no proprietary platform licence and no lock-in on hosting, and the runbook explains how to deploy the application independently of our team.',
      },
    ],
  },
  related: [
    { label: 'Dynamic Website Design', href: '/dynamic-website-design' },
    { label: 'Custom Website Development', href: '/custom-website-development' },
    { label: 'Custom CMS Development', href: '/custom-cms-development' },
    { label: 'CRM Development', href: '/crm-development' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'Website Maintenance', href: '/website-maintenance' },
  ],
}

export default content
