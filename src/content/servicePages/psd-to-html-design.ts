import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'psd-to-html-design',
  route: '/psd-to-html-design',
  breadcrumbTitle: 'PSD to HTML Design',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'PSD to HTML Design',
    metaTitle: 'Pixel-Perfect PSD to HTML Conversion | AT Tech Global',
    metaDescription:
      'PSD, Figma, XD and Sketch files converted into pixel-accurate, W3C-valid HTML5 and CSS. Semantic markup, responsive behaviour and cross-browser QA.',
    keywords:
      'psd to html, figma to html, xd to html, sketch to html, psd to responsive html, pixel perfect html conversion',
    ogTitle: 'Pixel-Perfect PSD to HTML Conversion | AT Tech Global',
    ogDescription:
      'Hand-written semantic HTML5 and modern CSS from any design file, validated and tested across browsers and screen sizes.',
  },
  intro: {
    eyebrow: 'PSD to HTML Design',
    heading: 'Design Files Turned Into Code You Can Maintain',
    paragraphs: [
      'A design file and a working website live in different worlds. An artboard describes pixels in a fixed frame; a browser needs semantic structure, a cascade, spacing systems and assets in the correct formats. Converting one into the other is a translation job, and its quality decides whether the finished site matches the approved design or quietly drifts away from it.',
      'We convert PSD, Adobe XD, Figma and Sketch files into hand-written HTML5 and modern CSS that a developer can extend and a marketer can edit. No page-builder div soup, no absolute positioning that collapses the moment text changes, no mystery wrapper elements. What you receive is clean, commented, W3C-valid front-end code with the responsive behaviour the design implied but never drew.',
    ],
  },
  highlights: [
    {
      icon: 'custom.svg',
      title: 'Pixel-Accurate by Hand',
      text: 'Spacing, weights, radii and gradients are read from the file and written manually, so the markup stays readable and editable.',
    },
    {
      icon: 'template.svg',
      title: 'Any Source Format',
      text: 'PSD, Adobe XD, Figma and Sketch are all accepted, including layered files, shared style guides and exportable asset libraries.',
    },
    {
      icon: 'checkmark.svg',
      title: 'Validated and Tested',
      text: 'Markup passes W3C validation and is checked in Chrome, Safari, Firefox and Edge before the code is handed over to you.',
    },
  ],
  features: {
    eyebrow: 'What the Conversion Covers',
    heading: 'From Artboard to Browser Without the Drift',
    intro:
      'A conversion is more than slicing images. These are the six things that separate a real front-end build from a quick export.',
    items: [
      {
        icon: 'ux-ui.svg',
        title: 'Pixel-Accurate Implementation',
        text: 'Spacing, weights, corner radii and gradients are matched to the comp and verified with an overlay diff at common widths.',
      },
      {
        icon: 'technical.svg',
        title: 'Semantic HTML5 Structure',
        text: 'Landmarks, heading order, lists, figures and form labels carry real meaning, so the code is accessible and searchable.',
      },
      {
        icon: 'custom.svg',
        title: 'Modern CSS, Not Legacy Hacks',
        text: 'Flexbox, grid, custom properties and logical properties replace float clearing, deep nesting and table-based layouts.',
      },
      {
        icon: 'responsive.svg',
        title: 'Responsive Behaviour the Design Forgot',
        text: 'When comps show desktop only, we define tablet and mobile layouts and confirm them with you before the build starts.',
      },
      {
        icon: 'performance.svg',
        title: 'Retina Assets and SVG',
        text: 'Icons ship as optimised SVG, photography as compressed sets at multiple densities, each exported for the density it serves.',
      },
      {
        icon: 'search.svg',
        title: 'Cross-Browser QA and Validation',
        text: 'We resolve rendering differences, run W3C checks and log every browser and version tested in a short QA report.',
      },
    ],
  },
  process: {
    eyebrow: 'Conversion Workflow',
    heading: 'Five Stages From File Upload to Code Delivery',
    intro:
      'Conversion projects are quoted per page or per screen and run on a predictable schedule, so you always know the delivery date.',
    steps: [
      { title: 'Design File Intake', text: 'You share the source file, style guide and brand assets for review.' },
      { title: 'Asset Export and Audit', text: 'Images, icons and fonts are exported, optimised and logged against the design.' },
      { title: 'Semantic Markup Build', text: 'Each section is coded in clean HTML5 with a documented CSS structure.' },
      { title: 'Responsive Translation', text: 'Desktop-only comps are extended into tablet and mobile layouts for approval.' },
      { title: 'Validation and Browser QA', text: 'W3C checks, device tests and an overlay diff against the original comp.' },
    ],
  },
  deliverables: {
    eyebrow: 'What You Receive',
    heading: 'Files, Reports and Code in One Handover',
    intro:
      'Everything below arrives together in a versioned folder, so a new developer can pick the project up without a phone call.',
    items: [
      'Hand-written HTML5 and CSS matching the approved design',
      'Responsive layouts for tablet and mobile derived from the comp',
      'Optimised image sets, SVG icons and web font files',
      'A documented CSS structure with spacing and colour scales',
      'W3C validation report and cross-browser QA notes',
      'Interactive states for links, buttons, forms and menus',
      'Source files, build notes and a deployment-ready folder',
    ],
  },
  faqs: {
    eyebrow: 'Before You Send Files',
    heading: 'PSD to HTML Questions, Answered',
    items: [
      {
        question: 'Which design file formats do you accept?',
        answer:
          'We work from Photoshop PSD, Adobe XD, Figma and Sketch, and we can also handle Illustrator artwork, InVision prototypes and exported PDF comps for reference. Layered source files are strongly preferred, because a flattened image forces us to guess at type sizes, spacing and colours rather than measure them.',
      },
      {
        question: 'What should I supply for a smooth handover?',
        answer:
          'Send the layered source file, all linked images at full resolution, the brand font files or their web licences, a colour palette with hex values, hover and focus states, and any logo in vector form. If you have a style guide, a grid specification or existing brand documentation, include it. Missing fonts and low-resolution logos cause most avoidable delays.',
      },
      {
        question: 'How accurate is PSD to HTML conversion?',
        answer:
          'We aim to match the comp within a pixel or two at the exact widths it was drawn for. We verify this with a side-by-side overlay diff rather than by eye. Perfect pixel equality is impossible across every browser, because fonts render differently on Windows, macOS and Android, so we keep type metrics consistent and confirm any unavoidable deviation with you.',
      },
      {
        question: 'My design only shows desktop. What happens on mobile?',
        answer:
          'We treat the desktop comp as the widest breakpoint, then design the intermediate and small layouts ourselves by reflowing the same components into stacked columns, tappable navigation and resized media. Those derived layouts are sent to you for approval before coding, so the responsive behaviour is your decision rather than a surprise at launch.',
      },
      {
        question: 'What happens when the design has gaps?',
        answer:
          'Comps rarely cover everything. Empty states, error messages, long headlines, hover and focus states, form validation, image-less cards and content overflow are common omissions. We document each gap, propose the sensible solution, and either confirm it with you or apply a stated default. Nothing is invented silently, because small assumptions compound across a build.',
      },
      {
        question: 'How long does a PSD to HTML conversion take?',
        answer:
          'A simple landing page is typically ready in two to three working days. A standard inner page with forms and interactive components takes three to five days, and a full multi-template site runs one to two weeks. Timelines assume the source file is complete and that feedback comes back within a working day.',
      },
      {
        question: 'Can the converted code be dropped into WordPress or React?',
        answer:
          'Yes. For WordPress we deliver the markup as a custom theme with templates, enqueued assets and a block or ACF structure if required. For React or Next.js we deliver components with scoped styling. Tell us the target platform before the build starts, because theming decisions made afterwards cost more to unpick.',
      },
    ],
  },
  related: [
    { label: 'Custom Website Development', href: '/custom-website-development' },
    { label: 'Static Website Design', href: '/static-website-design' },
    { label: 'CMS Development', href: '/cms-development' },
    { label: 'Website Designing', href: '/website-designing' },
    { label: 'Dynamic Website Design', href: '/dynamic-website-design' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default content
