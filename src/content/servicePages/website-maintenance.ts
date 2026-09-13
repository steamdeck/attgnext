import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'website-maintenance',
  route: '/website-maintenance',
  breadcrumbTitle: 'Website Maintenance',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Website Maintenance',
    metaTitle: 'Website Maintenance & AMC Services | AT Tech Global',
    metaDescription:
      'Ongoing website maintenance and AMC contracts: staged updates, tested backups, uptime and SSL monitoring, malware cleanup and quick fixes under an SLA.',
    keywords:
      'website maintenance services, website amc, website maintenance contract, wordpress maintenance, website support plan, website backup service, malware removal service',
    ogTitle: 'Website Maintenance & AMC Services | AT Tech Global',
    ogDescription:
      'Monthly update, backup, monitoring and support cover that keeps a live website secure, recoverable and quietly improving.',
  },
  intro: {
    eyebrow: 'Maintenance & AMC',
    heading: 'Maintenance Contracts That Stop Small Faults Becoming Outages',
    paragraphs: [
      'Websites rarely collapse because of one dramatic attack. They decay. A plugin goes unpatched for two years, a TLS certificate expires on a Saturday, the host retires the PHP version the site was built on, and a backup turns out to be an empty folder. Each problem is survivable alone; together they take a working site offline at the worst possible moment.',
      'A maintenance contract removes that slow decay from your to-do list. A named engineer applies updates on a staging copy, verifies the restore path, watches uptime and certificate expiry, scans for injected files and handles the small content edits that otherwise sit in an inbox for weeks. You agree the scope once and we run it quietly in the background every month.',
    ],
  },
  highlights: [
    {
      icon: 'security.svg',
      title: 'Staged Update Cycle',
      text: 'Core, theme and plugin updates are tested on a clone of your site first, then released once pages and forms pass checks.',
    },
    {
      icon: 'cloud.svg',
      title: 'Backups You Can Restore',
      text: 'Nightly off-site snapshots with a documented restore drill, so recovery is a procedure rather than a hope.',
    },
    {
      icon: 'watch.svg',
      title: 'Uptime and Expiry Watch',
      text: 'Availability, response time and certificate expiry are monitored around the clock and acted on before visitors notice.',
    },
  ],
  features: {
    eyebrow: 'What Is Covered',
    heading: 'A Maintenance Scope Built Around Real Failure Modes',
    intro:
      'Every item below exists because we have seen it break a live business website, usually at the least convenient time.',
    items: [
      {
        icon: 'cms.svg',
        title: 'Core, Theme and Plugin Updates',
        text: 'Every release is applied to a staging clone and checked for layout, form and checkout breakage before it reaches production.',
      },
      {
        icon: 'cloud.svg',
        title: 'Backup and Restore Testing',
        text: 'Nightly off-site copies of files and database, with a full restore rehearsed on staging at least once a quarter.',
      },
      {
        icon: 'watch.svg',
        title: 'Uptime and SSL Monitoring',
        text: 'Minute-by-minute checks on availability, DNS resolution, response time and certificate renewal dates that alert our team directly.',
      },
      {
        icon: 'security.svg',
        title: 'Malware Scanning and Cleanup',
        text: 'Scheduled file-integrity scans that catch injected scripts, spam redirects, rogue admin users and backdoors early.',
      },
      {
        icon: 'php.svg',
        title: 'Version and Compatibility Audits',
        text: 'We track the PHP, MySQL and Node versions your host supports and migrate you off any runtime approaching end of life.',
      },
      {
        icon: 'support.svg',
        title: 'Small Content Changes',
        text: 'A monthly allowance of text, image, banner and price edits handled by the same engineers who built the site.',
      },
    ],
  },
  process: {
    eyebrow: 'How We Work',
    heading: 'From First Audit to a Running Monthly Cycle',
    intro:
      'We document the site before changing anything, then settle into a predictable monthly rhythm.',
    steps: [
      { title: 'Audit and Inventory', text: 'We list every plugin, theme, licence, cron job and expiry date on the site as it stands.' },
      { title: 'Backup and Restore Proof', text: 'A full snapshot is taken and restored to staging to prove the recovery path works.' },
      { title: 'Monthly Update Cycle', text: 'Updates are applied to staging, checked against a list, then released live.' },
      { title: 'Monitoring and Response', text: 'Uptime, SSL and malware alerts route to our team, who triage inside the agreed SLA.' },
      { title: 'Quarterly Health Report', text: 'You receive security, speed and backlog notes plus recommendations for the next quarter.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope of Work',
    heading: 'What a Maintenance Month Delivers',
    intro:
      'Plans are fixed fee and clearly bounded, so you always know what is included and what needs a separate quote.',
    items: [
      'Staged update cycle for core, themes and plugins',
      'Nightly off-site backups with quarterly restore drills',
      'Uptime, DNS and SSL expiry monitoring with alerting',
      'Scheduled malware and file-integrity scanning',
      'Monthly allowance of small content and image edits',
      'Security patching plus written hardening advice',
      'Quarterly performance, security and backlog report',
      'Email and phone support at agreed response times',
    ],
  },
  faqs: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Website Maintenance Questions, Answered Plainly',
    items: [
      {
        question: 'What does a monthly maintenance plan actually include?',
        answer:
          'A typical plan covers staged core, theme and plugin updates, nightly off-site backups, uptime and SSL expiry monitoring, scheduled malware scans, a set number of small content edits, and a written report. Larger jobs such as a new page template or a redesign are quoted separately so your monthly fee stays predictable.',
      },
      {
        question: 'How quickly do you respond when a website goes down?',
        answer:
          'Standard plans carry a four-hour first-response target during business hours, and priority plans carry one hour including weekends. Monitoring usually tells us about an outage before you do. Response time is the contractual commitment; most outages caused by a plugin conflict or host fault are fixed the same day.',
      },
      {
        question: 'Do you maintain sites that another agency built?',
        answer:
          'Yes, and that is most of our maintenance work. We audit the existing stack, take a verified backup and document what is running before changing anything. If the site is in poor shape we will say upfront which parts are worth repairing and which are better replaced, with costs for both routes.',
      },
      {
        question: 'What happens if my site is already infected with malware?',
        answer:
          'We isolate the site, take a forensic snapshot, remove injected files and backdoors, then work out how the entry point was created and close it. Credentials and API keys are rotated, and we file a reconsideration request if Google has flagged the domain. Cleanup is quoted as a one-off before regular maintenance begins.',
      },
      {
        question: 'What is an AMC and how is it different from hourly support?',
        answer:
          'AMC stands for annual maintenance contract, a fixed monthly or annual fee for a defined scope of work. Hourly support bills you only when something happens, which is cheaper in a quiet year and far more expensive in a bad one. An AMC trades a small predictable cost for guaranteed cover and a known response time.',
      },
      {
        question: 'Will a plugin update break my website design?',
        answer:
          'That risk is exactly why updates are rehearsed on a staging clone first. We compare key pages, contact forms and any checkout flow before releasing to production. On the rare occasion an update genuinely conflicts with a customisation, we either hold it back or fix the conflict before the live site is touched at all.',
      },
      {
        question: 'Can we cancel a maintenance contract at any time?',
        answer:
          'Plans run month to month after an initial three-month settling period, and you can cancel with thirty days notice. On exit we hand over all documentation, access credentials and the latest verified backup. Nothing is held hostage, and the site remains fully under your control throughout the engagement.',
      },
    ],
  },
  related: [
    { label: 'Performance Optimization', href: '/performance-optimization' },
    { label: 'Security Audits', href: '/security-audits' },
    { label: 'Website Redesigning', href: '/website-redesigning' },
    { label: 'CMS Development', href: '/cms-development' },
    { label: 'SEO Services', href: '/seo-services' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default content
