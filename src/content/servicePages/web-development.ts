import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'web-development',
  route: '/service/web-development',
  breadcrumbTitle: 'Web Development',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Web Development',
    metaTitle: 'Web Development Company | Custom Apps | AT Tech Global',
    metaDescription:
      'Custom web development from a Gurgaon studio with 14+ years behind it: front-end and back-end engineering, portals, APIs, DevOps and post-launch support.',
    keywords:
      'web development company, custom web development, web application development, full stack development, portal development, API development, DevOps services, Gurgaon web development',
    ogTitle: 'Custom Web Development | AT Tech Global',
    ogDescription:
      'Scoped, sprinted and documented web application development with a written architecture rationale and a support window after launch.',
  },
  intro: {
    eyebrow: 'Web Application Engineering',
    heading: 'Web Development That Still Holds Up Two Years After Launch',
    paragraphs: [
      'Most web builds are judged on launch day, which is exactly when they look best. The real test arrives later: the database has grown tenfold, a third-party API has changed its response shape, and nobody left on the team remembers why the checkout flow works the way it does. We develop with that second year in mind, picking stacks your own developers can hire for and writing down the reasoning behind each layer.',
      'Every engagement opens with a written scope covering user roles, workflows, integrations and acceptance criteria. From there our Gurugram engineers model the data, build the interface and the services in two-week sprints, and demonstrate working software at the end of each one. Stakeholders review real behaviour rather than a specification document, which keeps feedback early, cheap and specific.',
    ],
  },
  highlights: [
    {
      icon: 'custom.svg',
      title: 'Custom Application Development',
      text: 'Booking systems, internal tools and line-of-business apps shaped around your process instead of bent to fit a bought product.',
    },
    {
      icon: 'ecommerce.svg',
      title: 'Ecommerce Engineering',
      text: 'Catalogue, cart, checkout, payments and order management built for conversion and returns, not just for a successful launch.',
    },
    {
      icon: 'support.svg',
      title: 'Deployment and Post-Launch Care',
      text: 'Staging environments, versioned releases, uptime monitoring and a named support window with agreed response times.',
    },
  ],
  features: {
    eyebrow: 'Engineering Scope',
    heading: 'What Our Web Development Team Builds',
    intro:
      'A development engagement is assembled from these capability blocks. Most projects use four or five of them, and the written scope states which ones are in play.',
    items: [
      {
        icon: 'ux-ui.svg',
        title: 'Front-End Development',
        text: 'React, Next.js and TypeScript interfaces built as reusable components, with accessibility and Core Web Vitals treated as acceptance criteria.',
      },
      {
        icon: 'nodejs.svg',
        title: 'Back-End and Data Layer',
        text: 'Node.js, PHP or Python services on MySQL or PostgreSQL, with indexed schemas, background queues, scheduled jobs and role-based permissions.',
      },
      {
        icon: 'cms.svg',
        title: 'CMS-Backed Builds',
        text: 'Editor-friendly content models in WordPress, Strapi or a bespoke admin panel, so marketing ships new pages without waiting on a developer.',
      },
      {
        icon: 'analytics.svg',
        title: 'Portals and Dashboards',
        text: 'Customer logins, partner portals and internal reporting screens with filtered views, CSV exports, audit trails and granular access rules.',
      },
      {
        icon: 'technology.svg',
        title: 'API Development and Integration',
        text: 'REST and GraphQL endpoints, payment gateways, ERP connectors and webhook flows, versioned and documented with an OpenAPI specification.',
      },
      {
        icon: 'security.svg',
        title: 'QA, DevOps and Releases',
        text: 'Automated test suites, manual regression passes, containerised environments and CI pipelines that deploy on merge rather than by hand.',
      },
    ],
  },
  process: {
    eyebrow: 'Delivery Method',
    heading: 'How a Development Engagement Runs',
    intro:
      'Fixed stages, visible progress and a decision log you can read. Nothing important is decided in a meeting that leaves no written trace.',
    steps: [
      { title: 'Discovery and Scoping', text: 'Stakeholder interviews, workflow mapping and a written scope with acceptance criteria.' },
      { title: 'Architecture and Data Model', text: 'Stack selected, schema drafted, integrations and delivery risks documented.' },
      { title: 'Interface and Sprint Builds', text: 'Screens approved, then two-week sprints that end in reviewable software.' },
      { title: 'Testing and Deployment', text: 'Automated tests, load checks, staging sign-off and a versioned release.' },
      { title: 'Handover and Support', text: 'Admin training, written documentation and a support window with SLAs.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope of Work',
    heading: 'What You Receive at the End of a Build',
    intro:
      'Deliverables are agreed before the first sprint, so there is no argument later about what counted as finished.',
    items: [
      'Written stack and architecture decision log with trade-offs',
      'Responsive front end built and tested against agreed breakpoints',
      'Database schema, migrations and realistic seed data',
      'Authentication with role-based permissions and session handling',
      'Integrations wired to live credentials on sandbox first',
      'Automated test suite plus a manual regression sign-off report',
      'Staging and production environments with pipeline deployment',
      'Source code handover, admin guide and a 60-day support window',
    ],
  },
  faqs: {
    eyebrow: 'Common Questions',
    heading: 'Web Development Questions Buyers Ask',
    items: [
      {
        question: 'How long does a custom web application take to build?',
        answer:
          'A focused internal tool or booking system usually takes eight to twelve weeks from signed scope to production. Portals with multiple user roles, payments and third-party integrations typically run four to six months. We give a stage-by-stage estimate after discovery, because guessing a timeline before the workflows are mapped is how projects slip.',
      },
      {
        question: 'How do you decide which technology stack to use?',
        answer:
          'We weigh four things: what your team can hire for locally, what the integration partners require, the expected traffic and data volume, and the cost of running it monthly. Each recommendation comes with a written trade-off note naming what we rejected and why, so the choice is defensible to a board rather than a matter of developer preference.',
      },
      {
        question: 'Who owns the source code and the infrastructure?',
        answer:
          'You do. Code lives in your Git organisation from the first commit, cloud accounts are created in your name, and domain and DNS records stay under your control. We hold contributor access for the duration of the engagement and hand back full ownership at closure, including any deployment keys we generated.',
      },
      {
        question: 'What happens when requirements change mid-project?',
        answer:
          'Small adjustments inside an agreed sprint are absorbed. Anything that adds a screen, a role or a third-party dependency goes through a short change note: what it adds, what it costs, and what it displaces in the schedule. You approve it in writing before work starts, which keeps the budget predictable instead of quietly drifting.',
      },
      {
        question: 'Can you work alongside our in-house developers?',
        answer:
          'Frequently. We can lead the build, take a defined slice such as the API layer or the admin panel, or embed for a fixed number of days a month. Shared repositories, pull requests and a joint stand-up keep one team rather than two. We also leave architecture notes so your developers can maintain what we hand over.',
      },
      {
        question: 'How do you test a web application before release?',
        answer:
          'Every build passes three gates: unit and integration tests in the pipeline, a manual regression sweep across agreed browsers and devices, and a load test against realistic concurrency. For anything touching money or personal data we add a security review covering authentication, input handling and dependency vulnerabilities. Release waits for a signed QA report.',
      },
      {
        question: 'What does post-launch support actually cover?',
        answer:
          'Support is scoped per project but normally includes monitoring and alerting, dependency and security patches, bug fixes for anything built to spec, and a monthly block of enhancement hours. Response targets are written into the agreement. Larger feature work is quoted separately so routine maintenance never competes with roadmap items for attention.',
      },
    ],
  },
  related: [
    { label: 'Custom Website Development', href: '/custom-website-development' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'CMS Development', href: '/cms-development' },
    { label: 'SaaS Development', href: '/saas-development' },
    { label: 'Web Development in Gurgaon', href: '/web-development-gurgaon' },
    { label: 'Website Maintenance', href: '/website-maintenance' },
  ],
}

export default content
