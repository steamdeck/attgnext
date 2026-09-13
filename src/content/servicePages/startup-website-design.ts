import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'startup-website-design',
  route: '/startup-website-design',
  breadcrumbTitle: 'Startup Website Design',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Startup Website Design',
    metaTitle: 'Startup Website Design for Founders | AT Tech Global',
    metaDescription:
      'Website design for founders and early-stage startups. Launch in weeks on a lean budget, prove traction, and scale from MVP to Series A without a rebuild.',
    keywords:
      'startup website design, website design for startups, lean startup website, investor ready website, mvp website design, launch fast website',
    ogTitle: 'Startup Website Design Services | AT Tech Global',
    ogDescription:
      'A credible founder website in two to three weeks, built on an architecture that survives your first funding round.',
  },
  intro: {
    eyebrow: 'Built for Founders',
    heading: 'A Startup Website That Earns Trust Before You Have Scale',
    paragraphs: [
      'A founder usually arrives with two conflicting deadlines. The product needs users this month, and an investor or enterprise buyer will research the company tonight. Those two pressures pull a website in opposite directions, towards shipping something scrappy immediately and towards looking established enough to be taken seriously. Getting this wrong is expensive, because a site that is too thin loses deals and a site built for a company you have not become yet gets thrown away within a year.',
      'We resolve that tension by separating what must be perfect from what only needs to exist. Positioning, headline, proof and the core conversion path are treated as permanent assets. Secondary pages, blog scaffolding and integration depth start deliberately thin, then grow as traffic and revenue justify them. The result is a launch-ready site in two to four weeks that shares one design system, one codebase and one analytics setup with whatever you build next.',
    ],
  },
  highlights: [
    {
      icon: 'speed.svg',
      title: 'Live in Two to Four Weeks',
      text: 'A founder-led content sprint removes the usual approval queue, so the site goes up while your pitch deck is still warm.',
    },
    {
      icon: 'trust.svg',
      title: 'Credibility Beyond the Deck',
      text: 'Clear positioning, founder detail, real screenshots and social proof that hold up when a buyer checks you out.',
    },
    {
      icon: 'scalable.svg',
      title: 'No Rebuild at Series A',
      text: 'Components, content models and page templates expand into new markets and languages without starting from scratch.',
    },
  ],
  features: {
    eyebrow: 'Startup Priorities',
    heading: 'What We Get Right for Early-Stage Teams',
    intro:
      'Startup websites fail for predictable reasons. Each of these items addresses one of them directly.',
    items: [
      {
        icon: 'strategy.svg',
        title: 'Positioning in One Sentence',
        text: 'We workshop the headline until a stranger can repeat what you do after reading it once, without a category lecture.',
      },
      {
        icon: 'bulb.svg',
        title: 'Explaining a New Category',
        text: 'For products nobody has searched for yet, we use familiar analogies, before-and-after framing and concrete examples.',
      },
      {
        icon: 'leads.svg',
        title: 'One Primary Conversion',
        text: 'Demo booking, waitlist signup or trial start, chosen deliberately. Competing calls to action split a small traffic pool.',
      },
      {
        icon: 'analytics.svg',
        title: 'Validation Instrumentation',
        text: 'Event tracking on signup steps and pricing views so you learn where interest dies before you spend on advertising.',
      },
      {
        icon: 'custom.svg',
        title: 'Lean but not Cheap Looking',
        text: 'Strong typography, generous spacing and consistent components make a small site feel funded rather than improvised.',
      },
      {
        icon: 'pipeline.svg',
        title: 'Room to Grow',
        text: 'A CMS and design system that absorb new pages, pricing tiers, integrations and localisation as the company changes.',
      },
    ],
  },
  process: {
    eyebrow: 'How We Launch',
    heading: 'From Kickoff to Live Site in Weeks',
    intro:
      'Two short loops, one to decide the story and one to build it, with a working preview link from the first week onwards.',
    steps: [
      { title: 'Founder Positioning Session', text: 'Two hours to settle audience, problem, promise and the single conversion goal.' },
      { title: 'Message Map and Wireframes', text: 'Every section earns its place by answering a question your buyer actually has.' },
      { title: 'Design One Page Well', text: 'The home page is designed and approved before the rest of the system scales.' },
      { title: 'Build With Real Content', text: 'Development runs against your written copy, never lorem ipsum placeholders.' },
      { title: 'Launch, Measure, Extend', text: 'Analytics and search setup go live, then we plan the next pages from real data.' },
    ],
  },
  deliverables: {
    eyebrow: 'What You Get',
    heading: 'The Startup Launch Package',
    intro:
      'Scope is fixed before we begin, which suits runway planning and means no invoices arrive halfway through the build.',
    items: [
      'Positioning and messaging document you keep forever',
      'Design system with reusable components and states',
      'Home, product, pricing, about, contact and blog pages',
      'Editable CMS so founders can publish without a developer',
      'Analytics, conversion events and Search Console setup',
      'Pitch-deck aligned visuals and product mockups',
      'Speed, accessibility and SEO pass completed before launch',
      'Deployment, domain and SSL configured for you',
    ],
  },
  faqs: {
    eyebrow: 'Founder Questions',
    heading: 'Startup Website Design FAQ',
    items: [
      {
        question: 'How fast can we realistically launch?',
        answer:
          'Two weeks is achievable for a focused marketing site when the founder is available for two working sessions and copy decisions come back within a day. Four weeks is the comfortable pace for a site with a blog, a pricing comparison and a product tour. The single biggest delay is almost always waiting on written content and logo assets, not design or code.',
      },
      {
        question: 'We are pre-product. Do we need a website at all?',
        answer:
          'You need less than you think, but you need something. A single well-argued page with a clear promise, a short explainer and a waitlist form will outperform an elaborate site built before you know who is buying. It gives investors a link to click and gives you a measurable signal about whether the problem resonates.',
      },
      {
        question: 'How do we avoid rebuilding everything after raising a round?',
        answer:
          'Keep the design system and content model separate from the pages themselves. When components, typography, colour and spacing live in a shared system and copy lives in a CMS, adding a careers page, a documentation hub or three new pricing tiers is assembly rather than redesign. Rebuilds happen when a site is hardcoded page by page.',
      },
      {
        question: 'What should a startup spend on its first website?',
        answer:
          'Spend enough to look credible and no more. Your first site is a hypothesis testing tool, so budget for the core pages plus analytics, and keep reserve for the redesign you will genuinely want once you understand your buyer. Founders who overspend early often cannot fund the iteration that actually produces inbound leads.',
      },
      {
        question: 'Can the site support a self-serve trial or demo booking?',
        answer:
          'Yes. We integrate Calendly or HubSpot meetings for demo-led sales, Stripe for self-serve checkout, or your existing product signup flow through an API. What matters is that the handoff between marketing site and product is gapless, because every extra field or redirect between interest and first use costs conversions.',
      },
      {
        question: 'How do we explain a product in a category nobody searches for?',
        answer:
          'Lead with the problem in plain language, then name your category afterwards. Use an analogy to something the reader already understands, show a concrete before-and-after of their working day, and place real screenshots above the fold. Naming a new category first forces visitors to learn vocabulary before they can decide whether they care.',
      },
      {
        question: 'Who writes the website copy?',
        answer:
          'Either you supply drafts and we sharpen them, or we interview you and write from the transcript. Most founders find the interview route faster because their answers already contain the language customers use. You always review and approve final wording, and we structure it so headings can be changed later without redesigning anything.',
      },
    ],
  },
  related: [
    { label: 'Website Designing', href: '/website-designing' },
    { label: 'Custom Website Development', href: '/custom-website-development' },
    { label: 'Business Profile Design', href: '/business-profile-design' },
    { label: 'CMS Development', href: '/cms-development' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'SEO Services', href: '/seo-services' },
  ],
}

export default content
