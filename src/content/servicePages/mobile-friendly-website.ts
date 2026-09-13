import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'mobile-friendly-website',
  route: '/mobile-friendly-website',
  breadcrumbTitle: 'Mobile Friendly Website',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Mobile Friendly Website',
    metaTitle: 'Mobile Friendly Website Design Company | AT Tech Global',
    metaDescription:
      'Make your website genuinely usable on a phone: tap targets, thumb-zone layout, readable type, fast 4G loading and one-tap call and WhatsApp actions.',
    keywords:
      'mobile friendly website, mobile friendly web design, mobile usability, tap target size, mobile first indexing, responsive mobile layout, mobile form design',
    ogTitle: 'Mobile Friendly Website Design | AT Tech Global',
    ogDescription:
      'Most of your visitors arrive on a phone. We make the mobile experience fast, tappable and worth converting on.',
  },
  intro: {
    eyebrow: 'Mobile Usability',
    heading: 'A Website People Can Actually Use on a Phone',
    paragraphs: [
      'Being responsive and being usable on a phone are different achievements. A layout can reflow perfectly at 390 pixels wide and still be frustrating, because buttons sit a few millimetres apart, the phone number is plain text instead of a tappable link, forms demand eleven fields before showing a keyboard that covers the submit button, and the hero image takes six seconds to appear on a busy 4G connection. Visitors do not complain about any of it. They simply leave and call a competitor whose number they could tap.',
      'Our mobile friendly website work is about the human holding the device. We size tap targets, place primary actions inside the natural thumb arc, set type large enough to read without pinch zoom, and reduce mobile forms to the fewest fields that will still qualify a lead. Then we measure on real hardware over throttled mobile data, not on a desktop browser resized to look narrow, because that is where the gap between a passing audit score and an actual sale appears.',
    ],
  },
  highlights: [
    {
      icon: 'mobile.svg',
      title: 'Thumb-First Layout',
      text: 'Primary actions sit where a thumb reaches one-handed, with nothing important stranded in the top corners of the screen.',
    },
    {
      icon: 'engagement.svg',
      title: 'One-Tap Contact',
      text: 'Click-to-call, WhatsApp chat and map directions become single taps instead of numbers a visitor has to copy by hand.',
    },
    {
      icon: 'speed.svg',
      title: 'Fast on Real 4G',
      text: 'Measured on throttled mobile connections and mid-range Android handsets, not on office wifi with a flagship phone.',
    },
  ],
  features: {
    eyebrow: 'Mobile Fixes That Matter',
    heading: 'What We Change to Make Mobile Work',
    intro:
      'These cover the specific failures that show up again and again in mobile analytics, session recordings and search console reports.',
    items: [
      {
        icon: 'ux.svg',
        title: 'Touch Target Sizing',
        text: 'Interactive elements sized to at least 44 by 44 pixels with clear spacing, so adjacent links stop triggering the wrong tap.',
      },
      {
        icon: 'responsive.svg',
        title: 'Thumb-Zone Placement',
        text: 'Sticky call bars, checkout buttons and navigation placed within easy reach for one-handed use on tall screens.',
      },
      {
        icon: 'content.svg',
        title: 'Legible Typography',
        text: 'Body text at 16 pixels or larger, comfortable line height and contrast that holds up on a phone in daylight.',
      },
      {
        icon: 'leads.svg',
        title: 'Short Mobile Forms',
        text: 'Correct input types and autocomplete so the right keyboard appears, with only the fields needed to qualify an enquiry.',
      },
      {
        icon: 'whatsapp.svg',
        title: 'Call and Chat Actions',
        text: 'tel and WhatsApp links wired with sensible prefilled messages, tracked as conversions so you can see what they earn.',
      },
      {
        icon: 'performance.svg',
        title: 'Mobile Load Budget',
        text: 'Compressed responsive images, deferred scripts and no layout shift, targeted at a fast first paint on slow connections.',
      },
    ],
  },
  process: {
    eyebrow: 'Mobile Review',
    heading: 'How We Take a Site from Usable to Effortless',
    intro:
      'We audit before we rebuild, because most sites need targeted mobile fixes rather than a full redesign.',
    steps: [
      { title: 'Mobile Audit', text: 'We test your key pages on real handsets and log every friction point found.' },
      { title: 'Analytics Review', text: 'Session recordings and drop-off data show exactly where phone users give up.' },
      { title: 'Layout and Tap Fixes', text: 'Target sizes, spacing and thumb-zone placement are corrected across templates.' },
      { title: 'Speed Pass on 4G', text: 'Images, fonts and scripts are trimmed and re-measured under mobile throttling.' },
      { title: 'Action Tracking', text: 'Call, chat and form events are instrumented so mobile results are countable.' },
    ],
  },
  deliverables: {
    eyebrow: 'What We Deliver',
    heading: 'Output From a Mobile Usability Engagement',
    intro:
      'You get a prioritised list with effort and impact scores, so improvements can be released in a sensible order.',
    items: [
      'Page-by-page mobile audit with annotated screenshots',
      'Tap target and spacing corrections across templates',
      'Sticky call and WhatsApp action bars where relevant',
      'Mobile form redesign with correct keyboard types',
      'Typography and contrast adjustments for phones',
      'Mobile speed pass over throttled 4G conditions',
      'Mobile-first indexing and viewport verification',
      'Event tracking on calls, chats and form submissions',
    ],
  },
  faqs: {
    eyebrow: 'Mobile Questions',
    heading: 'Mobile Friendly Website FAQ',
    items: [
      {
        question: 'What exactly counts as mobile friendly?',
        answer:
          'A mobile friendly site loads quickly on a phone connection, fits the viewport without horizontal scrolling, keeps text readable without pinch zooming, spaces tappable elements far enough apart, and makes the main action easy to complete one-handed. Google adds its own criteria around content parity and interstitial popups, but usability for the person holding the phone is what actually affects your revenue.',
      },
      {
        question: 'How does mobile-first indexing affect my website?',
        answer:
          'Google predominantly crawls and indexes the mobile version of your pages, so what it sees on a phone is what determines your rankings, even for desktop searches. If content, links or structured data are hidden or missing on mobile, they effectively do not exist for indexing. We compare the mobile and desktop renders directly to confirm the mobile version contains everything the desktop one does.',
      },
      {
        question: 'What size should buttons and links be on mobile?',
        answer:
          'Aim for a minimum tappable area of about 44 by 44 CSS pixels, which is the guidance in both Apple and Google accessibility documentation. The touch area can be larger than the visible button by adding padding. Just as important is spacing: two links closer than roughly 8 pixels apart will be mistapped regularly, which is why mobile menus and footer links cause so many accidental clicks.',
      },
      {
        question: 'Why is my site slow on mobile when it is fast on desktop?',
        answer:
          'Desktop testing usually runs on fast fibre, a powerful processor and often a cached copy. A mid-range Android on 4G has far less CPU headroom, higher latency and a slower connection, so unoptimised images, large JavaScript bundles and web fonts hurt disproportionately. We test with CPU and network throttling and fix what the throttled measurements reveal rather than the unthrottled ones.',
      },
      {
        question: 'Do mobile popups hurt my rankings?',
        answer:
          'Intrusive interstitials that cover the main content immediately after a tap from search results can cause a rankings penalty on mobile. Acceptable patterns include cookie notices, age verification and login prompts for private content, provided they are dismissible and reasonably sized. Conversion popups should generally be delayed, triggered by intent, or replaced with inline banners on small screens.',
      },
      {
        question: 'How much does poor mobile usability cost in lost leads?',
        answer:
          'The arithmetic is straightforward. If two-thirds of your traffic is mobile and the mobile conversion rate is a third of desktop, you are losing the majority of your potential enquiries from that segment. Common leaks are untappable phone numbers, long forms, slow hero images and hidden navigation. Fixing them usually lifts mobile conversion without any increase in ad spend.',
      },
      {
        question: 'Can you improve mobile usability without redesigning the whole site?',
        answer:
          'Almost always. Mobile usability problems are concentrated in a small number of templates, typically the home page, a service page, the contact page and checkout. We fix tap targets, typography, form fields and the call-to-action placement on those templates first, then review the rest in a later pass. Most clients see the measurable difference from these changes alone.',
      },
    ],
  },
  related: [
    { label: 'Responsive Website Design', href: '/responsive-website-design' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
    { label: 'Website Redesigning', href: '/website-redesigning' },
    { label: 'Website Designing', href: '/website-designing' },
    { label: 'SEO Services', href: '/seo-services' },
    { label: 'Responsive Website Design in Gurgaon', href: '/responsive-website-design-gurgaon' },
  ],
}

export default content
