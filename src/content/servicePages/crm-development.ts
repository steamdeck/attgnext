import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'crm-development',
  route: '/crm-development',
  breadcrumbTitle: 'CRM Development',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'CRM Development',
    metaTitle: 'Custom CRM Development Company in India | AT Tech Global',
    metaDescription:
      'Custom CRM development shaped around how your team already sells. Lead pipelines, automation, WhatsApp and telephony, reporting and safe data migration.',
    keywords:
      'crm development, custom crm software, crm development company, sales automation, crm integration, crm migration',
    ogTitle: 'Custom CRM Development Company | AT Tech Global',
    ogDescription:
      'A CRM engineered around your sales process, so your team keeps the deals and the data.',
  },
  intro: {
    eyebrow: 'CRM Development',
    heading: 'A CRM Built Around Your Sales Process, Not A Template',
    paragraphs: [
      'Most sales teams do not have a selling problem, they have a record-keeping problem. Deals sit in WhatsApp threads, a spreadsheet on one laptop and an inbox nobody else can search. When a salesperson moves on, the history moves with them. A CRM fitted to your process fixes that: every enquiry arrives in one place with an owner, a stage and the next action already scheduled.',
      'AT Tech Global builds custom CRM software from our Gurgaon studio, with a UK presence in Leicester. We begin by mapping how your team qualifies, quotes and closes, then configure pipelines, fields, permissions and reminders to match. The codebase and the database belong to you at handover, so customer records are never locked inside a subscription you cannot leave.',
    ],
  },
  highlights: [
    {
      icon: 'pipeline.svg',
      title: 'Pipelines That Mirror Reality',
      text: 'Stages, probabilities and exit rules are modelled on the way your team already closes deals, so adoption happens fast.',
    },
    {
      icon: 'leads.svg',
      title: 'No Enquiry Left Behind',
      text: 'Every form, call and message becomes a tracked lead with an owner, a timestamp and an automatic follow-up reminder.',
    },
    {
      icon: 'security.svg',
      title: 'Your Data, Your Database',
      text: 'Source code, schema and exports are handed over at launch, so your customer history never depends on a vendor renewal.',
    },
  ],
  features: {
    eyebrow: 'Inside The Build',
    heading: 'Sales Capability We Engineer Into Every CRM',
    intro:
      'Custom CRM development means the software follows your process instead of forcing your team to invent workarounds.',
    items: [
      {
        icon: 'custom.svg',
        title: 'Tailored Pipeline Design',
        text: 'Configurable stages, deal values, custom fields, territory rules and win-loss reasons built around your own qualification criteria.',
      },
      {
        icon: 'automation.svg',
        title: 'Sales Automation & Reminders',
        text: 'Round-robin or territory assignment, scheduled follow-up tasks, SLA timers and escalation when an opportunity goes quiet.',
      },
      {
        icon: 'comment.svg',
        title: 'Activity & Conversation History',
        text: 'Calls, emails, meeting notes and attachments sit on one contact timeline, so any teammate can pick up the thread safely.',
      },
      {
        icon: 'whatsapp.svg',
        title: 'Email, WhatsApp & Telephony',
        text: 'Two-way mailbox sync, WhatsApp Business templates and click-to-call with call recordings and disposition codes logged.',
      },
      {
        icon: 'finance.svg',
        title: 'Quotations & Follow-Up Sequences',
        text: 'Branded quote templates, PDF approvals, revision tracking and multi-step follow-ups that stop the moment a reply lands.',
      },
      {
        icon: 'analytics.svg',
        title: 'Management Reporting',
        text: 'Live dashboards for funnel conversion, rep activity, ageing deals and weighted forecast, all filterable by team or region.',
      },
    ],
  },
  process: {
    eyebrow: 'Delivery Path',
    heading: 'How A Custom CRM Gets Built',
    intro:
      'CRM projects fail when they start with screens. Ours start with your sales motion and work outward from there.',
    steps: [
      { title: 'Sales Process Audit', text: 'Workshops with your team to document stages, handoffs and the reports managers ask for.' },
      { title: 'Data Model & Wireframes', text: 'Entities, fields and role permissions agreed, then screen wireframes signed off.' },
      { title: 'Build & Integrate', text: 'Pipelines, automation, email, WhatsApp and telephony wired up in two-week sprints.' },
      { title: 'Migrate & Cleanse', text: 'Spreadsheet and legacy CRM exports de-duplicated, loaded and verified with rollback.' },
      { title: 'Train & Tune', text: 'Team training, adoption tracking and a 60-day tuning window once the system goes live.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope',
    heading: 'What a Custom CRM Engagement Delivers',
    intro:
      'Custom CRM engagements are quoted as a fixed scope with a written specification, so there are no surprise invoices mid-build.',
    items: [
      'Discovery document covering stages, roles and approval flows',
      'Custom database schema with a documented REST API',
      'Responsive CRM interface with granular role permissions',
      'Lead capture from website forms, landing pages and call tracking',
      'Email, WhatsApp Business and telephony integrations',
      'Quotation builder with follow-up and reminder automation',
      'Manager dashboard with exportable funnel and forecast views',
      'Migration of spreadsheet or legacy CRM records with validation logs',
    ],
  },
  faqs: {
    eyebrow: 'Questions Buyers Ask',
    heading: 'CRM Development FAQ',
    items: [
      {
        question: 'How long does custom CRM development take?',
        answer:
          'A focused sales CRM covering leads, pipelines, quotations and reporting typically takes eight to twelve weeks from kick-off. Adding telephony, WhatsApp, inventory links or multi-branch permissions usually pushes that to four or five months. We release in sprints so your team is testing real screens from week four rather than waiting for a single launch date.',
      },
      {
        question: 'Can you migrate us off Zoho, Salesforce or a spreadsheet?',
        answer:
          'Yes. We export your existing records, decide which fields genuinely matter, merge duplicates and map old statuses onto the new pipeline. Migration runs into a staging database first so you can compare counts and spot gaps before anything touches production. Historical attachments and notes come across wherever the source platform allows an API or bulk export.',
      },
      {
        question: 'Who owns the CRM code and the customer data?',
        answer:
          'You do. The repository, database and hosting account are transferred to your name at handover, and we document the deployment so another team could maintain it. There is no per-seat licence and no lock-in clause. If you later want to move to an off-the-shelf product, you can export every record in standard formats.',
      },
      {
        question: 'Will the CRM work on phones and tablets?',
        answer:
          'Every CRM we build is responsive, and field sales teams get a mobile layout with large tap targets, offline-tolerant forms and one-tap calling. Where a rep genuinely needs a device app we can wrap the same backend in a React Native shell so both channels share one database and one set of business rules.',
      },
      {
        question: 'How do you handle WhatsApp and telephony integration?',
        answer:
          'WhatsApp runs through the official Business API, which gives you template messages, delivery receipts and a shared team inbox instead of a personal phone. For calls we connect your existing provider or a cloud telephony vendor so dialling, recordings and call outcomes are written straight onto the contact record with no manual logging.',
      },
      {
        question: 'What stops our team ignoring the CRM?',
        answer:
          'Bloat. We remove fields nobody fills, pre-fill what the system already knows, and automate the data entry that people resent. Reminders appear where the work happens, mobile entry takes seconds, and managers get their reports without chasing anyone. Adoption is tracked in the first sixty days and screens are trimmed wherever usage drops.',
      },
      {
        question: 'What happens after the CRM goes live?',
        answer:
          'You get a support window for bug fixes, plus optional maintenance covering backups, security patches, small workflow changes and new reports. Most clients start with a monthly block of change hours rather than a large retainer, and we review usage quarterly so the roadmap follows real bottlenecks instead of wish lists.',
      },
    ],
  },
  related: [
    { label: 'ERP Development', href: '/service/erp-development' },
    { label: 'CRM Solutions', href: '/service/crm' },
    { label: 'SaaS Development', href: '/saas-development' },
    { label: 'WhatsApp Marketing', href: '/service/whatsapp-marketing' },
    { label: 'Business Transformation', href: '/business-transformation' },
    { label: 'Talk To Us', href: '/contact' },
  ],
}

export default content
