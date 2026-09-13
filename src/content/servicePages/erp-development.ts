import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'erp-development',
  route: '/service/erp-development',
  breadcrumbTitle: 'ERP Development',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'ERP Development',
    metaTitle: 'ERP Development and Implementation | AT Tech Global',
    metaDescription:
      'Custom ERP development and implementation: process mapping, inventory, finance and HR modules, Tally integration, data migration and phased go-live support.',
    keywords:
      'erp development, custom erp software, erp implementation, erp development company, tally integration, inventory management software, erp data migration, erp for manufacturing',
    ogTitle: 'ERP Development and Implementation | AT Tech Global',
    ogDescription:
      'We map your real processes before configuring anything, migrate legacy data carefully and go live in phases that your team can absorb.',
  },
  intro: {
    eyebrow: 'Enterprise Systems Delivery',
    heading: 'ERP Rollouts Fail on Process, Not on Software',
    paragraphs: [
      'An ERP project rarely collapses because the product was technically weak. It collapses because the system was configured for a process the business does not actually follow, because opening balances arrived wrong, or because the warehouse team was handed a tablet on Monday with an hour of training on Friday. The software decision matters, but the delivery discipline around it decides whether anyone still uses the system a year later.',
      'We implement ERP in a deliberately unglamorous order: observe how work happens today, document the gaps, configure only what the process needs, migrate data with reconciliations at each stage, and go live module by module. Our Gurugram team has delivered business systems for over fourteen years, including Tally-linked accounting setups, and we hand over administration training rather than keeping the client dependent on us.',
    ],
  },
  highlights: [
    {
      icon: 'strategy.svg',
      title: 'Process Mapped Before Configured',
      text: 'We watch how purchase, stores and dispatch actually run, then document the exceptions nobody mentions in the kickoff meeting.',
    },
    {
      icon: 'trust.svg',
      title: 'One Set of Numbers',
      text: 'Stock, ledgers and statutory reports read from a single source, so month-end reconciliation stops being a manual exercise.',
    },
    {
      icon: 'certificate.svg',
      title: 'Phased Go-Live, Low Shock',
      text: 'Modules are released in waves with parallel running, so staff are not asked to change everything in a single week.',
    },
  ],
  features: {
    eyebrow: 'Modules and Scope',
    heading: 'What a Custom ERP Covers',
    intro:
      'We do not assume you need every module. Selection is driven by where the manual work, the reconciliation effort and the reporting pain currently sit.',
    items: [
      {
        icon: 'inventory.svg',
        title: 'Inventory and Warehousing',
        text: 'Multi-location stock, batch and serial tracking, bin transfers, reorder levels, cycle counts and MRP-ready availability views.',
      },
      {
        icon: 'manufacturing.svg',
        title: 'Production and Manufacturing',
        text: 'Bill of materials, work orders, routing, shop-floor issue and receipt, job costing and rejection capture at each stage.',
      },
      {
        icon: 'pipeline.svg',
        title: 'Purchase and Procurement',
        text: 'Indents, comparative quotations, approval hierarchies, purchase orders, GRN matching and vendor performance tracking.',
      },
      {
        icon: 'customer.svg',
        title: 'Sales and Distribution',
        text: 'Enquiry to quotation to order, price and discount rules, dispatch planning, e-way bill data and outstanding tracking.',
      },
      {
        icon: 'finance.svg',
        title: 'Finance and Statutory Compliance',
        text: 'Chart of accounts, GST returns data, TDS, cost centres, budgets and audit trails that satisfy an external auditor.',
      },
      {
        icon: 'hr.svg',
        title: 'Human Resources and Payroll',
        text: 'Employee master, attendance and leave, shift rules, statutory deductions, salary processing and payslip distribution.',
      },
    ],
  },
  process: {
    eyebrow: 'Implementation Path',
    heading: 'How We Implement and Deliver ERP',
    intro:
      'The first deliverable is not software. It is a signed-off process document that everybody in the room recognises as their own work.',
    steps: [
      { title: 'Process Study and Gap Map', text: 'Current workflows observed on site, exceptions logged, gaps agreed in writing.' },
      { title: 'Module Selection and Design', text: 'Modules, roles and approval hierarchies specified against the mapped process.' },
      { title: 'Configuration and Integration', text: 'Core modules configured, Tally and accounting links wired, reports built.' },
      { title: 'Data Migration and Parallel Run', text: 'Legacy masters and balances loaded, reconciled, then run alongside the old way.' },
      { title: 'Training and Phased Go-Live', text: 'Role-wise training, department-by-department cutover and hypercare support.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope of Work',
    heading: 'What the Engagement Delivers',
    intro:
      'ERP work is only finished when people use it, so documentation and training carry the same weight as the build.',
    items: [
      'As-is process maps with documented exceptions and gaps',
      'Module configuration aligned to approved process documents',
      'Chart of accounts, tax codes and approval hierarchies set up',
      'Tally or accounting system integration for vouchers and ledgers',
      'Legacy data migration with opening balance reconciliation',
      'Role-based dashboards, MIS reports and export formats',
      'User manuals and role-wise training sessions on site',
      'Hypercare support window with a defined escalation path',
    ],
  },
  faqs: {
    eyebrow: 'ERP FAQ',
    heading: 'What Buyers Ask Before an ERP Project',
    items: [
      {
        question: 'Why do so many ERP implementations fail?',
        answer:
          'Three reasons recur. The system is configured for how management wishes the business ran rather than how it runs, so staff quietly revert to spreadsheets. Master data is migrated without reconciliation, so nobody trusts the opening figures. And training is treated as a two-hour demo, when people need to use the system on real transactions before go-live. Each of these is a delivery problem, not a product problem.',
      },
      {
        question: 'Should we buy an off-the-shelf ERP or build custom?',
        answer:
          'Buy off-the-shelf when your processes are close to standard for your industry and you value the vendor ecosystem, updates and trained hires. Build or customise when operations are a genuine competitive advantage, when existing systems must stay, or when licensing scales painfully with user count. Many clients land on a hybrid: a standard core for accounting and payroll, custom modules where the business differs.',
      },
      {
        question: 'How do you migrate data from spreadsheets and old software?',
        answer:
          'We extract masters, transactions and opening balances, clean them with a documented set of rules, then load into a staging instance for validation before anything touches production. Every opening balance is reconciled to the signed-off trial balance, and item-level stock is reconciled to a physical count. Nothing goes live with an unexplained variance, because unexplained variances are what destroy user confidence.',
      },
      {
        question: 'Can the ERP integrate with Tally and our bank?',
        answer:
          'Yes. We build integrations that push vouchers, ledgers and masters between the ERP and Tally so accounts staff are not double-entering. Bank integration covers statement imports and reconciliation matching. Where an API is not available we use structured file exchange with validation checks and an error report, which is less elegant but far more reliable than screen automation.',
      },
      {
        question: 'How long does an ERP implementation take?',
        answer:
          'A single-site manufacturing or trading business with inventory, purchase, sales and finance typically takes four to seven months from process study to full go-live. Adding production planning, payroll or multi-entity consolidation extends that. We deliberately phase the rollout, so the first module is usually live and being used within ten to twelve weeks, which keeps momentum and surfaces problems early.',
      },
      {
        question: 'How much training will our staff need?',
        answer:
          'Training is role-based rather than system-based: a storekeeper learns stock transactions, a purchase officer learns indents and GRN matching, and neither sits through the other sessions. We run hands-on practice in a training instance, leave written manuals per role, and appoint two super users who answer routine questions once we step back. Hypercare support covers the first weeks of live use.',
      },
      {
        question: 'What does ongoing support look like after go-live?',
        answer:
          'After the hypercare window ends, most clients move to a monthly support agreement covering issue resolution, statutory updates such as GST or TDS changes, report amendments and a block of enhancement hours. Response targets are agreed in writing. New modules and major process changes are quoted separately so they do not compete with day-to-day support for attention.',
      },
    ],
  },
  related: [
    { label: 'ERP Solutions', href: '/service/erp' },
    { label: 'CRM Development', href: '/crm-development' },
    { label: 'CRM Services', href: '/service/crm' },
    { label: 'Business Transformation', href: '/business-transformation' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'Custom Website Development', href: '/custom-website-development' },
  ],
}

export default content
