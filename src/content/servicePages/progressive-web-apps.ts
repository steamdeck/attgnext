import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'progressive-web-apps',
  route: '/progressive-web-apps',
  breadcrumbTitle: 'Progressive Web Apps',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'Progressive Web Apps',
    metaTitle: 'Progressive Web App Development Company | AT Tech Global',
    metaDescription:
      'PWA development with service worker caching, offline support, install prompts and push notifications. One codebase, app-like speed, no app store wait.',
    keywords:
      'progressive web app development, pwa development, pwa company, offline web app, add to home screen, service worker',
    ogTitle: 'Progressive Web App Development | AT Tech Global',
    ogDescription:
      'Installable, offline-capable web applications delivered from the browser instead of an app store.',
  },
  intro: {
    eyebrow: 'Progressive Web Apps',
    heading: 'App Behaviour Delivered Through The Browser',
    paragraphs: [
      'Most businesses asking for an app do not need an app store listing. They need fast repeat visits, a home screen icon and something that keeps working when a delivery rider enters a basement with no signal. A progressive web app delivers exactly that from one codebase, installable straight from the browser, updatable instantly and free of store review cycles.',
      'Our PWA development work sits alongside the mobile and web teams at AT Tech Global, built in Gurgaon with client delivery managed from our Leicester office. We treat caching strategy, offline behaviour and install timing as engineering decisions rather than plugin toggles, then measure the result against Lighthouse scores and Core Web Vitals before calling the work finished.',
    ],
  },
  highlights: [
    {
      icon: 'offline.svg',
      title: 'Useful Without Signal',
      text: 'Cached shells, queued writes and clear offline states keep field staff working when connectivity drops mid-task.',
    },
    {
      icon: 'mobile.svg',
      title: 'One Build, Every Screen',
      text: 'A single responsive codebase serves phones, tablets and desktops with no separate iOS and Android release trains.',
    },
    {
      icon: 'speed.svg',
      title: 'Measured, Not Assumed',
      text: 'Install rate, repeat visit share and Core Web Vitals are tracked so the PWA claim is backed by numbers.',
    },
  ],
  features: {
    eyebrow: 'PWA Capabilities',
    heading: 'The Engineering Behind The Install Prompt',
    intro:
      'A manifest and an icon do not make a PWA. These are the layers that decide whether it feels like an app or a website with a badge.',
    items: [
      {
        icon: 'performance.svg',
        title: 'Service Worker Caching',
        text: 'Precached app shell, stale-while-revalidate for content, network-first for live data and versioned cache cleanup on deploy.',
      },
      {
        icon: 'offline.svg',
        title: 'Offline & Flaky Networks',
        text: 'IndexedDB queues for form submissions, optimistic UI, retry with backoff and conflict rules for data written while offline.',
      },
      {
        icon: 'app.svg',
        title: 'Installability & A2HS',
        text: 'Web app manifest, maskable icons, splash screens, standalone display mode and install prompts shown only after real engagement.',
      },
      {
        icon: 'push-notifications.svg',
        title: 'Push Notifications',
        text: 'Web push with FCM or VAPID keys, topic segmentation and quiet hours, plus the caveats that apply on iOS devices.',
      },
      {
        icon: 'ux.svg',
        title: 'App-Like Navigation',
        text: 'Instant route transitions, skeleton states, swipe-friendly gestures and preserved scroll position on back navigation.',
      },
      {
        icon: 'assessment.svg',
        title: 'PWA Audit & Scoring',
        text: 'Lighthouse checks for installability, HTTPS, offline fallback and vitals, with a written report of scores before and after.',
      },
    ],
  },
  process: {
    eyebrow: 'Delivery Steps',
    heading: 'Building A PWA That Earns Its Icon',
    intro:
      'Caching mistakes are expensive to unpick, so the strategy is written down and reviewed before the first service worker ships.',
    steps: [
      { title: 'Usage & Network Audit', text: 'Identify which screens matter most and what connectivity your real users actually have.' },
      { title: 'Caching Strategy Design', text: 'Decide per-route what is precached, revalidated, cached on demand or always fetched live.' },
      { title: 'Shell & Offline Build', text: 'App shell, offline fallback pages, queued writes and sync logic implemented and tested.' },
      { title: 'Install & Push Setup', text: 'Manifest, icons, splash screens, install prompt timing and push permissions wired up.' },
      { title: 'Measure & Tune', text: 'Lighthouse and field data reviewed, cache rules tightened and vitals regressions fixed.' },
    ],
  },
  deliverables: {
    eyebrow: 'What Is Delivered',
    heading: 'Output Of A PWA Engagement',
    intro:
      'Everything ships through your repository with the caching rules documented, so future developers do not guess at them.',
    items: [
      'Web app manifest with maskable icons and splash assets',
      'Service worker with documented per-route caching strategy',
      'Offline fallback screens and queued write handling',
      'Install prompt flow with engagement-based timing',
      'Web push notification setup with segmentation',
      'Lighthouse and Core Web Vitals report before and after',
      'Deployment pipeline with cache versioning on each release',
      'Analytics events for installs, offline use and repeat visits',
    ],
  },
  faqs: {
    eyebrow: 'PWA Questions',
    heading: 'Progressive Web App FAQ',
    items: [
      {
        question: 'What makes a web app a PWA rather than a normal website?',
        answer:
          'Three technical requirements plus one experience requirement. It must be served over HTTPS, register a service worker that can respond when the network fails, and provide a web app manifest with icons and a standalone display mode, which together make it installable. The experience requirement is that it feels app-like: fast navigation, no browser reloads and sensible behaviour on a poor connection.',
      },
      {
        question: 'When is a PWA genuinely not enough?',
        answer:
          'Choose native when you need heavy background processing, Bluetooth or USB access, advanced camera pipelines, geofencing that survives app termination, or deep platform APIs such as HealthKit. Native also wins when your audience expects an App Store listing, or when you depend on in-app purchase billing. For content, booking, dashboards and field data collection, a PWA usually covers everything.',
      },
      {
        question: 'Do push notifications work on iPhone?',
        answer:
          'They work, with conditions. On iOS 16.4 and later, web push is supported only after the user adds the site to the home screen through Safari, and permission must be requested from a user gesture. Notification delivery is generally less reliable than native APNs, and rich features such as notification actions are limited. We design campaigns so Android carries the reach and iOS users get email or in-app messaging.',
      },
      {
        question: 'How does offline mode handle data the user creates?',
        answer:
          'Writes go into an IndexedDB queue with a client-generated identifier, the interface updates optimistically, and the service worker replays the queue when connectivity returns. The server treats each replayed write idempotently so a duplicate cannot create two records. Conflicts follow a rule agreed per screen, usually last write wins with an audit entry, or a field-level merge for notes and checklists.',
      },
      {
        question: 'Will users actually install it?',
        answer:
          'Install rates vary widely, but timing is the biggest lever. Prompts fired on a first visit convert poorly, so we surface the offer after a repeat visit or a completed task such as a booking. A visible install button in the header and a home screen icon that looks intentional both help. Tracking installs as an analytics event shows within weeks whether the placement is working.',
      },
      {
        question: 'Can a PWA be listed in the app stores anyway?',
        answer:
          'Yes. Google Play accepts a Trusted Web Activity wrapper that packages your PWA as an Android app while keeping the same codebase and web rendering. Microsoft Store accepts PWAs directly. Apple does not offer an equivalent route, so an iOS presence means either a native shell around the same web views or accepting browser-only use on iPhones.',
      },
      {
        question: 'How much does PWA development cost compared with two native apps?',
        answer:
          'A single PWA codebase typically costs substantially less than separate iOS and Android apps, because there is one build, one test pass and one release process. Ongoing costs are lower too: no store submissions, no version fragmentation, and updates reach every user on refresh. The trade-off is limited access to certain device features and weaker push reliability on iOS.',
      },
      {
        question: 'Does a service worker hurt SEO?',
        answer:
          'Not when it is configured correctly, and it often helps. Search engines still receive server-rendered HTML, and faster repeat loads improve engagement signals. Problems come from aggressive caching of HTML that leaves crawlers or users on stale pages, or from serving an offline fallback with a 200 status for missing URLs. We use network-first rules for navigations and dedicated cache versioning for every deployment.',
      },
    ],
  },
  related: [
    { label: 'Mobile Application Development', href: '/service/mobile-application' },
    { label: 'App Development in Gurgaon', href: '/app-development-service-gurgaon' },
    { label: 'Responsive Website Design', href: '/responsive-website-design' },
    { label: 'Performance Optimization', href: '/performance-optimization' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'Contact AT Tech Global', href: '/contact' },
  ],
}

export default content
