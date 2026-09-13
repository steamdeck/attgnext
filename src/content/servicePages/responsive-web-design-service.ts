import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'responsive-web-design-service',
  route: '/responsive-web-design-service',
  breadcrumbTitle: 'Responsive Web Design Service',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Responsive Web Design Service',
    metaTitle: 'Responsive Web Design Service Packages | AT Tech Global',
    metaDescription:
      'Packaged responsive web design with agreed device coverage, written QA sign-off criteria and fixed revision rounds. Fixed scope, fixed price, clear timeline.',
    keywords:
      'responsive web design service, responsive design packages, mobile responsive website service, responsive design agency, adaptive layout service, device testing service',
    ogTitle: 'Responsive Web Design Service Packages | AT Tech Global',
    ogDescription:
      'Three fixed responsive design tiers with published page counts, device test matrices and revision rounds agreed before build.',
  },
  intro: {
    eyebrow: 'Packaged Responsive Design',
    heading: 'Responsive Web Design Delivered as a Defined Service',
    paragraphs: [
      'Buying responsive design goes wrong when the quote describes an outcome and skips the process. Ours starts with a written service definition: how many breakpoints we test, which browsers we certify, how many revision rounds are included, what a bug report must contain, and the date the files transfer to you. You approve that document before any design work begins.',
      'The work is sold in three tiers so a five-page brochure site and a sixty-template platform are not priced from the same sheet. Each tier publishes its page count, the screens covered, the QA matrix applied, the accessibility checks run and the post-handover window included. Nothing is billed hourly, so a scope change becomes a conversation rather than a surprise invoice at the end.',
    ],
  },
  highlights: [
    {
      icon: 'responsive.svg',
      title: 'Three Published Tiers',
      text: 'Essential, Professional and Enterprise packages, each listing page counts, revision rounds and the QA coverage it carries.',
    },
    {
      icon: 'certificate.svg',
      title: 'Written QA Sign-Off',
      text: 'You receive a device and browser test matrix with a pass or fail result recorded against every template before launch.',
    },
    {
      icon: 'watch.svg',
      title: 'Timelines You Can Plan Around',
      text: 'Design, build and QA windows are agreed in the proposal, and a staging link is available from the first week.',
    },
  ],
  features: {
    eyebrow: 'Package Inclusions',
    heading: 'What Every Responsive Design Tier Includes',
    intro:
      'Tier differences come down to scale and assurance, never to withheld basics. Every package ships with the six items below.',
    items: [
      {
        icon: 'mobile.svg',
        title: 'Fluid Layout System',
        text: 'Grids, type scales and spacing built on relative units, so layouts adapt continuously instead of snapping between sizes.',
      },
      {
        icon: 'responsive.svg',
        title: 'Tested Breakpoint Set',
        text: 'Layouts verified at 320, 375, 414, 768, 1024, 1280, 1440 and 1920 pixels, plus both landscape orientations.',
      },
      {
        icon: 'performance.svg',
        title: 'Weight Budget Per View',
        text: 'Each template carries an image and script budget, measured on a throttled mobile profile before it is released.',
      },
      {
        icon: 'technical.svg',
        title: 'Accessibility Passes',
        text: 'Keyboard traversal, focus order, contrast ratios and touch target sizes are reviewed on every single template.',
      },
      {
        icon: 'checkmark.svg',
        title: 'Structured Revision Rounds',
        text: 'Feedback for each round is consolidated into one annotated list, so comments arrive once rather than in scattered emails.',
      },
      {
        icon: 'support.svg',
        title: 'Handover Pack',
        text: 'A component library, breakpoint documentation and a recorded walkthrough are delivered when the build closes.',
      },
    ],
  },
  process: {
    eyebrow: 'Delivery Stages',
    heading: 'From Signed Proposal to Handover',
    intro:
      'The service runs on a five-stage plan with a fixed number of review points, so your team knows exactly when its input is needed.',
    steps: [
      { title: 'Scope Lock', text: 'Templates, tier and revision rounds are confirmed in a signed service schedule.' },
      { title: 'Design and Approval', text: 'Mobile, tablet and desktop layouts are designed together, not patched afterwards.' },
      { title: 'Build and Componentise', text: 'Approved screens become reusable components with documented breakpoint behaviour.' },
      { title: 'Device QA', text: 'Real handsets, tablets and browsers are tested against the agreed pass criteria.' },
      { title: 'Credential Transfer and Warranty', text: 'Files, documentation and credentials transfer, and the support window starts.' },
    ],
  },
  deliverables: {
    eyebrow: 'Deliverable List',
    heading: 'What Arrives at Handover',
    intro:
      'Every tier is a fixed price against a fixed deliverable list. Here is exactly what lands with your team when the engagement ends.',
    items: [
      'Responsive design files for every agreed template',
      'Component library with breakpoint rules documented',
      'Device and browser QA matrix with a result per screen',
      'Accessibility checklist with reported issues resolved',
      'Image and font optimisation inside the weight budget',
      'Staging site with review links for each revision round',
      'Recorded walkthrough of the responsive system',
      'Thirty days of post-handover defect cover',
    ],
  },
  faqs: {
    eyebrow: 'Service Questions, Answered',
    heading: 'Responsive Web Design Service FAQ',
    items: [
      {
        question: 'What counts as one revision round?',
        answer:
          'A round is one consolidated set of comments returned within five working days of a review link. We apply those changes and send the next link. Comments spread across several emails, or sent after the round closes, are grouped into the following round, which keeps the timeline predictable for both sides.',
      },
      {
        question: 'Which devices and browsers do you certify?',
        answer:
          'The QA matrix covers current and previous major versions of Chrome, Safari, Firefox and Edge, plus Samsung Internet on Android. Physical testing runs on representative handsets between 320 and 430 pixels wide. Anything outside that list, such as a kiosk browser, is quoted as an add-on.',
      },
      {
        question: 'What happens if a defect appears after handover?',
        answer:
          'Responsive defects are fixed at no cost during the thirty-day window, provided the tested device list has not changed. New content, added templates or browser versions released after handover sit outside that cover and are handled under a monthly support plan.',
      },
      {
        question: 'Do you design desktop first or mobile first?',
        answer:
          'We design from the smallest width upward, then expand. Starting at mobile forces content priority decisions early, which usually removes whole sections that would otherwise be squeezed into a phone layout later. Desktop views are assembled from the same component set rather than designed separately.',
      },
      {
        question: 'Can you take over a site another agency built?',
        answer:
          'Yes, and it normally begins with a responsive audit. We document what breaks, which breakpoints are missing and what a fix would cost, then quote either targeted remediation or a rebuild. You keep the audit findings whether or not you proceed with the work.',
      },
      {
        question: 'How long does a tier usually take?',
        answer:
          'Essential tier work runs two to three weeks, Professional four to six weeks, and Enterprise builds are planned in phases with dated release windows. Content readiness and the speed of feedback affect the timeline far more than the raw number of templates involved.',
      },
      {
        question: 'Is content work included in the package?',
        answer:
          'Layout and typography are always included. Writing, photography and translation are separate lines so you can supply your own or add them to the scope. When you supply copy, we place it and flag anything likely to overflow on a small screen before the build starts.',
      },
    ],
  },
  related: [
    { label: 'Responsive Website Design', href: '/responsive-website-design' },
    { label: 'Responsive Website Design in Gurgaon', href: '/responsive-website-design-gurgaon' },
    { label: 'Mobile Friendly Website', href: '/mobile-friendly-website' },
    { label: 'Website Design Service', href: '/website-design-service' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
    { label: 'Pricing', href: '/pricing' },
  ],
}

export default content
