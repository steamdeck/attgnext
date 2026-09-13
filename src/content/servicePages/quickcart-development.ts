import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'quickcart-development',
  route: '/service/quickcart-development',
  breadcrumbTitle: 'QuickCart Development',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'QuickCart Development',
    metaTitle: 'QuickCart Development | 10-Minute Delivery Apps | AT Tech',
    metaDescription:
      'Quick commerce development for 10 to 30 minute delivery: dark-store inventory, rider assignment, live stock sync and a checkout built for impulse orders.',
    keywords:
      'quickcart development, quick commerce app development, dark store software, 10 minute delivery app, hyperlocal delivery platform, grocery app development, rider assignment system, q-commerce solutions',
    ogTitle: 'QuickCart Development | AT Tech Global',
    ogDescription:
      'Hyperlocal storefronts with live stock sync, dispatch automation and operational dashboards that keep delivery cost per order in view.',
  },
  intro: {
    eyebrow: 'Quick Commerce Platforms',
    heading: 'Storefronts Built for the Ten-Minute Promise',
    paragraphs: [
      'Quick commerce is not grocery retail with a faster courier. A customer opens the app because something ran out, decides in under a minute and expects the bag at the door before the kettle boils. That promise collapses the moment the app shows stock the dark store does not have, or a rider is assigned after the picker has already packed the order for someone two kilometres away.',
      'We build QuickCart platforms around those physical constraints. Hyperlocal catalogues are scoped per store, inventory is synchronised continuously rather than nightly, delivery slots and rider allocation are decided by rules you can inspect, and the checkout is short enough to survive an impulse purchase. Operations teams get dashboards that show fill rate, prep time and cost per order while the shift is still running.',
    ],
  },
  highlights: [
    {
      icon: 'local.svg',
      title: 'Hyperlocal by Default',
      text: 'Separate catalogues, pricing and stock pools per dark store, with the nearest serviceable store selected from the delivery address.',
    },
    {
      icon: 'speed.svg',
      title: 'Checkout in Under a Minute',
      text: 'Saved baskets, one-tap reorder, wallet and UPI-first payments, and address defaults that remove every avoidable step.',
    },
    {
      icon: 'inventory.svg',
      title: 'Live Stock, Not Overnight Stock',
      text: 'Event-driven sync between picking, billing and the storefront so a sold-out SKU disappears from the app immediately.',
    },
  ],
  features: {
    eyebrow: 'Platform Capability',
    heading: 'What Goes Into a QuickCommerce Build',
    intro:
      'These are the subsystems that decide whether the delivery promise holds at peak. Each is built to be tuned by your operations team, not by a developer.',
    items: [
      {
        icon: 'shopping.svg',
        title: 'Dark Store and Inventory Control',
        text: 'Store-level assortment, batch and expiry tracking, low-stock thresholds and a picker app that reports shortages as they happen.',
      },
      {
        icon: 'shipping.svg',
        title: 'Slots and Rider Assignment',
        text: 'Slot capacity rules, geo-fenced rider zones, batching for nearby drops and automatic reassignment when a rider runs late.',
      },
      {
        icon: 'automation.svg',
        title: 'Real-Time Sync Engine',
        text: 'Webhook and event streams keep app inventory, pricing and offers aligned with the store system within seconds, not after a nightly job.',
      },
      {
        icon: 'cart.svg',
        title: 'Express Cart and Checkout',
        text: 'Weight-priced produce, quantity steppers, repeat-order shortcuts, multiple payment modes and an address book tied to serviceability.',
      },
      {
        icon: 'engagement.svg',
        title: 'Recovery and Substitutions',
        text: 'Abandoned-cart nudges on push and WhatsApp, plus a substitution workflow that lets the picker offer an alternative before refunding.',
      },
      {
        icon: 'analytics.svg',
        title: 'Operations Dashboards',
        text: 'Live views of fill rate, prep time, rider idle time, cancellations and delivery cost per order, broken down by store and by shift.',
      },
    ],
  },
  process: {
    eyebrow: 'Build Path',
    heading: 'How We Ship a QuickCommerce Platform',
    intro:
      'Delivery economics are modelled before code is written, because a platform that cannot be run profitably is not finished.',
    steps: [
      { title: 'Delivery Model Workshop', text: 'Serviceable zones, slot windows and the target cost per order are agreed.' },
      { title: 'Catalogue and Store Setup', text: 'Assortment, pricing rules, units of measure and store hierarchy are modelled.' },
      { title: 'Core Build in Sprints', text: 'Storefront, picker app, dispatch logic and dashboards built in two-week cycles.' },
      { title: 'Peak Load and Pilot', text: 'One dark store goes live, then load tests simulate festival-hour order bursts.' },
      { title: 'Rollout and Tuning', text: 'Store-by-store expansion with dispatch rules tuned against real prep times.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope of Work',
    heading: 'What the Platform Includes at Handover',
    intro:
      'Everything below is delivered and configured, with a walkthrough for the team who will run the shifts.',
    items: [
      'Customer app or progressive web storefront with saved baskets',
      'Picker and packer app with shortage and substitution handling',
      'Rider app with turn-by-turn drops and proof of delivery',
      'Store-level inventory sync with low-stock and expiry alerts',
      'Dispatch rules engine for slots, zones and rider batching',
      'Admin console for assortment, pricing, offers and refunds',
      'Operations dashboard for fill rate, prep time and cost per order',
      'Load test report and a peak-hour scaling runbook',
    ],
  },
  faqs: {
    eyebrow: 'Quick Commerce FAQ',
    heading: 'Questions About Building a QuickCart Platform',
    items: [
      {
        question: 'Is a ten-minute delivery promise realistic for a new platform?',
        answer:
          'Ten minutes is achievable only when the dark store, the rider and the customer are all inside roughly two to three kilometres, and the order is small enough to pick in one pass. Most operators launch with a twenty to thirty minute window, measure actual prep and travel times, then tighten the promise as the data justifies it. Promising more than the network can deliver costs more in refunds than it wins in orders.',
      },
      {
        question: 'How accurate can real-time inventory really be?',
        answer:
          'Perfect accuracy is not achievable in a grocery environment where staff pick from shared shelves, but ninety-five per cent or better is realistic with three controls: event-driven sync instead of scheduled jobs, barcode-driven picking so the system sees the deduction the moment it happens, and a periodic cycle count that reconciles shrinkage. Accuracy above that needs process discipline more than better software.',
      },
      {
        question: 'What drives delivery cost per order in quick commerce?',
        answer:
          'Four things dominate: rider idle time between orders, average batch size, the distance from store to door, and refunds caused by out-of-stock items. Batching two nearby drops can cut per-order cost substantially, which is why our dispatch engine optimises for clusters rather than first-come-first-served. Reporting shows these drivers separately so you can tell a pricing problem from an operations problem.',
      },
      {
        question: 'How does the platform behave during a peak-hour surge?',
        answer:
          'Traffic spikes in quick commerce are extreme and predictable, so we plan for the busiest eight hours rather than the daily average. Inventory updates move through a queue, the storefront reads from a cache, and dispatch runs as an independent service so a slow payment gateway cannot stall rider assignment. Load tests replay a festival-evening order curve before every major launch.',
      },
      {
        question: 'What happens when an item is out of stock after ordering?',
        answer:
          'The picker is prompted with ranked substitutes based on category, size and price proximity, and can offer the alternative to the customer in-app for a limited window. If the customer declines or does not respond, the line item is dropped and only that amount is refunded, with the rest of the order continuing to fulfil. Every substitution is logged so buying teams can see what keeps running out.',
      },
      {
        question: 'Can QuickCart work with our existing POS or ERP?',
        answer:
          'Yes, and it usually should. We integrate through the POS or ERP APIs where they exist, and through a middleware layer over database views where they do not. Order pushes, stock deductions and returns all reconcile back to the accounting system, so the store ledger and the app never tell two different stories at month end.',
      },
      {
        question: 'How do you recover abandoned carts without annoying customers?',
        answer:
          'Recovery works best when the cart is still valid, so the nudge fires within minutes while the basket is serviceable and the slot is open. We cap the sequence at one push and one WhatsApp message, suppress it if the customer has ordered elsewhere in the meantime, and exclude categories such as medicines where repeated prompts feel inappropriate. Suppression rules matter more than the message copy.',
      },
    ],
  },
  related: [
    { label: 'Ecommerce Development', href: '/service/ecommerce-development' },
    { label: 'Ecommerce Website Services', href: '/service/ecommerce' },
    { label: 'Mobile Application Development', href: '/service/mobile-application' },
    { label: 'Progressive Web Apps', href: '/progressive-web-apps' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
  ],
}

export default content
