import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'custom-website-development',
  route: '/custom-website-development',
  breadcrumbTitle: 'Custom Website Development',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Custom Website Development',
    metaTitle: 'Custom Website Development Company | AT Tech Global',
    metaDescription:
      'Bespoke website development built around your business logic, with discovery, a written scope, system integrations and full code ownership at handover.',
    keywords:
      'custom website development, bespoke web development, custom web application development, custom cms development, api integration services, web development company gurgaon',
    ogTitle: 'Custom Website Development Company | AT Tech Global',
    ogDescription:
      'Discovery-led bespoke development for workflows that off-the-shelf platforms cannot express without a fight.',
  },
  intro: {
    eyebrow: 'Custom Web Development',
    heading: 'Bespoke Development for Rules a Template Cannot Hold',
    paragraphs: [
      'Off-the-shelf platforms are excellent value right up to the point where your business does something slightly unusual. Then you start paying plugin licence fees, stacking workarounds and explaining to customers why the checkout behaves oddly. Custom development exists for those cases, and it starts with writing down how the business actually works before anyone opens an editor.',
      'We have built bespoke web systems since 2010, from quoting engines and booking platforms to ERP and CRM portals, from a studio in Gurugram with a UK presence in Leicester. Every project begins with discovery and a signed scope, so the price, the timeline and the acceptance criteria are agreed while changes are still cheap to make rather than mid-build.',
    ],
  },
  highlights: [
    {
      icon: 'strategy.svg',
      title: 'Discovery Before Code',
      text: 'Workshops, user flows and a written specification are agreed and signed off before development begins.',
    },
    {
      icon: 'trust.svg',
      title: 'The Code Is Yours',
      text: 'Repositories, licences and cloud accounts sit in your name, with no platform holding your site hostage.',
    },
    {
      icon: 'checkmark.svg',
      title: 'Told When a Template Wins',
      text: 'If a standard platform genuinely fits your budget and roadmap, we will say so before sending any quote.',
    },
  ],
  features: {
    eyebrow: 'Build Capabilities',
    heading: 'What Custom Development Actually Covers',
    intro:
      'The list below is the substance behind the phrase bespoke software, and each item is priced in the written scope.',
    items: [
      {
        icon: 'strategy.svg',
        title: 'Discovery and Requirements',
        text: 'Stakeholder interviews, current workaround mapping and a documented specification with testable acceptance criteria.',
      },
      {
        icon: 'custom.svg',
        title: 'Custom Features and Logic',
        text: 'Quoting rules, tiered pricing, booking availability, approval chains and workflows coded around how you really operate.',
      },
      {
        icon: 'pipeline.svg',
        title: 'System and API Integration',
        text: 'ERP, CRM, accounting, payment, courier and marketing tools connected through documented, monitored interfaces.',
      },
      {
        icon: 'scalable.svg',
        title: 'Architecture and Scalability',
        text: 'Modular code, sensible caching and hosting sized for the next three years rather than launch-week traffic.',
      },
      {
        icon: 'business.svg',
        title: 'Ownership and Handover',
        text: 'Your repository, your licences, your cloud accounts, plus architecture notes and a recorded admin walkthrough.',
      },
      {
        icon: 'cost.svg',
        title: 'Long-Term Cost of Ownership',
        text: 'Fewer licences and fewer plugins keep the five-year running cost visible and usually far lower than assumed.',
      },
    ],
  },
  process: {
    eyebrow: 'Delivery Model',
    heading: 'How a Bespoke Build Is Delivered',
    intro:
      'The sequence keeps uncertainty in the early, inexpensive stages and out of the build.',
    steps: [
      { title: 'Discovery Workshops', text: 'We interview the people who will use the system daily and map their current workarounds.' },
      { title: 'Specification and Estimate', text: 'A written scope, wireframes and a fixed or phased price are agreed before build starts.' },
      { title: 'Design and Prototype', text: 'Key screens become a clickable prototype so feedback arrives before development does.' },
      { title: 'Build and Fortnightly Reviews', text: 'Work ships to a staging environment every two weeks for your review and comment.' },
      { title: 'Launch, Handover, Support', text: 'Deployment, documentation, admin training and an optional care plan run at go-live.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope of Work',
    heading: 'What You Own at the End of the Project',
    intro:
      'Handover is treated as a deliverable in its own right, not as the week everyone gets too busy to document things.',
    items: [
      'Discovery notes and documented user journeys',
      'Written specification with acceptance criteria',
      'Responsive interface design for every key screen',
      'Custom application code in your own repository',
      'Third-party integrations with documented interfaces',
      'Staging environment and deployment pipeline',
      'Architecture documentation and recorded training',
      'Post-launch warranty and optional care plan',
    ],
  },
  faqs: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Custom Development Questions Worth Asking',
    items: [
      {
        question: 'Why does custom development cost more upfront?',
        answer:
          'A template spreads its development cost across thousands of buyers, so you pay a licence fee for someone else adapting generic assumptions. Custom work funds design, engineering and testing for your case alone. That premium buys fewer compromises, no plugin stack, and a running cost you control rather than a subscription that rises as you grow.',
      },
      {
        question: 'When is a template or website builder the better choice?',
        answer:
          'When your process is standard and your budget is tight. A brochure site, a simple booking page or a first online store is usually served perfectly well by an established platform at a fraction of the cost. We say this to prospects regularly, and sometimes we build the template site instead and revisit custom work later.',
      },
      {
        question: 'Who owns the code when the project finishes?',
        answer:
          'You do. The repository, the deployment configuration, the database and the third-party accounts all sit in your organisation, and we transfer access at handover. Nothing in our contracts restricts you from taking the codebase to another team, and no runtime licence ties the application to our servers.',
      },
      {
        question: 'How long does a bespoke website take to build?',
        answer:
          'A focused custom brochure or portal build typically takes eight to twelve weeks from approved specification. Systems with complex workflows, multiple integrations or migration from legacy data usually run three to six months. Discovery and specification take two to three weeks on their own and are the stage that determines how smoothly everything else goes.',
      },
      {
        question: 'Can you integrate with the ERP or CRM we already use?',
        answer:
          'Usually yes, provided the system exposes an API, a database view or a supported import format. We review the integration options during discovery and flag any licence, rate limit or vendor approval requirement before quoting. Where no API exists, we propose a pragmatic alternative such as scheduled file exchange rather than pretending it is simple.',
      },
      {
        question: 'What happens to change requests during the build?',
        answer:
          'Small adjustments inside the agreed intent are absorbed. Anything that changes scope is documented with an impact on cost and date, then approved by you before work continues. That prevents the two failure modes this industry is known for: silent scope creep that delays launch, and an agency refusing reasonable small changes mid-project.',
      },
      {
        question: 'Do we have to buy maintenance from you after launch?',
        answer:
          'No. We hand over documentation, credentials and environment notes so any competent team can take over. Many clients do keep a care plan because monitoring, patching and dependency updates still need an owner, but it is a choice with an exit rather than a condition of using the software.',
      },
    ],
  },
  related: [
    { label: 'CMS Development', href: '/cms-development' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'SaaS Development', href: '/saas-development' },
    { label: 'Website Redesigning', href: '/website-redesigning' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default content
