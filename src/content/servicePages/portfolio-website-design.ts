import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'portfolio-website-design',
  route: '/portfolio-website-design',
  breadcrumbTitle: 'Portfolio Website Design',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Portfolio Website Design',
    metaTitle: 'Portfolio Website Design Services | AT Tech Global',
    metaDescription:
      'Portfolio websites for designers, photographers, architects and studios. Fast galleries, real case studies, easy self-updating and enquiries built in.',
    keywords:
      'portfolio website design, photographer website design, designer portfolio website, creative portfolio site, case study website design, artist portfolio website',
    ogTitle: 'Portfolio Website Design Services | AT Tech Global',
    ogDescription:
      'Show the work properly: fast galleries, structured case studies and a portfolio you can update yourself in minutes.',
  },
  intro: {
    eyebrow: 'Portfolio Website Design',
    heading: 'Work That Loads Fast and Converts Visitors',
    paragraphs: [
      'A portfolio has one job: convince a stranger, within about a minute, that your work is worth paying for. That means images must load quickly and look correct, projects need context rather than a bare grid of thumbnails, and the route to an enquiry has to be obvious. Designers, photographers, architects, illustrators and consultants all hit the same wall — strong work buried in a slow, awkward site.',
      'We build portfolio websites that carry heavy visual material without collapsing under it. Galleries lazy-load and reserve space so nothing jumps, project pages follow a repeatable case study template you can fill in yourself, and the copy is written to be found by your name and by your craft. You keep control of the content through a simple editor, which is what stops a portfolio going stale.',
    ],
  },
  highlights: [
    {
      icon: 'ux.svg',
      title: 'Galleries That Stay Fast',
      text: 'Lightboxes, lazy loading and reserved media space keep large image sets smooth even on a mid-range phone over mobile data.',
    },
    {
      icon: 'content.svg',
      title: 'Case Studies, Not Just Pictures',
      text: 'A repeatable structure for brief, approach, outcome and credits turns a collection of images into persuasive evidence.',
    },
    {
      icon: 'cms.svg',
      title: 'You Update It Yourself',
      text: 'Add a project in minutes through a simple editor, with no developer involved and no drift away from the design.',
    },
  ],
  features: {
    eyebrow: 'Built for Creative Work',
    heading: 'What Makes a Portfolio Site Actually Work',
    intro:
      'A portfolio is judged in seconds on image quality and in minutes on credibility. These six elements carry both.',
    items: [
      {
        icon: 'ux.svg',
        title: 'Galleries and Lightboxes',
        text: 'Masonry, full-bleed and grid layouts with keyboard-navigable lightboxes, captions and preloading of the next image.',
      },
      {
        icon: 'content.svg',
        title: 'Project Case Study Structure',
        text: 'Every project follows the same honest narrative, so visitors compare your work on substance rather than layout luck.',
      },
      {
        icon: 'performance.svg',
        title: 'Impact Versus Page Weight',
        text: 'We budget megabytes per page, serve modern image formats and hold layout stability while galleries fill in.',
      },
      {
        icon: 'brand.svg',
        title: 'Personal Branding',
        text: 'Typography, colour and tone are set around you rather than a bought template, keeping the work the loudest element.',
      },
      {
        icon: 'cms.svg',
        title: 'Self-Service Editing',
        text: 'Upload images, reorder projects and rewrite captions from a browser, with limits that protect the design.',
      },
      {
        icon: 'leads.svg',
        title: 'Enquiries and Discovery',
        text: 'Contact forms, availability notes and structured data help clients and search engines understand what you do.',
      },
    ],
  },
  process: {
    eyebrow: 'Project Journey',
    heading: 'Turning a Body of Work Into a Website',
    intro:
      'Portfolio projects are as much editorial as technical, so the early stages focus on selecting and sequencing work before any styling begins.',
    steps: [
      { title: 'Portfolio and Audience Review', text: 'We look at your existing work, competitors and the clients you want more of.' },
      { title: 'Narrative and Page Plan', text: 'Project template, categories and the homepage story are agreed before design.' },
      { title: 'Visual Direction', text: 'Type, palette and image treatment are set to frame the work, not compete with it.' },
      { title: 'Build and Media Tuning', text: 'Galleries, lightboxes and image budgets are built and measured on real connections.' },
      { title: 'Editing Walkthrough', text: 'You add a real project yourself while we watch, so nothing is left unclear.' },
    ],
  },
  deliverables: {
    eyebrow: 'What Is Included',
    heading: 'Everything a Working Portfolio Needs',
    intro:
      'Portfolio builds are scoped per project, so the list below is included by default rather than treated as an upsell.',
    items: [
      'Custom portfolio design built around your strongest work',
      'Gallery and lightbox components for images and video',
      'A reusable project case study template with fixed sections',
      'Image compression and responsive media pipeline',
      'Self-service editor for projects, captions and ordering',
      'Enquiry form with spam protection and email routing',
      'SEO setup for your name, discipline and location',
      'Analytics plus a written guide to adding new work',
    ],
  },
  faqs: {
    eyebrow: 'Questions Creatives Ask',
    heading: 'Portfolio Website Design FAQ',
    items: [
      {
        question: 'How many projects should my portfolio show?',
        answer:
          'Fewer than most people expect. Six to twelve well-presented projects usually outperform a wall of thirty thumbnails, because visitors rarely scroll past the second screen. We help you select work that matches the clients you want next, then group the rest into categories so depth is available without overwhelming the homepage.',
      },
      {
        question: 'Can I add new projects myself after launch?',
        answer:
          'Yes, and we build the site specifically so you can. Projects, images, captions, categories and ordering are all editable from a browser. The editor enforces image dimensions and file size limits, so a badly prepared photograph cannot break the layout or slow the whole page down.',
      },
      {
        question: 'How do you keep image-heavy galleries fast?',
        answer:
          'We serve modern formats such as WebP and AVIF with fallbacks, generate several sizes per image and let the browser pick the smallest suitable one. Galleries lazy-load below the fold, reserve space for every image to prevent layout shift, and download the next image only when a visitor is likely to look at it.',
      },
      {
        question: 'What should a project case study include?',
        answer:
          'A short brief explaining the problem, your approach and the constraints, two to six images or a short video, the measurable outcome where one exists, and credits for collaborators. Even three sentences of context changes how a viewer reads the images, and it gives search engines text to index on a page that would otherwise be almost entirely visual.',
      },
      {
        question: 'Will my portfolio rank for my own name?',
        answer:
          'It usually can, provided the site is technically sound and your name appears consistently in the title tags, headings, About page, structured data and social profiles. Ranking for a discipline plus a city, such as architectural photographer in Gurgaon, takes longer but is achievable with a service page, location signals and steady portfolio updates.',
      },
      {
        question: 'Can you migrate my existing portfolio?',
        answer:
          'Yes. We export your current projects and images, bring across captions and metadata, rebuild the layout in the new design, then redirect every old project URL to its new address. That last step matters more than most people realise, because portfolio links are shared widely and old rankings would otherwise be lost.',
      },
      {
        question: 'How long does a portfolio website take to build?',
        answer:
          'A focused portfolio of eight to fifteen projects typically takes three to four weeks from approved direction to launch. The biggest variable is you: selecting final images and writing a few lines of project context takes longer than clients expect, and starting that work during the design phase keeps the build on schedule.',
      },
    ],
  },
  related: [
    { label: 'Business Profile Design', href: '/business-profile-design' },
    { label: 'Website Designing', href: '/website-designing' },
    { label: 'CMS Development', href: '/cms-development' },
    { label: 'SEO Services', href: '/seo-services' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
    { label: 'Startup Website Design', href: '/startup-website-design' },
  ],
}

export default content
