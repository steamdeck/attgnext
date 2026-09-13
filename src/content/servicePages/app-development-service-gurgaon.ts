import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: 'app-development-service-gurgaon',
  route: '/app-development-service-gurgaon',
  breadcrumbTitle: 'App Development Service in Gurgaon',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: {
    pageName: 'App Development Service in Gurgaon',
    metaTitle: 'App Development Service in Gurgaon | AT Tech Global',
    metaDescription:
      'Native iOS, Android, Flutter and React Native app development in Gurgaon. MVP scoping, API design, store submission and post-launch support that ships.',
    keywords:
      'app development service gurgaon, mobile app development gurgaon, flutter app developers, react native development, ios android app company gurgaon',
    ogTitle: 'App Development Service in Gurgaon | AT Tech Global',
    ogDescription:
      'MVPs in six to ten weeks, full product builds in three to five months, with store submission and maintenance handled end to end.',
  },
  intro: {
    eyebrow: 'Mobile App Development',
    heading: 'Mobile Apps Engineered for Real Users in Gurgaon',
    paragraphs: [
      'Most Gurgaon businesses do not need an app for its own sake. They need a booking flow that still works at eleven at night, a field team logging jobs with no signal, or a loyalty wallet that brings customers back without a phone call. Our app development service in Gurgaon begins by working out whether that job belongs in a native app, a progressive web app or a browser tool, because that one decision drives your budget, your launch date and how easily you can change course afterwards.',
      'We build in the open. You approve clickable screens before a line of production code exists, then install a testable build on your own handset within the first few weeks. A focused MVP usually ships in six to ten weeks using Flutter or React Native from a single codebase, or Swift and Kotlin when platform-level performance genuinely matters. Full products with payments, admin tooling and third-party integrations typically run three to five months from kickoff to store approval.',
    ],
  },
  highlights: [
    {
      icon: 'flutter.svg',
      title: 'One Codebase, Two Stores',
      text: 'Flutter and React Native ship to iOS and Android together, so duplicate work disappears and features stay in step.',
    },
    {
      icon: 'strategy.svg',
      title: 'MVPs Scoped Without Padding',
      text: 'We cut the feature list down to what actually proves the idea, then add the rest only after real usage data arrives.',
    },
    {
      icon: 'support.svg',
      title: 'Support Well Past Approval',
      text: 'Crash monitoring, OS version updates and release management continue after launch, which is when apps really need care.',
    },
  ],
  features: {
    eyebrow: 'Capabilities',
    heading: 'What Our Mobile App Team Builds',
    intro:
      'Whether you are replacing a manual process or launching a consumer product, the same engineering disciplines apply.',
    items: [
      {
        icon: 'ios.svg',
        title: 'Native iOS and Android',
        text: 'Swift and Kotlin builds for camera, Bluetooth, background location and other hardware features that wrappers handle badly.',
      },
      {
        icon: 'react-native.svg',
        title: 'Cross-Platform Delivery',
        text: 'Flutter and React Native projects that share business logic across both stores while keeping each platform looking native.',
      },
      {
        icon: 'nodejs.svg',
        title: 'Backend and API Design',
        text: 'Documented REST or GraphQL endpoints, token based authentication, rate limiting and versioning that survives future releases.',
      },
      {
        icon: 'push-notifications.svg',
        title: 'Push and In-App Messaging',
        text: 'Segmented notifications through Firebase or OneSignal, with deep links that open the right screen instead of the home tab.',
      },
      {
        icon: 'analytics.svg',
        title: 'Analytics and Crash Reporting',
        text: 'Event tracking for onboarding, checkout and retention, plus symbolicated crash logs so defects are fixed from evidence.',
      },
      {
        icon: 'app.svg',
        title: 'Store Listing and Submission',
        text: 'Screenshots, descriptions, privacy declarations and review responses handled for both the App Store and Google Play.',
      },
    ],
  },
  process: {
    eyebrow: 'Delivery Path',
    heading: 'How an App Project Runs at AT Tech Global',
    intro:
      'Sprint based delivery with an installable build in your hands early, so feedback arrives while changes are still cheap.',
    steps: [
      { title: 'Scope and Platform Choice', text: 'We define the MVP feature set and choose native, Flutter or React Native.' },
      { title: 'Flows and Clickable Prototype', text: 'Every core journey is designed as tappable screens and tested with users.' },
      { title: 'Design and API Contracts', text: 'Visual design is locked beside the API schema the app will consume.' },
      { title: 'Build and Device Testing', text: 'Two-week sprints ship installable builds through TestFlight and Play Console.' },
      { title: 'Store Launch and Care', text: 'Review submission, release monitoring and a plan for future app updates.' },
    ],
  },
  deliverables: {
    eyebrow: 'Scope of Work',
    heading: 'What You Receive at Handover',
    intro:
      'App engagements are quoted as fixed stages, so you can stop, review or extend after each milestone instead of committing blind.',
    items: [
      'Complete source code for iOS, Android and backend services',
      'Signed release builds uploaded to both app stores',
      'API documentation with authentication and error handling',
      'Push notification and deep link configuration files',
      'Analytics dashboards tracking the events that matter',
      'Admin panel or CMS for managing app content',
      'Store listing copy, screenshots and privacy declarations',
      'A written handover session covering builds and releases',
    ],
  },
  faqs: {
    eyebrow: 'Frequently Asked Questions',
    heading: 'App Development Questions We Hear Weekly',
    items: [
      {
        question: 'Should we build native apps or use Flutter or React Native?',
        answer:
          'Choose cross-platform when the app is mostly forms, lists, payments and content, which covers most business and marketplace products. Choose native when you depend on heavy camera processing, background GPS, Bluetooth peripherals or buttery animation. Many teams start cross-platform to validate demand and only rewrite the demanding screens natively once usage justifies the cost.',
      },
      {
        question: 'How long does it take to build an MVP app?',
        answer:
          'A tightly scoped MVP with login, a core transaction flow, notifications and one admin screen typically takes six to ten weeks from approved designs. The variable is rarely development speed, it is how quickly your team can confirm scope and supply content. Adding payments, multi-role permissions or third-party integrations usually adds two to four weeks.',
      },
      {
        question: 'What does it cost to develop a mobile app in Gurgaon?',
        answer:
          'Cost tracks complexity far more than platform count. A straightforward single-purpose app sits at the lower end, while marketplaces with chat, geolocation and payouts sit at the upper end. We quote in fixed stages so you can release an MVP first and decide on phase two with real user data rather than a guess.',
      },
      {
        question: 'Do you handle App Store and Play Store submission?',
        answer:
          'Yes, and it is more involved than most founders expect. We prepare listings, screenshots, privacy declarations, data safety forms and the review responses for both stores, then manage the appeals process if a submission is rejected. Apple developer account setup takes the longest when a company is new, so we start that paperwork early.',
      },
      {
        question: 'Will the app work offline in areas with weak signal?',
        answer:
          'Where the workflow demands it, yes. We use local storage or SQLite with a sync queue so staff can capture visits, inspections and deliveries without connectivity, then reconcile automatically once the device reconnects. Offline support is a scope decision made at the start, not a feature that can be bolted on at the end.',
      },
      {
        question: 'What happens after the app goes live?',
        answer:
          'Every major OS release can break an app that nobody maintains, so we offer a monthly care plan covering crash monitoring, dependency upgrades, store compliance updates and small feature releases. Clients who prefer to run in-house receive the full repository, build instructions and a recorded walkthrough of the release process.',
      },
      {
        question: 'Can you improve an app that another team built?',
        answer:
          'Often, yes. We start with a technical audit of the codebase, dependency health, store crash reports and analytics, then report on what is salvageable. Some apps need targeted repairs and a performance pass, while others are cheaper to rebuild than to stabilise, and we will tell you which one you are looking at before quoting.',
      },
    ],
  },
  related: [
    { label: 'Mobile Application Development', href: '/service/mobile-application' },
    { label: 'Progressive Web Apps', href: '/progressive-web-apps' },
    { label: 'API Integration', href: '/api-integration' },
    { label: 'SaaS Development', href: '/saas-development' },
    { label: 'Website Maintenance', href: '/website-maintenance' },
    { label: 'Web Development in Gurgaon', href: '/gurgaon-web-development' },
  ],
}

export default content
