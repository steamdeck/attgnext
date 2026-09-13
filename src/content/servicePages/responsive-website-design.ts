import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'responsive-website-design',
  route: '/responsive-website-design',
  breadcrumbTitle: 'Responsive Website Design',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Responsive Website Design',
    metaTitle: 'Responsive Website Design Company | AT Tech Global',
    metaDescription:
      'Fluid grids, sensible breakpoints, responsive typography and real-device testing. Responsive website design built by AT Tech Global in Gurgaon and Leicester.',
    keywords:
      'responsive website design, fluid grid design, breakpoint strategy, responsive typography, mobile first design, adaptive web design',
    ogTitle: 'Responsive Website Design Company | AT Tech Global',
    ogDescription:
      'One codebase that reflows cleanly from 320px phones to ultrawide monitors, tested on real devices and at 200 percent zoom.',
  },
  intro: {
    eyebrow: 'Responsive Website Design',
    heading: 'One Codebase That Reflows on Every Screen',
    paragraphs: [
      'A responsive website is not a desktop layout squeezed onto a phone. It is a single codebase that reshapes itself as the viewport changes: grids collapse into columns, images swap to smaller crops, navigation folds into a menu, and type scales with the screen. That behaviour is a construction problem, and it is solved in the CSS long before anyone opens a device.',
      'Our responsive website design service covers the whole technique stack — fluid grids, flexible media, a deliberate breakpoint strategy, responsive typography and a genuine device test matrix. We also treat zoom and reflow as first-class requirements, because a layout that falls apart at 200 percent zoom fails accessibility guidance and loses a meaningful share of your audience.',
    ],
  },
  highlights: [
    {
      icon: 'responsive.svg',
      title: 'Fluid, Not Fixed',
      text: 'Layouts are built on relative units and modern CSS grid, so they adapt continuously instead of jumping between hard widths.',
    },
    {
      icon: 'mobile.svg',
      title: 'Breakpoints With Reasons',
      text: 'Breakpoints sit where your content genuinely breaks, chosen from the design and real analytics rather than a generic device list.',
    },
    {
      icon: 'assessment.svg',
      title: 'Tested on Real Hardware',
      text: 'We check the finished build on physical Android and iOS handsets, a tablet, and current Chrome, Safari, Firefox and Edge builds.',
    },
  ],
  features: {
    eyebrow: 'The Technique Stack',
    heading: 'How a Responsive Build Actually Holds Together',
    intro:
      'Responsiveness is not a setting you switch on. These are the six disciplines that decide whether a layout survives contact with real screens.',
    items: [
      {
        icon: 'responsive.svg',
        title: 'Fluid Grid Systems',
        text: 'CSS grid, flexbox and relative units create layouts that stretch and reflow smoothly instead of snapping at hard pixel widths.',
      },
      {
        icon: 'ux-ui.svg',
        title: 'Flexible Images and Art Direction',
        text: 'Srcset, sizes and picture elements serve the right crop at the right density, keeping hero images sharp without bloating phones.',
      },
      {
        icon: 'mobile.svg',
        title: 'Breakpoint Strategy',
        text: 'We derive breakpoints from your content and analytics, then document each one so future edits cannot silently break the layout.',
      },
      {
        icon: 'technical.svg',
        title: 'Mobile-First or Desktop-First',
        text: 'We choose the direction that suits the project and explain the trade-offs in cascade order, load cost and content priority.',
      },
      {
        icon: 'ux.svg',
        title: 'Responsive Typography',
        text: 'Fluid type scales using clamp, sensible line lengths and a consistent vertical rhythm keep long passages readable on any screen.',
      },
      {
        icon: 'checkmark.svg',
        title: 'Reflow, Zoom and Assistive Tech',
        text: 'Layouts survive 200 percent zoom and 320px reflow without sideways scrolling, with focus order and touch targets verified.',
      },
    ],
  },
  process: {
    eyebrow: 'Delivery Sequence',
    heading: 'How a Responsive Rebuild Runs',
    intro:
      'Whether we are adapting an existing site or starting fresh, the sequence below keeps responsive behaviour planned rather than patched in later.',
    steps: [
      { title: 'Viewport and Content Audit', text: 'We review analytics, current CSS and the pages drawing the most mobile traffic.' },
      { title: 'Breakpoint and Grid Planning', text: 'Breakpoints, column counts and type scales are documented before styling begins.' },
      { title: 'Fluid Build and Component Pass', text: 'Each section is coded once and verified at the extremes of the layout.' },
      { title: 'Device Matrix Testing', text: 'Real phones, tablets and desktop browsers are checked, including rotation.' },
      { title: 'Regression and Handover', text: 'Breakpoints and media queries are recorded so future edits stay predictable.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope of Work',
    heading: 'What a Responsive Engagement Produces',
    intro:
      'Every responsive project ships with the files and documentation your next developer will need to keep the layout stable.',
    items: [
      'Fluid layout system built on CSS grid and relative units',
      'A documented breakpoint map with reasoning for each stop',
      'Responsive image pipeline using srcset, sizes and modern formats',
      'Fluid typography scale with tested line lengths',
      'Mobile navigation and touch target review',
      'Real-device test report across iOS, Android and desktop',
      'Zoom and reflow checks at 200 percent and 320px width',
      'Handover notes covering safe edit zones and CSS structure',
    ],
  },
  faqs: {
    eyebrow: 'Common Questions',
    heading: 'Responsive Design, Explained Properly',
    items: [
      {
        question: 'How is responsive design different from a mobile-friendly website?',
        answer:
          'Mobile-friendly describes the outcome a visitor experiences on a phone. Responsive describes the construction technique that produces it. You can have a mobile-friendly site built from a separate mobile subdomain, and you can have a responsive site that is still awkward to use on a phone. We handle both, but this page covers the technique layer.',
      },
      {
        question: 'How many breakpoints does a website need?',
        answer:
          'Fewer than most people assume. A well-built fluid layout often needs only three or four: one for small phones, one for large phones and tablets in portrait, one for tablets and small laptops, and one for wide desktops. Extra breakpoints add maintenance cost, so we add one only when the content visibly demands it.',
      },
      {
        question: 'Should you design mobile-first or desktop-first?',
        answer:
          'Mobile-first suits most content sites, because starting from the smallest screen forces honest decisions about what deserves space. Desktop-first suits data-dense interfaces, dashboards and tools where the wide layout drives the workflow. We recommend one direction per project and state the reasoning rather than applying a blanket rule.',
      },
      {
        question: 'Can an existing website be made responsive without a redesign?',
        answer:
          'Often yes. We audit the current markup and CSS, replace fixed widths and float layouts with fluid grids, add a responsive image pipeline, then rebuild the parts that cannot survive. If the underlying structure is too brittle, we say so early and quote a rebuild rather than selling a patch that will keep failing.',
      },
      {
        question: 'How do you test a responsive website?',
        answer:
          'Browser emulation is only a first pass. We test on physical Android and iOS handsets, one tablet and current desktop browsers, checking orientation changes, touch targets, sticky headers, form keyboards and long content. We also test with 200 percent zoom and at 320px width, which catches reflow failures that device testing alone misses.',
      },
      {
        question: 'Does responsive design help SEO and Core Web Vitals?',
        answer:
          'It does, for two reasons. A single responsive URL keeps all ranking signals on one page instead of splitting them with a separate mobile site. Responsive images and layout stability also remove the most common causes of a poor Cumulative Layout Shift score, which is measured directly in the Core Web Vitals report.',
      },
      {
        question: 'How long does a responsive build take?',
        answer:
          'Adapting an existing ten to twenty page site usually takes two to three weeks. A full responsive design and build from scratch runs four to six weeks depending on template count. Timelines shorten considerably when content is final before the build begins rather than arriving halfway through.',
      },
    ],
  },
  related: [
    { label: 'Mobile Friendly Website', href: '/mobile-friendly-website' },
    { label: 'Static Website Design', href: '/static-website-design' },
    { label: 'Responsive Design in Gurgaon', href: '/responsive-website-design-gurgaon' },
    { label: 'Website Redesigning', href: '/website-redesigning' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
    { label: 'Website Designing', href: '/website-designing' },
  ],
}

export default content
