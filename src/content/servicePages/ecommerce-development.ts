import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'ecommerce-development',
  route: '/service/ecommerce-development',
  breadcrumbTitle: 'Ecommerce Development',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Ecommerce Development',
    metaTitle: 'Ecommerce Development Company Services | AT Tech Global',
    metaDescription:
      'Ecommerce development covering catalogue modelling, payment gateways, GST, shipping APIs and returns, on headless or hosted platforms built to convert.',
    keywords:
      'ecommerce development, ecommerce website development, headless commerce, online store development, payment gateway integration, GST ecommerce, marketplace development, ecommerce development company',
    ogTitle: 'Ecommerce Development Services | AT Tech Global',
    ogDescription:
      'Store builds where catalogue structure, payments, tax and logistics are designed together instead of patched in after launch.',
  },
  intro: {
    eyebrow: 'Commerce Engineering',
    heading: 'Ecommerce Development Decided by How You Sell',
    paragraphs: [
      'Two stores can look identical on the surface and behave completely differently underneath. A single-brand shop shipping nationwide needs almost none of the machinery that a marketplace with fifty sellers, mixed tax rates and reverse pickups requires. Getting that structure wrong is expensive later, because catalogue and order models are the hardest parts of a store to change once real orders are flowing through them.',
      'This page covers how we build commerce systems: how the catalogue is modelled before anything is designed, how payments, tax and logistics are wired into the order lifecycle, and when a headless stack earns its extra complexity over a hosted platform. For a plain overview of what we sell rather than how we build it, see our ecommerce services page.',
    ],
  },
  highlights: [
    {
      icon: 'strategy.svg',
      title: 'Headless or Hosted, Chosen on Evidence',
      text: 'We recommend headless only when content velocity, multi-channel selling or custom logic genuinely justifies the added moving parts.',
    },
    {
      icon: 'roi.svg',
      title: 'Conversion Treated as an Engineering Task',
      text: 'Search relevance, variant selection, delivery estimates and payment failures are measured and tuned with real session data.',
    },
    {
      icon: 'scalable.svg',
      title: 'Built for Peak Sale Days',
      text: 'Caching, queue-backed order processing and stock reservation logic designed for the traffic of your busiest hour, not the average.',
    },
  ],
  features: {
    eyebrow: 'Build Components',
    heading: 'The Systems Behind a Store That Sells',
    intro:
      'Every commerce build is assembled from these components. Which ones you need, and how deep each goes, is settled in the scoping phase.',
    items: [
      {
        icon: 'template.svg',
        title: 'Catalogue and Variant Modelling',
        text: 'Attributes, options, bundles and kits modelled so filtering stays fast and stock is tracked at the level you actually hold it.',
      },
      {
        icon: 'payment.svg',
        title: 'Payment Gateway Integration',
        text: 'Razorpay, PayU, Stripe and Paytm with UPI, cards, net banking, wallets, EMI, tokenised cards and automatic reconciliation.',
      },
      {
        icon: 'finance.svg',
        title: 'Tax and GST Handling',
        text: 'HSN codes, inclusive and exclusive pricing, place-of-supply rules, B2B and B2C treatment, and GST-compliant invoice generation.',
      },
      {
        icon: 'shipping.svg',
        title: 'Shipping and Logistics APIs',
        text: 'Rate comparison, serviceability checks, label printing, AWB generation, tracking webhooks and cash-on-delivery remittance.',
      },
      {
        icon: 'pipeline.svg',
        title: 'Orders and Returns',
        text: 'Split shipments, partial cancellations, exchange flows, refund routing and credit notes that stay aligned with the accounting system.',
      },
      {
        icon: 'cloud.svg',
        title: 'Headless Architecture',
        text: 'Composable storefront on Next.js reading from Shopify, CommerceTools or a custom service layer, with content and commerce decoupled.',
      },
    ],
  },
  process: {
    eyebrow: 'Build Sequence',
    heading: 'How an Ecommerce Build Is Delivered',
    intro:
      'The catalogue and order model comes first. Design and front-end work follow, because both depend on decisions made at that stage.',
    steps: [
      { title: 'Commerce Discovery', text: 'Assortment size, selling channels, tax profile and fulfilment routes are mapped.' },
      { title: 'Catalogue and Order Modelling', text: 'Product schema, variant rules and the full order state machine are defined.' },
      { title: 'Platform and Integration Build', text: 'Storefront, payments, tax engine and courier APIs wired in sprint order.' },
      { title: 'Conversion and QA Pass', text: 'Funnel instrumentation, checkout tuning and end-to-end transaction testing.' },
      { title: 'Go-Live and Trade Support', text: 'Soft launch, then monitoring through the first peak trading period.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope of Work',
    heading: 'What a Store Build Delivers',
    intro:
      'Delivered items depend on the platform decision, but the structure below reflects what most commerce projects receive.',
    items: [
      'Product information architecture and attribute taxonomy',
      'Bulk catalogue import with image and variant mapping',
      'Integrated payment gateway with sandbox and live credentials',
      'GST configuration and automated invoice templates',
      'Courier integrations with tracking on order status pages',
      'Returns, exchange and refund workflow configuration',
      'Checkout funnel analytics with key event tracking',
      'Admin training plus a pre-peak readiness checklist',
    ],
  },
  faqs: {
    eyebrow: 'Ecommerce FAQ',
    heading: 'Ecommerce Development Questions',
    items: [
      {
        question: 'Should we build headless or stay on a hosted platform?',
        answer:
          'Choose headless when you sell across several channels, publish content far faster than a theme allows, or need checkout logic the platform will not support. Choose hosted when the catalogue is modest, the team is small and time to first sale matters more than architectural purity. Headless adds real running costs, and a hosted store built well will outperform a headless one built reluctantly.',
      },
      {
        question: 'Which payment gateways do you integrate, and how do you handle failures?',
        answer:
          'We work with Razorpay, PayU, Stripe, Paytm and similar providers, selected by the markets you sell into and the payment methods your customers actually use. Failures are handled deliberately: webhook verification for asynchronous confirmations, idempotent order creation so retries cannot double-charge, and a fallback gateway for outages. Every failed attempt is logged with a reason code so patterns are visible.',
      },
      {
        question: 'How is GST handled for a store selling across states?',
        answer:
          'We configure tax rules by place of supply, apply the correct HSN code per product and generate invoices that satisfy Indian GST requirements, including the distinction between intra-state and inter-state supply. Prices can be displayed inclusive or exclusive. For sellers registered in multiple states, we can map warehouse locations so the tax treatment follows the dispatch origin rather than a single default rate.',
      },
      {
        question: 'How do you migrate an existing catalogue without breaking SEO?',
        answer:
          'We export products with their variants, images and categories, map old URLs to new ones through a redirect plan, and preserve title, description and structured data fields. Category pages need particular care because they often carry the strongest rankings, so their URL patterns and internal linking are kept stable wherever the platform allows. The migration runs on staging first and is verified before DNS changes.',
      },
      {
        question: 'What is the biggest cause of checkout abandonment?',
        answer:
          'In our experience it is unexpected cost and effort, not price. Delivery charges, taxes or minimum order values revealed late, forced account creation, and address forms that reject valid Indian postcodes all cost more carts than slow load times. Fixing those is usually higher return than any visual redesign, which is why we instrument the funnel before proposing changes.',
      },
      {
        question: 'Can the store handle a festive sale without going down?',
        answer:
          'Yes, if it is planned for. We run load tests at several times expected peak, put catalogue reads behind a cache, move order confirmation and email sending onto a queue so a slow third party cannot block checkout, and reserve stock atomically to prevent overselling. We also agree a freeze window on deployments in the days before a major sale.',
      },
      {
        question: 'How do returns and exchanges work on the platform?',
        answer:
          'Customers raise a return from the order page, which triggers an eligibility check against your policy and generates a reverse pickup request with the courier. Once the item is received and inspected, the refund is routed to the original payment method where possible, or issued as store credit. Credit notes and refund entries reconcile back into your accounting system rather than living only inside the store.',
      },
    ],
  },
  related: [
    { label: 'Ecommerce Website Services', href: '/service/ecommerce' },
    { label: 'QuickCart Development', href: '/service/quickcart-development' },
    { label: 'Multi-Vendor Website Development', href: '/multi-vendor-website-development' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'Dynamic Website Design', href: '/dynamic-website-design' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
  ],
}

export default content
