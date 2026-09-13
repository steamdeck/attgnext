import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'saas-development',
  route: '/saas-development',
  breadcrumbTitle: 'SaaS Development',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'SaaS Development',
    metaTitle: 'Custom SaaS Product Development Company | AT Tech Global',
    metaDescription:
      'End to end SaaS development: multi-tenant architecture, subscription billing, trials, role-based access, usage metering and scaling to hundreds of tenants.',
    keywords:
      'saas development, saas product development, multi tenant architecture, subscription billing, saas development company',
    ogTitle: 'SaaS Product Development Company | AT Tech Global',
    ogDescription:
      'From first paying customer to hundreds of tenants, engineered as a product rather than a project.',
  },
  intro: {
    eyebrow: 'SaaS Development',
    heading: 'From Working Prototype To A Product That Scales',
    paragraphs: [
      'A SaaS business is not a website with a login. The moment a second customer signs up, every decision about tenancy, billing, permissions and data separation starts compounding. Teams that treat the first version as a one-off project usually rebuild the core within eighteen months, once manual onboarding and copy-pasted tenant databases become impossible to sustain.',
      'We design and engineer SaaS platforms at AT Tech Global, pairing a Gurgaon build team with product and delivery support from our Leicester office. Work starts with tenancy model, pricing logic and the customer lifecycle, then moves into weekly releases on a stack we choose for your scale. You own the repository and the infrastructure accounts throughout.',
    ],
  },
  highlights: [
    {
      icon: 'scalable.svg',
      title: 'Tenancy Decided Up Front',
      text: 'Shared schema, schema-per-tenant or fully isolated databases, chosen against your compliance and growth expectations.',
    },
    {
      icon: 'dollar_currency.svg',
      title: 'Billing That Matches Pricing',
      text: 'Seats, tiers, usage meters, overages, coupons and dunning flows wired to a real subscription engine and your invoices.',
    },
    {
      icon: 'certificate.svg',
      title: 'A Product Roadmap, Not A Handover',
      text: 'Analytics, experiments and release cadence keep the platform improving after the launch invoice is settled.',
    },
  ],
  features: {
    eyebrow: 'Platform Engineering',
    heading: 'What We Build Into Your SaaS Platform',
    intro:
      'Every capability below is scoped against your pricing model and support commitments rather than added as an afterthought.',
    items: [
      {
        icon: 'cloud.svg',
        title: 'Multi-Tenant Architecture',
        text: 'Row-level tenant scoping, per-tenant configuration, backup isolation and data residency choices documented from day one.',
      },
      {
        icon: 'payment.svg',
        title: 'Subscriptions & Plan Management',
        text: 'Stripe or Razorpay subscriptions, upgrade and downgrade proration, trial expiry, failed-payment retries and GST-ready invoices.',
      },
      {
        icon: 'growth_balance.svg',
        title: 'Self-Serve Onboarding',
        text: 'Signup, email verification, guided setup checklists and sample data so a new account reaches first value without a sales call.',
      },
      {
        icon: 'security.svg',
        title: 'Role-Based Access Control',
        text: 'Organisations, teams, invitations, granular permissions, audit logs and SSO hooks for the customers who demand them.',
      },
      {
        icon: 'analytics.svg',
        title: 'Usage Analytics & Metering',
        text: 'Event tracking for activation, retention and feature adoption, plus billable counters that reconcile cleanly with invoices.',
      },
      {
        icon: 'technology.svg',
        title: 'API Design & Developer Docs',
        text: 'Versioned REST endpoints, token scopes, rate limits, sandbox keys and reference documentation your customers can build against.',
      },
    ],
  },
  process: {
    eyebrow: 'Product Lifecycle',
    heading: 'How We Take A SaaS Idea To Market',
    intro:
      'The goal of the first phase is not a finished platform, it is the smallest version a stranger will pay for.',
    steps: [
      { title: 'Product & Pricing Discovery', text: 'Define the buyer, the core job, the plan structure and what the first release must prove.' },
      { title: 'Architecture Blueprint', text: 'Tenancy, data model, auth, billing provider and infrastructure written down and costed.' },
      { title: 'Vertical Slice Build', text: 'One complete journey from signup through payment to the core workflow, deployed weekly.' },
      { title: 'Billing & Hardening', text: 'Metering, plan changes, dunning, backups, monitoring and load tests before public launch.' },
      { title: 'Iterate On Usage Data', text: 'Roadmap prioritised by activation and churn signals from real accounts, not opinions.' },
    ],
  },
  deliverables: {
    eyebrow: 'Engagement Output',
    heading: 'What The Engagement Produces',
    intro:
      'We work in fortnightly releases with a shared board, so progress is visible without waiting for a status meeting.',
    items: [
      'Product specification with tenancy and pricing decisions recorded',
      'Architecture diagram and infrastructure cost estimate',
      'Production application deployed on your cloud account',
      'Subscription billing with plan, trial and dunning logic',
      'Admin console for tenant, user and entitlement management',
      'Public API with keys, scopes and documentation',
      'Monitoring, alerting, error tracking and backup schedules',
      'Analytics dashboards for activation, retention and revenue',
    ],
  },
  faqs: {
    eyebrow: 'SaaS Questions',
    heading: 'SaaS Development FAQ',
    items: [
      {
        question: 'Should we build our SaaS or buy an existing platform?',
        answer:
          'Buy when your workflow is genuinely standard and the vendor roadmap matters more than your differentiation. Build when the software itself is the product, when your process is the competitive edge, or when per-seat pricing would gut your margins at scale. Often the honest answer is a hybrid: buy billing, email and support tooling, build the domain logic nobody else has.',
      },
      {
        question: 'What is the difference between a project and a product?',
        answer:
          'A project ends at handover with a fixed scope. A product keeps changing after launch: pricing experiments, onboarding tweaks, new integrations, performance work as tenants grow. Products need telemetry, feature flags, staged rollouts and a backlog that responds to usage. We budget and plan for operating effort, not just an initial build, because that is what keeps churn low.',
      },
      {
        question: 'How do you keep one customer from seeing another customer data?',
        answer:
          'Isolation is enforced at the query layer, not only in the interface. Every tenant-owned row carries a tenant identifier, database access goes through a scoped layer that cannot run unscoped queries, and automated tests attempt cross-tenant reads on each release. For regulated buyers we deploy separate schemas or separate databases entirely, with per-tenant encryption keys where required.',
      },
      {
        question: 'Which billing platforms do you work with?',
        answer:
          'Stripe for global card and multi-currency subscriptions, Razorpay for Indian cards, UPI and net banking, and Paddle or Chargebee where tax handling needs to sit with the merchant of record. We model plans, seats, usage tiers and coupons in the billing provider and mirror entitlements into your own database so the app never depends on a live API call to decide what a user can access.',
      },
      {
        question: 'How long before we have something sellable?',
        answer:
          'A narrow first release with signup, payment, one core workflow and an admin console is usually six to ten weeks. Broad platforms with integrations, reporting and enterprise permissions run four to eight months. We deliberately ship a paid pilot with a handful of design-partner customers, because a real invoice exposes problems that demos and free trials never will.',
      },
      {
        question: 'What does it cost to run a SaaS platform each month?',
        answer:
          'Infrastructure for an early-stage product typically lands between the price of a modest server and a few hundred dollars monthly, depending on storage, background jobs and database size. The costs that surprise founders are transactional email, third-party APIs, log retention and support tooling. We publish a running cost model with the architecture so unit economics are visible before you price your plans.',
      },
      {
        question: 'Can you take over a SaaS codebase someone else started?',
        answer:
          'Frequently. We begin with a technical review covering test coverage, deployment pipeline, tenancy boundaries, security posture and dependency risk, then deliver a prioritised remediation plan. Many rescued platforms need stability work before features: automated deploys, database backups that have actually been restored, error tracking and a clear separation between app and data layers.',
      },
      {
        question: 'Do you provide ongoing product development after launch?',
        answer:
          'Yes, and most clients stay on a monthly product team arrangement covering feature work, bug fixes, dependency upgrades, monitoring response and infrastructure tuning. Scope is agreed each month against a shared backlog. That continuity is what allows a platform to handle its first thousand accounts without a rebuild in year two.',
      },
    ],
  },
  related: [
    { label: 'CRM Development', href: '/crm-development' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'Custom Website Development', href: '/custom-website-development' },
    { label: 'Startup Website Design', href: '/startup-website-design' },
    { label: 'LMS Development', href: '/service/lms' },
    { label: 'Pricing', href: '/pricing' },
  ],
}

export default content
