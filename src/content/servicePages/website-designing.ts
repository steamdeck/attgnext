import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'website-designing',
  route: '/website-designing',
  breadcrumbTitle: 'Website Designing',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Website Designing',
    metaTitle: 'Website Designing Company in Gurgaon | AT Tech Global',
    metaDescription:
      'Complete website designing service: discovery, information architecture, UI and UX design, accessibility and design handover. 14+ years of studio practice.',
    keywords:
      'website designing, website design service, ui ux design company, information architecture, accessible web design, responsive web design, design handover',
    ogTitle: 'Website Designing Company | AT Tech Global',
    ogDescription:
      'From discovery workshops and wireframes to accessible, conversion-focused interfaces and a documented design handover.',
  },
  intro: {
    eyebrow: 'Design Practice',
    heading: 'Website Designing, From First Question to Final Handover',
    paragraphs: [
      'Website designing is the discipline of deciding what a site should say, how it should be structured and why a visitor should take the next step. It is not decoration applied to a wireframe, and it is not a set of pretty screens handed to a developer over the wall. Done properly it produces evidence of thinking: a documented audience, a page hierarchy that matches how people search, components that behave predictably, and decisions written down so the site can evolve without anyone guessing at intent.',
      'AT Tech Global has run this practice for over fourteen years from Gurgaon, with a UK presence in Leicester, across brochure sites, ecommerce stores, ERP and CRM platforms and SaaS products. That range matters, because a designer who has shipped dashboards knows how to handle dense data, and one who has shipped storefronts knows where a product page loses a sale. This page sets out the full method behind every design engagement we take on, whatever the specific brief.',
    ],
  },
  highlights: [
    {
      icon: 'strategy.svg',
      title: 'Discovery Before Pixels',
      text: 'Audience research, competitor review and content inventory happen first, so the layout answers questions rather than filling space.',
    },
    {
      icon: 'ux.svg',
      title: 'Structure You Can Argue With',
      text: 'Sitemaps, user journeys and wireframes make the thinking visible early, when changing direction still costs nothing.',
    },
    {
      icon: 'template.svg',
      title: 'A System, Not Screens',
      text: 'Type scale, spacing, colour tokens and component states are documented, so new pages stay consistent as the site grows.',
    },
  ],
  features: {
    eyebrow: 'The Full Discipline',
    heading: 'What Website Designing Covers Here',
    intro:
      'Every item below appears in a full engagement. Smaller projects trim the depth, never the sequence.',
    items: [
      {
        icon: 'search.svg',
        title: 'Discovery and Research',
        text: 'Stakeholder interviews, customer questions, analytics review and a content audit that reveals what already exists.',
      },
      {
        icon: 'pipeline.svg',
        title: 'Information Architecture',
        text: 'Sitemap, navigation model and URL structure organised around how visitors think rather than internal departments.',
      },
      {
        icon: 'ux-ui.svg',
        title: 'UI and UX Design',
        text: 'Wireframes, then high-fidelity screens with real copy, defined states for hover, focus, empty and error.',
      },
      {
        icon: 'brand.svg',
        title: 'Brand Expression',
        text: 'Logo usage, colour, imagery direction and tone translated into interface rules so the brand survives real content.',
      },
      {
        icon: 'leads.svg',
        title: 'Conversion-Focused Layout',
        text: 'Visual hierarchy, proof placement and friction removal built around the one action each page is meant to produce.',
      },
      {
        icon: 'responsive.svg',
        title: 'Accessibility and Responsiveness',
        text: 'Contrast, focus order, keyboard paths and WCAG AA targets designed in, then verified across real breakpoints.',
      },
    ],
  },
  process: {
    eyebrow: 'Our Method',
    heading: 'The Five Stages of a Design Engagement',
    intro:
      'Each stage ends with something you can review and sign off, so approvals never stack up into one risky reveal.',
    steps: [
      { title: 'Discovery and Content Audit', text: 'Goals, audience, competitors and existing content are mapped and agreed.' },
      { title: 'Architecture and Journeys', text: 'The sitemap and key user paths are fixed before any layout is drawn.' },
      { title: 'Wireframes and Copy', text: 'Low-fidelity structure paired with real headlines, so layout is judged fairly.' },
      { title: 'Visual Design and Prototype', text: 'High-fidelity screens become a component system and a testable clickable flow.' },
      { title: 'Handover and QA', text: 'Specifications, assets and a built-page review ensure the design survives.' },
    ],
  },
  deliverables: {
    eyebrow: 'Design Deliverables',
    heading: 'Artifacts You Keep at the End',
    intro:
      'Design work is handed over in editable source files plus documentation, not flattened images.',
    items: [
      'Sitemap, navigation model and user journey maps',
      'Annotated wireframes for every unique template',
      'High-fidelity designs for desktop, tablet and mobile',
      'A component library with typography and spacing rules',
      'Accessibility notes covering contrast and focus order',
      'Clickable prototype for stakeholder and user testing',
      'Imagery, icon and illustration direction guidelines',
      'Written design rationale plus developer handover notes',
    ],
  },
  faqs: {
    eyebrow: 'Design Questions',
    heading: 'Frequently Asked About Website Designing',
    items: [
      {
        question: 'How is website designing different from website development?',
        answer:
          'Designing decides what exists and why, covering structure, language, visual hierarchy and interaction. Development makes that decision work in real browsers, databases and devices. They overlap at handover, where a designer specifies states, spacing and behaviour and a developer reports back on constraints. Projects struggle when one side is skipped or when both are handled by people who never speak.',
      },
      {
        question: 'How long does a full design phase take?',
        answer:
          'A brochure site with five to eight unique templates generally needs three to four weeks for design once discovery is complete. Larger content sites, ecommerce catalogues and application interfaces typically take six to ten weeks because wireframes and prototypes go through more review cycles. Discovery itself adds one to two weeks and consistently repays that time by preventing mid-build redesigns.',
      },
      {
        question: 'Do you design in Figma and can we edit the files?',
        answer:
          'Yes, all interface design is produced in Figma with organised pages, named components, auto layout and shared variables. You receive full edit access on your own workspace at handover, along with a short walkthrough of the file structure. Teams that prefer Sketch or Adobe XD can be accommodated, though Figma remains the smoothest option for developer handoff.',
      },
      {
        question: 'How do you handle accessibility in design?',
        answer:
          'We design to WCAG 2.2 level AA as a baseline, checking text contrast against the actual background, sizing interactive targets for touch, keeping visible focus indicators and writing meaningful link and button labels. Designs are reviewed with a keyboard-only pass and a screen reader spot check, because accessibility problems are cheapest to fix on the canvas rather than in code.',
      },
      {
        question: 'What if we already have a brand guideline document?',
        answer:
          'We work inside it and extend it. Guidelines usually define logo, palette and typography but leave interface specifics undefined, such as form error colours, disabled states or data table density. We fill those gaps, document the additions, and flag any guideline that would cause accessibility or usability problems, with a suggested alternative rather than a silent override.',
      },
      {
        question: 'Can you redesign an existing site without starting over?',
        answer:
          'Frequently that is the right approach. We audit analytics, heatmaps and search queries to identify which pages already earn traffic and conversions, then redesign the templates that underperform while preserving the structure that works. This keeps your rankings intact and usually delivers faster than a full rebuild, with the option to modernise the rest in a second phase.',
      },
      {
        question: 'How do you measure whether the design worked?',
        answer:
          'We agree the metrics before design begins, which usually means enquiry or checkout conversion rate, engagement with key sections, form completion and mobile task success. After launch we compare a four-week baseline against the same period post-release. If a page underperforms, we form a hypothesis, change one variable and retest rather than redesigning by opinion.',
      },
      {
        question: 'Do you design for multilingual or multi-region sites?',
        answer:
          'Yes. Designing for more than one language affects layout more than most teams expect, since German and Hindi strings can run far longer than English ones. We test with expanded text, avoid text baked into images, plan language switching that keeps visitors on the same page, and structure hreflang and regional templates during the architecture stage.',
      },
    ],
  },
  related: [
    { label: 'Website Designing in Gurgaon', href: '/website-designing-gurgaon' },
    { label: 'Responsive Website Design', href: '/responsive-website-design' },
    { label: 'Mobile Friendly Website', href: '/mobile-friendly-website' },
    { label: 'Static Website Design', href: '/static-website-design' },
    { label: 'Dynamic Website Design', href: '/dynamic-website-design' },
    { label: 'Portfolio Website Design', href: '/portfolio-website-design' },
  ],
}

export default content
