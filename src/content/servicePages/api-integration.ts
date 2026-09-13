import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'api-integration',
  route: '/api-integration',
  breadcrumbTitle: 'API Integration',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'API Integration',
    metaTitle: 'Trusted API Integration Services Company | AT Tech Global',
    metaDescription:
      'API integration services for payments, ERP, logistics and WhatsApp. OAuth handling, webhooks, retries, idempotency and monitoring that survives production.',
    keywords:
      'api integration services, rest api integration, webhook integration, payment gateway integration, third party api integration',
    ogTitle: 'API Integration Services | AT Tech Global',
    ogDescription:
      'Systems that talk to each other reliably, with retries, idempotency and monitoring built in from the start.',
  },
  intro: {
    eyebrow: 'API Integration',
    heading: 'Making Separate Systems Behave Like One',
    paragraphs: [
      'Nearly every operational headache traces back to two systems that do not agree. Orders exist in the shop but not in accounts, stock is wrong on the website, a customer paid twice because the callback never arrived. Integrations are not a wiring job you finish once; they are a small distributed system that needs its own error handling, retries and visibility.',
      'We have connected payment gateways, ERPs, courier networks and messaging platforms for clients from our Gurgaon base and Leicester office across fourteen years of delivery. The work starts with a written data contract between the systems, then adds the unglamorous safeguards that keep it running quietly at 2am when a vendor API times out on a live order.',
    ],
  },
  highlights: [
    {
      icon: 'technology.svg',
      title: 'Contracts Before Code',
      text: 'Field mappings, formats and ownership of each data point are written down before a single endpoint gets called.',
    },
    {
      icon: 'automation.svg',
      title: 'Built To Survive Failure',
      text: 'Timeouts, exponential backoff, idempotency keys and dead-letter queues mean a vendor outage delays work instead of losing it.',
    },
    {
      icon: 'visibility.svg',
      title: 'Visible When It Breaks',
      text: 'Every sync run is logged with payload snapshots, alerting and a replay button, so failures get fixed in minutes.',
    },
  ],
  features: {
    eyebrow: 'Integration Scope',
    heading: 'Systems And Mechanics We Handle',
    intro:
      'Whether you are connecting two tools or twelve, the same disciplines apply: authentication, mapping, failure handling and observability.',
    items: [
      {
        icon: 'cloud.svg',
        title: 'REST & GraphQL Consumption',
        text: 'Typed clients, pagination handling, schema validation and version pinning so upstream changes do not silently break your data.',
      },
      {
        icon: 'broadcast.svg',
        title: 'Webhooks & Event Sync',
        text: 'Signed webhook receivers, event ordering, deduplication and queue-backed processors for near real time updates between systems.',
      },
      {
        icon: 'security.svg',
        title: 'OAuth & Credential Handling',
        text: 'OAuth2 authorisation flows, token refresh, scope minimisation and encrypted secret storage with rotation and per-environment keys.',
      },
      {
        icon: 'payment.svg',
        title: 'Payment Gateway Integration',
        text: 'Razorpay, Stripe and PayU checkout, subscriptions, refunds, webhook confirmation and reconciliation against your own ledger.',
      },
      {
        icon: 'finance.svg',
        title: 'Accounting & ERP Links',
        text: 'Tally and Zoho Books connectors for invoices, payments, stock and ledgers, with GST-ready field mapping and reverse sync rules.',
      },
      {
        icon: 'whatsapp.svg',
        title: 'Logistics & WhatsApp APIs',
        text: 'Courier booking and tracking with Delhivery, Shiprocket or Blue Dart, plus WhatsApp Business templates for order and delivery updates.',
      },
    ],
  },
  process: {
    eyebrow: 'Integration Method',
    heading: 'How We Connect Your Systems',
    intro:
      'The first deliverable is a mapping document, because most integration failures are data disagreements rather than code faults.',
    steps: [
      { title: 'System & Data Mapping', text: 'Inventory the endpoints, objects and field owners across every system involved.' },
      { title: 'Contract Definition', text: 'Agree payload shapes, status vocabularies, timings and who wins each conflict.' },
      { title: 'Auth & Sandbox Build', text: 'Credentials, tokens and a sandbox connection proven before production keys are used.' },
      { title: 'Sync & Failure Handling', text: 'Implement retries, idempotency, queue backlogs and dead-letter recovery paths.' },
      { title: 'Monitor & Reconcile', text: 'Alerts, dashboards and daily reconciliation reports that surface drift within a day.' },
    ],
  },
  deliverables: {
    eyebrow: 'Deliverables',
    heading: 'What You Get From An Integration Project',
    intro:
      'Integrations ship with documentation and a runbook, because the person supporting them next year may not be the person who built them.',
    items: [
      'Integration map showing systems, endpoints and data flow',
      'Field mapping specification with transformation rules',
      'Implemented connectors with automated test coverage',
      'Secure credential storage and rotation procedure',
      'Retry, idempotency and dead-letter queue handling',
      'Monitoring dashboards with alert thresholds',
      'Daily reconciliation report against the source of truth',
      'Operations runbook including replay and recovery steps',
    ],
  },
  faqs: {
    eyebrow: 'Integration Questions',
    heading: 'API Integration FAQ',
    items: [
      {
        question: 'Why do integrations break months after launch?',
        answer:
          'Four recurring causes. Vendors deprecate API versions or quietly change a response field. Tokens and certificates expire unseen. Traffic grows past a rate limit nobody handled. And a network hiccup drops a request that had no retry, so systems drift apart silently. Every integration we build addresses all four with version pinning, expiry monitoring, backoff and daily reconciliation.',
      },
      {
        question: 'How do you make sure a payment is never recorded twice?',
        answer:
          'Two mechanisms work together. The gateway sends a unique event or payment identifier on every webhook, and we store processed identifiers so a repeated delivery is ignored. Our own outbound calls carry an idempotency key, so a retried create-payment request returns the original result instead of creating a second one. Reconciliation against gateway settlement reports then catches anything webhooks missed entirely.',
      },
      {
        question: 'What is the difference between polling and webhooks?',
        answer:
          'Polling asks the vendor for changes on a schedule, which is simple and works with almost any API but adds delay and wastes quota. Webhooks let the vendor push events the moment something happens, which is faster and cheaper but requires a public HTTPS endpoint, signature verification and deduplication. Many integrations need both: webhooks for speed, plus a nightly poll as a safety net for missed events.',
      },
      {
        question: 'Can you integrate with Tally for invoices and stock?',
        answer:
          'Yes. Tally is usually connected either through its XML or HTTP interface on a local machine, or through a middleware service that brokers requests, since Tally is not designed for direct internet exposure. We sync invoices, receipts, outstanding balances, item masters and stock levels on a schedule, and handle the classic pitfalls: voucher numbering, GST rates and unit conversion mismatches.',
      },
      {
        question: 'How should API keys and OAuth tokens be stored?',
        answer:
          'Never in source code or a spreadsheet shared over chat. Keys belong in a managed secret store or encrypted environment configuration, scoped per environment so a staging key cannot touch production data. OAuth refresh tokens are encrypted at rest and refreshed proactively before expiry. We also log credential expiry dates and alert well ahead, because an expired token looks exactly like a vendor outage.',
      },
      {
        question: 'What happens when a vendor API goes down?',
        answer:
          'Requests enter a queue with exponential backoff rather than failing outright. After a configured number of attempts the job moves to a dead-letter queue, an alert fires, and the payload is preserved so it can be replayed with one click once the vendor recovers. For customer-facing paths we show a clear pending state instead of an error, so nobody re-submits an order that is already queued.',
      },
      {
        question: 'How do you monitor integrations in production?',
        answer:
          'Each sync run records a job record with start time, duration, item counts, failures and a payload snapshot. Dashboards show success rate, latency and backlog depth per integration, and alerts fire on thresholds rather than on every single error. A daily reconciliation compares record counts and totals between systems, which catches the quiet drift that pure error logging never notices.',
      },
      {
        question: 'Do you build middleware or connect systems directly?',
        answer:
          'Both, depending on how many systems are involved. Point-to-point connections are quickest for two systems with clear ownership. Once three or more systems share data, we introduce a middleware layer holding canonical entities such as customer, order and invoice, with adapters per system. That way a new vendor is one adapter, not a rewrite of every existing connection.',
      },
    ],
  },
  related: [
    { label: 'CRM Development', href: '/crm-development' },
    { label: 'ERP Development', href: '/service/erp-development' },
    { label: 'ERP Solutions', href: '/service/erp' },
    { label: 'SaaS Development', href: '/saas-development' },
    { label: 'Multi-Vendor Website Development', href: '/multi-vendor-website-development' },
    { label: 'Security Audits', href: '/security-audits' },
  ],
}

export default content
