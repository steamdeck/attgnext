import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'multi-vendor-website-development',
  route: '/multi-vendor-website-development',
  breadcrumbTitle: 'Multi-Vendor Website Development',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Multi-Vendor Website Development',
    metaTitle: 'Multi-Vendor Marketplace Development | AT Tech Global',
    metaDescription:
      'Marketplace development with vendor onboarding, catalogue sync, commission rules, split payments, payouts, seller dashboards and order routing built to scale.',
    keywords:
      'multi vendor website development, marketplace development, multi vendor ecommerce, vendor marketplace, split payments',
    ogTitle: 'Multi-Vendor Marketplace Development | AT Tech Global',
    ogDescription:
      'Onboard sellers, split payments automatically and keep disputes from landing on your support desk.',
  },
  intro: {
    eyebrow: 'Marketplace Development',
    heading: 'Marketplaces Where Sellers And Buyers Both Stay',
    paragraphs: [
      'A marketplace is two products stitched together: a shopping experience buyers trust and a back-office sellers will actually maintain. Most failed builds get the storefront right and everything else wrong. Stock goes stale because listing updates are painful, payouts arrive late, and a single return without a clear owner turns into a support ticket that nobody can resolve.',
      'AT Tech Global has delivered marketplace platforms since our early ecommerce work, from the Gurgaon office with UK delivery support from Leicester. We build the vendor lifecycle end to end, including the unglamorous parts: verification, commission accounting, split settlements and the reconciliation reports your finance team will ask for on day two.',
    ],
  },
  highlights: [
    {
      icon: 'ecommerce.svg',
      title: 'Two Portals, One Truth',
      text: 'Buyer storefront and seller console read from the same catalogue, order and settlement data, so nothing drifts out of sync.',
    },
    {
      icon: 'payment.svg',
      title: 'Automated Split Payouts',
      text: 'Commission is deducted at the gateway level through Razorpay Route or Stripe Connect, with scheduled settlements and payout statements.',
    },
    {
      icon: 'shipping.svg',
      title: 'Fulfilment That Scales',
      text: 'Orders route to the right seller or warehouse automatically, with pickup scheduling and tracking pushed back to the buyer.',
    },
  ],
  features: {
    eyebrow: 'Platform Modules',
    heading: 'What A Multi-Vendor Platform Needs',
    intro:
      'These modules are the difference between a directory of sellers and a marketplace that can settle money correctly every week.',
    items: [
      {
        icon: 'certificate.svg',
        title: 'Vendor Onboarding & KYC',
        text: 'Application forms, document upload, GST and PAN validation, approval queues and tiered seller levels with different privileges.',
      },
      {
        icon: 'inventory.svg',
        title: 'Catalogue Ownership & Sync',
        text: 'Sellers manage their own listings, stock and pricing, with bulk CSV import, barcode mapping and optional ERP or Tally sync.',
      },
      {
        icon: 'dollar_currency.svg',
        title: 'Commission & Payout Rules',
        text: 'Category-wise commission, fixed fees, shipping subsidies, TDS and GST treatment, plus per-seller overrides and promotional waivers.',
      },
      {
        icon: 'analytics.svg',
        title: 'Seller Dashboards',
        text: 'Each vendor sees orders, returns, settlement ledger, payout history and performance metrics without emailing your accounts team.',
      },
      {
        icon: 'pipeline.svg',
        title: 'Order Routing & Fulfilment',
        text: 'Multi-seller carts split into vendor sub-orders, with SLA timers, auto-cancellation and shipment status flowing back to buyers.',
      },
      {
        icon: 'support.svg',
        title: 'Disputes, Returns & Refunds',
        text: 'Return requests routed to the responsible seller, evidence uploads, refund approval limits and clawback from the next payout run.',
      },
    ],
  },
  process: {
    eyebrow: 'Build Sequence',
    heading: 'Our Marketplace Delivery Process',
    intro:
      'Marketplace projects live or die on money flow, so settlement logic is designed before the storefront is styled.',
    steps: [
      { title: 'Commercial Model Mapping', text: 'Commission structure, payout cycle, return liability and fund custody are agreed first.' },
      { title: 'Seller Journey Design', text: 'Onboarding, listing and payout screens wireframed from the vendor point of view.' },
      { title: 'Core Platform Build', text: 'Catalogue, cart splitting, order management and vendor console built in sprints.' },
      { title: 'Payments & Settlement', text: 'Gateway routing, split logic, payout batches and reconciliation reports implemented.' },
      { title: 'Onboard First Sellers', text: 'Pilot vendors loaded, seeded catalogue built and cold-start launch support provided.' },
    ],
  },
  deliverables: {
    eyebrow: 'Included Scope',
    heading: 'What The Marketplace Ships With',
    intro:
      'You receive a working platform plus the operational playbooks your team needs to run it without us on call.',
    items: [
      'Buyer storefront with search, filters and multi-seller cart',
      'Vendor registration, KYC upload and admin approval workflow',
      'Seller console for listings, stock, pricing and order handling',
      'Commission engine with per-category and per-vendor rules',
      'Split payment integration with scheduled payout batches',
      'Settlement ledger with downloadable vendor statements',
      'Return, refund and dispute management with audit trail',
      'Admin reporting on GMV, take rate, seller performance and payouts',
    ],
  },
  faqs: {
    eyebrow: 'Marketplace Questions',
    heading: 'Multi-Vendor Website FAQ',
    items: [
      {
        question: 'How do split payments and vendor payouts actually work?',
        answer:
          'In India we usually use Razorpay Route, which holds the buyer payment in a nodal account, deducts your commission and route fees, and settles the seller share to their verified bank account on a T+2 or weekly cycle. Globally, Stripe Connect accomplishes the same with destination charges or separate transfers. Either way the platform keeps its own ledger so a payout can always be traced back to specific orders.',
      },
      {
        question: 'How do we solve the cold-start problem?',
        answer:
          'Pick one niche, one city or one category and get ten credible sellers live before you chase buyer traffic. Seed the catalogue manually if you must, offer launch-period commission waivers, and give first vendors free professional photography or listing assistance. Marketplaces with thin, unrelated catalogues fail because buyers find nothing worth returning for, regardless of how good the software is.',
      },
      {
        question: 'Who is responsible when a seller ships a defective product?',
        answer:
          'That is a commercial decision, so we make it configurable. Common models are seller-funded refunds with platform mediation, a platform-held reserve that absorbs disputes, or threshold-based rules where sellers above a return rate are suspended automatically. The software records evidence, applies the agreed rule and claws the amount back from the next settlement run.',
      },
      {
        question: 'Can sellers sync stock from their existing system?',
        answer:
          'Yes. We offer CSV and Excel uploads for smaller vendors, and API or middleware connectors for those running Tally, Zoho Inventory, Shopify or a custom ERP. Sync can be one-way for stock and price, or two-way so marketplace orders appear in the seller system without duplicate entry. Overnight batches suit most catalogues; high-velocity sellers get webhook-driven updates.',
      },
      {
        question: 'Should we build on WooCommerce, Shopify or custom code?',
        answer:
          'WooCommerce with a multi-vendor plugin suits small catalogues and tight budgets, though you inherit plugin conflicts and can hit performance ceilings past a few thousand SKUs. Shopify works when sellers are comfortable there but commissions and payouts stay partly manual. Custom development makes sense when commission logic, compliance or scale is central to your advantage and you want to own the platform outright.',
      },
      {
        question: 'How long does a marketplace build take?',
        answer:
          'A focused marketplace with vendor onboarding, catalogue, split payments and seller dashboards typically takes twelve to sixteen weeks to a pilot launch. Multi-currency, logistics integrations, loyalty programmes and mobile apps extend that. We recommend launching with a narrow category rather than waiting for every enterprise feature, since real seller behaviour reshapes the roadmap faster than planning does.',
      },
      {
        question: 'How do you stop the marketplace being flooded with duplicate listings?',
        answer:
          'Duplicate control matters when several sellers stock the same product. Options include a shared catalogue where vendors compete on price and fulfilment rating, GTIN or brand-plus-model matching on upload, and moderation queues that flag near-duplicate titles and images. For second-hand and handicraft marketplaces where variation is genuine, we rely on condition, grade and photo rules instead.',
      },
    ],
  },
  related: [
    { label: 'Ecommerce Development', href: '/service/ecommerce-development' },
    { label: 'QuickCart Development', href: '/service/quickcart-development' },
    { label: 'Ecommerce Services', href: '/service/ecommerce' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'ERP Development', href: '/service/erp-development' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default content
