import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'informative-website-design',
  route: '/informative-website-design',
  breadcrumbTitle: 'Informative Website Design',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Informative Website Design',
    metaTitle: 'Informative Website Design Services | AT Tech Global',
    metaDescription:
      'Informational websites for schools, hospitals, NGOs and public bodies. Clear structure, notice publishing, accessible design and a CMS staff can run.',
    keywords:
      'informative website design, informational website design, school website design, hospital website design, ngo website design, brochure website design',
    ogTitle: 'Informative Website Design Services | AT Tech Global',
    ogDescription:
      'Information-heavy websites organised so every visitor finds the right answer quickly, with publishing tools non-technical staff can use.',
  },
  intro: {
    eyebrow: 'Informative Website Design',
    heading: 'Websites Built to Publish, Not to Sell',
    paragraphs: [
      'Some websites exist to sell, and some exist to inform. A school publishing circulars, a hospital listing departments and visiting hours, an NGO reporting its programmes, a trust sharing governance documents, a club posting fixtures — each is judged by how quickly a worried parent, patient or member finds one specific answer. Structure matters far more here than visual novelty.',
      'We design informational websites for exactly that job: large content sets arranged so people find things without training, notices and documents published in accessible formats rather than scattered as PDF links, events and calendars that stay current, and a CMS simple enough that office staff maintain it between other duties. Pages stay lightweight, because many visitors arrive on modest connections and older devices.',
    ],
  },
  highlights: [
    {
      icon: 'strategy.svg',
      title: 'Structure Before Styling',
      text: 'We group your content the way your visitors think, then test the navigation with people who are seeing the site for the first time.',
    },
    {
      icon: 'content.svg',
      title: 'Documents and Notices',
      text: 'Circulars, forms, prospectuses and reports publish as dated, searchable, downloadable entries instead of buried file links.',
    },
    {
      icon: 'support.svg',
      title: 'A CMS Your Staff Will Use',
      text: 'Simple publishing roles and clearly labelled fields mean non-technical staff update the site without breaking the layout.',
    },
  ],
  features: {
    eyebrow: 'Information Architecture',
    heading: 'Making Hundreds of Pages Feel Simple',
    intro:
      'Informational sites rarely fail because of design taste. They fail because nobody can find the one notice they came for. These six areas fix that.',
    items: [
      {
        icon: 'strategy.svg',
        title: 'Architecture for Large Content Sets',
        text: 'Hundreds of pages are grouped, tagged and cross-linked so depth never turns into a dead end for a first-time visitor.',
      },
      {
        icon: 'visibility.svg',
        title: 'Navigation for Every Age Group',
        text: 'Larger type, plain labels, working site search and breadcrumbs help visitors who are not confident using the web.',
      },
      {
        icon: 'content.svg',
        title: 'Notices, Circulars and Downloads',
        text: 'An announcement system with dates, categories and accessible document formats replaces scattered file links.',
      },
      {
        icon: 'course.svg',
        title: 'Events, Calendars and Timetables',
        text: 'Term dates, admission windows, camps, clinics and meetings are published once and reused wherever they are relevant.',
      },
      {
        icon: 'trust.svg',
        title: 'Accessibility and Multilingual Pages',
        text: 'Contrast, focus states, text alternatives and bilingual page structures, with translation handled by your own team.',
      },
      {
        icon: 'performance.svg',
        title: 'Light Pages and Easy Publishing',
        text: 'Compressed media, minimal scripts and a clear editorial workflow keep the site quick and the content genuinely current.',
      },
    ],
  },
  process: {
    eyebrow: 'Working Together',
    heading: 'How an Informational Site Gets Built',
    intro:
      'These projects involve many contributors, so we sequence the work around your committee, department or management approvals.',
    steps: [
      { title: 'Content Inventory', text: 'We gather every document, notice and page you already publish in any form.' },
      { title: 'Structure and Navigation', text: 'Categories, menus and search rules are agreed before any page is designed.' },
      { title: 'Readable Design', text: 'Layouts prioritise legibility, contrast and clear hierarchy over decoration.' },
      { title: 'CMS Build and Migration', text: 'Content moves in with redirects, user roles and publishing permissions configured.' },
      { title: 'Staff Training and Launch', text: 'Your team publishes a real notice during training before the site goes live.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope of Work',
    heading: 'What an Informational Build Delivers',
    intro:
      'Fixed-scope delivery, with the editorial tools and documentation your staff need to run the site without us.',
    items: [
      'Content audit and a tested navigation structure',
      'Accessible templates for text pages, lists and data tables',
      'Notice board with dates, categories and expiry',
      'Document library for forms, reports and prospectuses',
      'Events calendar supporting one-off and recurring entries',
      'Simple CMS with editor, author and publisher roles',
      'Site search, breadcrumbs and an XML sitemap',
      'Staff training session and a written publishing guide',
    ],
  },
  faqs: {
    eyebrow: 'Questions From Institutions',
    heading: 'Informative Website Design FAQ',
    items: [
      {
        question: 'Can our staff update the website without technical training?',
        answer:
          'That is the design goal. We build around structured fields rather than a blank page, so a notice needs a title, a date, a category and a body of text — nothing else. Editors can publish without touching layout, and role permissions stop accidental changes to menus, templates or the homepage. Training is included and recorded for future staff.',
      },
      {
        question: 'How do you organise a website with hundreds of pages?',
        answer:
          'We start from a full content inventory, group pages by the visitor task they answer rather than by your internal department names, and cap the main menu at about seven top-level items. Everything deeper is reached through landing pages, filtering, related links and site search. We then test the structure with people unfamiliar with your organisation.',
      },
      {
        question: 'Can parents, patients or members download forms and notices?',
        answer:
          'Yes. Documents live in a structured library with a title, date, category, file size and format shown before download. We store PDFs with searchable text rather than scans, publish important notices as HTML pages as well, and archive old circulars by year so the current information is never hidden behind outdated files.',
      },
      {
        question: 'Do you support bilingual or multilingual content?',
        answer:
          'We build the structure for it: parallel pages with correct language attributes, a visible language switcher, and a CMS that lets your staff publish one language without waiting on the other. Translation itself stays with your team or a translator you appoint, since accuracy in official notices matters more than speed.',
      },
      {
        question: 'Is the website accessible for older visitors and screen readers?',
        answer:
          'Accessibility is treated as a requirement, not a finishing touch. We target WCAG 2.2 AA practices: sufficient colour contrast, keyboard-operable menus, visible focus outlines, labelled form fields, text alternatives for meaningful images, and headings in a logical order. Informational sites tend to have a wider age range than commercial ones, so this work pays for itself.',
      },
      {
        question: 'Will the site work on slow connections in rural areas?',
        answer:
          'It is built for that case. Pages are kept under a strict weight budget, images are compressed and served in modern formats at the size actually needed, fonts are limited, and heavy scripts are avoided entirely. On a slow connection the text and navigation appear first, so the answer a visitor came for is readable before images finish loading.',
      },
      {
        question: 'Can you migrate content from our existing website?',
        answer:
          'Yes. We import existing pages, notices, documents and images into the new structure, clean up inconsistent formatting, and redirect every old URL to its new location so links in emails, prospectuses and search results keep working. We also keep the old site available privately for a short period after launch as a reference.',
      },
    ],
  },
  related: [
    { label: 'CMS Development', href: '/cms-development' },
    { label: 'Custom CMS Development', href: '/custom-cms-development' },
    { label: 'Website Designing', href: '/website-designing' },
    { label: 'Website Maintenance', href: '/website-maintenance' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default content
