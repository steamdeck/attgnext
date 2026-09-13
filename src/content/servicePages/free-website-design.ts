import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'free-website-design',
  route: '/free-website-design',
  breadcrumbTitle: 'Free Website Design',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Free Website Design',
    metaTitle: 'Free Website Design & Consultation | AT Tech Global',
    metaDescription:
      'Start with a free design consultation, a homepage concept and a starter layout. See exactly what costs nothing, what you pay for and why we can afford it.',
    keywords:
      'free website design, free web design consultation, free homepage concept, no cost website design, free design mockup, free website layout',
    ogTitle: 'Free Website Design & Consultation | AT Tech Global',
    ogDescription:
      'A free consultation, homepage concept and starter layout from a Gurgaon and Leicester design studio. No obligation and no hidden retainer.',
  },
  intro: {
    eyebrow: 'Free Website Design',
    heading: 'See Real Design Work Before You Spend Anything',
    paragraphs: [
      'Most people searching for free website design are asking a practical question: how much can I see before I pay anything? Our answer is deliberately specific. You receive a design consultation, one homepage concept built around your own brand, and a starter inner-page layout at no cost, so you can judge the standard of our work against your brief before an invoice even exists.',
      'Everything past that first concept is paid work, and we state that plainly instead of burying it in a proposal. Domain registration, hosting, premium plugins, stock photography, copywriting and ongoing changes are billed at normal rates. The free stage exists to remove guesswork from your decision, so you commission a build you have already seen rather than a promise on a slide.',
    ],
  },
  highlights: [
    {
      icon: 'bulb.svg',
      title: 'Free Design Consultation',
      text: 'A 30-minute session where we map your goals, audience and page structure before any commercial commitment is made.',
    },
    {
      icon: 'template.svg',
      title: 'A Real Homepage Concept',
      text: 'Not a sketch. You receive one designed homepage concept for your own brand, copy and imagery, delivered within three working days.',
    },
    {
      icon: 'cost.svg',
      title: 'Transparent Paid Scope',
      text: 'A written list of what sits outside the free stage, covering domain, hosting, content and premium features, with prices attached.',
    },
  ],
  features: {
    eyebrow: 'What Comes Free',
    heading: 'The Exact Boundary Between Free and Paid',
    intro:
      'The free stage is genuine production work rather than a sales gimmick. Here is what it includes, and the precise point where paid work begins.',
    items: [
      {
        icon: 'comment.svg',
        title: 'Discovery Call',
        text: 'We review your current site, your competitors and the keywords that matter, then agree what the free design has to prove.',
      },
      {
        icon: 'ux-ui.svg',
        title: 'Homepage Concept',
        text: 'One full-width homepage concept designed around your brand, shared as a reviewable link rather than a flat image.',
      },
      {
        icon: 'template.svg',
        title: 'Starter Page Layout',
        text: 'A reusable inner-page layout showing hero, content blocks, calls to action and footer, so the whole site becomes easy to picture.',
      },
      {
        icon: 'responsive.svg',
        title: 'Mobile Preview',
        text: 'Every concept is previewed at 390px, 768px and 1440px so you can see how the layout reflows before you commit.',
      },
      {
        icon: 'dollar_currency.svg',
        title: 'Itemised Quote',
        text: 'A fixed-price proposal for the full build, listing pages, features and content responsibilities line by line.',
      },
      {
        icon: 'support.svg',
        title: 'No Obligation',
        text: 'If the concept is not right, you keep it and owe nothing. We do not hold design files back behind a signed contract.',
      },
    ],
  },
  process: {
    eyebrow: 'How The Free Stage Works',
    heading: 'From First Call to a Concept You Can Keep',
    intro:
      'The free stage runs on a short, fixed schedule so you are never left waiting to find out whether we are a fit.',
    steps: [
      { title: 'Free Discovery Call', text: 'A short call to understand your business, audience and the pages you need.' },
      { title: 'Concept in Three Days', text: 'We design one homepage concept around your brand, content and goals.' },
      { title: 'Walkthrough and Feedback', text: 'You review the concept on desktop and mobile and tell us what to change.' },
      { title: 'Fixed-Price Proposal', text: 'We quote the full build, with anything outside the free stage priced clearly.' },
      { title: 'Build or Walk Away', text: 'Approve the quote to start production, or keep the concept and stop there.' },
    ],
  },
  deliverables: {
    eyebrow: 'Free Stage Output',
    heading: 'What You Receive at No Cost',
    intro:
      'Nothing here is conditional on signing anything. These items are yours whether or not you go on to commission the build.',
    items: [
      'One designed homepage concept built around your own brand',
      'A starter inner-page layout showing content and footer blocks',
      'Mobile, tablet and desktop previews of that concept',
      'A written scope listing page count and required functionality',
      'An itemised, fixed-price quote for the paid build',
      'A list of third-party costs you would pay directly',
      'Keyword and competitor notes from the discovery call',
      'A recommended timeline from approval through to launch',
    ],
  },
  faqs: {
    eyebrow: 'Questions Before You Start',
    heading: 'Free Website Design, Answered Honestly',
    items: [
      {
        question: 'Is there a catch with free website design?',
        answer:
          'There is no hidden charge, but there is a business model. The free concept costs us a few hours of designer time, and roughly a third of the businesses who see it commission the full build. We would rather spend that time showing real work than sending cold proposals. If you never buy anything, we have lost a few hours and you have lost nothing.',
      },
      {
        question: 'What exactly is free and what is not?',
        answer:
          'Free means the consultation, one homepage concept for your brand, a starter inner-page layout and the quote. Paid means everything needed to run a live site: domain registration, hosting, SSL certificates, premium plugins, stock imagery, content writing, page production beyond the agreed scope, and any changes after launch.',
      },
      {
        question: 'Who is eligible for the free design stage?',
        answer:
          'We offer it to businesses and organisations with a genuine project in mind, a rough budget for the build, and a decision maker involved in the conversation. We do not run free concepts for spec competitions, for students practising briefs, or for agencies reselling design work under their own name.',
      },
      {
        question: 'How long does the free stage take?',
        answer:
          'The discovery call is booked within a couple of working days of your enquiry. The homepage concept follows within three working days of that call, and the fixed-price proposal arrives within one working day of your feedback. In most cases you are looking at roughly a week from first contact to a decision.',
      },
      {
        question: 'Do I own the free concept if I do not hire you?',
        answer:
          'Yes. The concept file, the exported previews and any copy written for it are yours to keep. You are free to take them to another studio, though we would ask that you do not present the work as your own design portfolio. We keep a copy only for our internal records.',
      },
      {
        question: 'What happens after I approve the quote?',
        answer:
          'The concept becomes the design foundation. We extend it into the remaining page templates, build the site, load your content, run cross-browser and device testing, then launch with analytics and SSL configured. Payment is staged across milestones rather than taken up front in one lump.',
      },
      {
        question: 'Do you offer free design for ecommerce or large portals?',
        answer:
          'The free stage is designed for brochure, service and portfolio websites of roughly five to thirty pages. For ecommerce stores, membership portals or custom applications, the scoping work is far heavier, so we start with a paid discovery workshop instead and credit its cost against the build if you proceed.',
      },
    ],
  },
  related: [
    { label: 'Website Designing', href: '/website-designing' },
    { label: 'Portfolio Website Design', href: '/portfolio-website-design' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Free Web Design in Gurgaon', href: '/gurgaon-free-web-design' },
    { label: 'Website Maintenance', href: '/website-maintenance' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default content
