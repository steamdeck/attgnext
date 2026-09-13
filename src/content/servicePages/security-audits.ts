import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'security-audits',
  route: '/security-audits',
  breadcrumbTitle: 'Security Audits',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Security Audits',
    metaTitle: 'Website Security Audits & Testing | AT Tech Global',
    metaDescription:
      'Website security audits covering the OWASP Top 10, dependency CVEs, TLS and headers, account access and malware, with severity-ranked remediation.',
    keywords:
      'website security audit, web application security testing, owasp top 10 audit, vulnerability assessment, dependency cve scanning, security headers review, malware and backdoor scan',
    ogTitle: 'Website Security Audits & Testing | AT Tech Global',
    ogDescription:
      'A manual and automated security review that ends in a ranked, fixable list rather than a raw scanner dump.',
  },
  intro: {
    eyebrow: 'Security Audit Services',
    heading: 'Find Out What Would Stop an Attacker Before They Do',
    paragraphs: [
      'Ask an uncomfortable question about any business website: if someone targeted it tomorrow, what would actually stop them? For most sites the honest answer is nothing except being too small to notice. An audit replaces that assumption with a ranked list of the things that are genuinely broken, how they could be abused, and what it costs to fix them.',
      'Our reviews pair automated scanning with manual testing, because the two find different classes of problem. Scanners quickly expose outdated libraries and missing headers; a human has to spot a missing authorisation check or an upload form that happily accepts a PHP file. The result is a written report you can hand to any developer, including your own team.',
    ],
  },
  highlights: [
    {
      icon: 'security.svg',
      title: 'Mapped to the OWASP Top 10',
      text: 'Findings are tied to recognised risk categories instead of an arbitrary proprietary score nobody can act on.',
    },
    {
      icon: 'assessment.svg',
      title: 'Ranked by Real Severity',
      text: 'Each issue carries a rating, a realistic abuse scenario and an effort estimate for putting it right.',
    },
    {
      icon: 'technical.svg',
      title: 'Remediation, Not Just a PDF',
      text: 'We patch the findings ourselves or review and verify the fixes your internal developers write.',
    },
  ],
  features: {
    eyebrow: 'Review Coverage',
    heading: 'What Gets Tested During a Security Audit',
    intro:
      'The scope below covers the paths that small and mid-sized business applications are actually attacked through.',
    items: [
      {
        icon: 'certificate.svg',
        title: 'Authentication and Sessions',
        text: 'Password policy, multi-factor coverage, session lifetime, cookie flags, reset flows and lockout behaviour.',
      },
      {
        icon: 'technical.svg',
        title: 'Injection and File Upload',
        text: 'SQL and template injection, unrestricted upload, path traversal and unsafe deserialisation, tested manually.',
      },
      {
        icon: 'cms.svg',
        title: 'Dependency and CVE Scanning',
        text: 'Every library, plugin, theme and container base image checked against current vulnerability databases.',
      },
      {
        icon: 'cloud.svg',
        title: 'TLS, Headers and WAF',
        text: 'Certificate chain, protocol versions, HSTS and content security policy, plus firewall rule effectiveness.',
      },
      {
        icon: 'security.svg',
        title: 'Malware and Backdoor Detection',
        text: 'File-integrity comparison against a clean baseline to surface webshells, spam injections and hidden admin users.',
      },
      {
        icon: 'business.svg',
        title: 'Access Control Across Accounts',
        text: 'Hosting, DNS registrar, CMS, database and third-party dashboards reviewed for stale users and shared logins.',
      },
    ],
  },
  process: {
    eyebrow: 'Engagement Steps',
    heading: 'How an Audit Runs From Scope to Sign-Off',
    intro:
      'Testing is agreed in writing first so nobody is surprised by traffic or by the findings.',
    steps: [
      { title: 'Scoping and Rules of Engagement', text: 'Domains, accounts and the testing window are agreed in writing before any scan starts.' },
      { title: 'Automated and Manual Testing', text: 'Tooling maps the attack surface while manual review probes logic, auth and upload paths.' },
      { title: 'Evidence and Severity Rating', text: 'Each finding is reproduced, documented and rated for impact and exploitability.' },
      { title: 'Report Walkthrough', text: 'We present the results, answer questions and agree which fixes come first and why.' },
      { title: 'Remediation and Retest', text: 'Fixes are applied or reviewed, then retested and confirmed in a short closing note.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope of Work',
    heading: 'What the Audit Report Contains',
    intro:
      'The report is written for two audiences at once: a decision maker and the person holding the keyboard.',
    items: [
      'Executive summary written for non-technical readers',
      'Full findings mapped to OWASP Top 10 categories',
      'Severity rating and abuse scenario for each issue',
      'Configuration and patching guidance with effort notes',
      'Dependency and plugin vulnerability inventory',
      'TLS, DNS and security header configuration review',
      'Backup integrity and restore path assessment',
      'Retest confirmation once remediation is complete',
    ],
  },
  faqs: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'Security Audit Questions Buyers Ask',
    items: [
      {
        question: 'What is the difference between a security audit and a penetration test?',
        answer:
          'An audit reviews configuration, code paths and controls against a known standard and is usually broader but shallower. A penetration test simulates a determined attacker against a defined target and is deeper but narrower. Most business sites get more value from an audit first, then a targeted penetration test on anything handling payments or personal data.',
      },
      {
        question: 'Will testing take my website offline?',
        answer:
          'Testing is scheduled in an agreed window and designed not to disrupt normal traffic. Some injection and upload checks can create temporary artefacts, so we either test against a staging clone or clean up afterwards. Destructive tests such as denial-of-service simulation are excluded unless you ask for them specifically.',
      },
      {
        question: 'Do you need administrator credentials to run an audit?',
        answer:
          'It depends on the goal. An authenticated review with limited credentials finds far more because it sees the application as a logged-in user would. We can also run an unauthenticated external review that mirrors what an anonymous attacker sees. Many projects benefit from both, and the report separates the two sets of findings.',
      },
      {
        question: 'What happens if the audit finds something critical?',
        answer:
          'Critical findings are reported to you immediately rather than waiting for the written report. That includes a short containment note: what to disable, which credential to rotate, or what to take offline. The full remediation plan follows within the agreed reporting window so the fix is not improvised under pressure.',
      },
      {
        question: 'How often should a security audit be repeated?',
        answer:
          'An annual review suits most brochure and lead-generation sites. Ecommerce stores, customer portals and anything handling payment or health data benefit from a review every six months, plus a fresh check after any significant release, migration or change of hosting provider. Dependencies change constantly, so the review has a shelf life.',
      },
      {
        question: 'Can the audit help with GDPR or PCI obligations?',
        answer:
          'The technical evidence it produces supports those obligations, but an audit alone does not certify compliance. We document controls around data handling, access and encryption in a form your compliance adviser can reuse, and we are explicit about which requirements sit outside technical testing and remain your responsibility.',
      },
      {
        question: 'Does a clean audit mean the website is secure?',
        answer:
          'No. An audit is a snapshot at a point in time, limited by the scope and access provided. It reduces known risk substantially but cannot prove the absence of every flaw. We state the scope and limitations in the report, and combine the review with ongoing patching and monitoring so the position does not silently degrade.',
      },
    ],
  },
  related: [
    { label: 'Website Maintenance', href: '/website-maintenance' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
    { label: 'Custom Website Development', href: '/custom-website-development' },
    { label: 'CRM Development', href: '/crm-development' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default content
