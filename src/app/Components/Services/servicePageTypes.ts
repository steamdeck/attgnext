/**
 * Shared content contract for the programmatic service pages.
 *
 * Every service page under src/content/servicePages/*.ts exports a single
 * `ServicePageContent` object. `ServicePageSections` renders it using only
 * class names that exist in src/app/assets/main.css, so the pages inherit the
 * theme styling automatically.
 */

/** A card with an icon, a short title and one supporting sentence. */
export interface ServiceIconItem {
  /** File name inside /public/assets/img/icons, e.g. "responsive.svg". */
  icon: IconName;
  title: string;
  /** 90-160 characters. */
  text: string;
}

/** One numbered process step. */
export interface ServiceStep {
  title: string;
  /**
   * Keep this under ~90 characters: the theme clamps step descriptions to two
   * lines (.cs_service_details .cs_process_step p).
   */
  text: string;
}

export interface ServiceFaq {
  question: string;
  /** 180-420 characters. */
  answer: string;
}

export interface ServiceLink {
  label: string;
  href: string;
}

export interface ServiceSeo {
  /** Human readable page name, used by the admin SEO panel. */
  pageName: string;
  /** 50-60 characters. */
  metaTitle: string;
  /** 140-160 characters. */
  metaDescription: string;
  /** Comma separated, 5-8 terms. */
  keywords: string;
  ogTitle: string;
  ogDescription: string;
}

export interface ServicePageContent {
  /** Directory name under src/app/(innerpage). */
  slug: string;
  /** Public route, always leading with a slash. */
  route: string;
  /** H1 shown in the breadcrumb banner. */
  breadcrumbTitle: string;
  /** Background image for the breadcrumb banner. */
  breadcrumbImage: string;
  seo: ServiceSeo;
  intro: {
    eyebrow: string;
    heading: string;
    /** Two paragraphs, 350-600 characters each. */
    paragraphs: string[];
  };
  /** Exactly 3 items. */
  highlights: ServiceIconItem[];
  features: {
    eyebrow: string;
    heading: string;
    intro: string;
    /** Exactly 6 items. */
    items: ServiceIconItem[];
  };
  process: {
    eyebrow: string;
    heading: string;
    intro: string;
    /** Exactly 5 steps. */
    steps: ServiceStep[];
  };
  deliverables: {
    eyebrow: string;
    heading: string;
    intro: string;
    /** 6-8 bullets, 40-90 characters each. */
    items: string[];
  };
  faqs: {
    eyebrow: string;
    heading: string;
    /** 6-8 questions. */
    items: ServiceFaq[];
  };
  /** 4-6 internal links to related pages. */
  related: ServiceLink[];
}

/**
 * Icon file names that exist in /public/assets/img/icons. Reusing this union
 * keeps content files from pointing at missing assets.
 */
export const SERVICE_ICONS = [
  'analytics.svg',
  'android.svg',
  'app.svg',
  'arrow_right.svg',
  'assessment.svg',
  'automation.svg',
  'brand.svg',
  'broadcast.svg',
  'bulb.svg',
  'business.svg',
  'cart.svg',
  'certificate.svg',
  'checkmark.svg',
  'cloud.svg',
  'cms.svg',
  'comment.svg',
  'content.svg',
  'cost.svg',
  'course.svg',
  'customer.svg',
  'custom.svg',
  'digital.svg',
  'dollar_currency.svg',
  'ecommerce.svg',
  'email.svg',
  'engagement.svg',
  'finance.svg',
  'flutter.svg',
  'growth_balance.svg',
  'head_phone.svg',
  'hr.svg',
  'inventory.svg',
  'ios.svg',
  'leads.svg',
  'like.svg',
  'local.svg',
  'location.svg',
  'manufacturing.svg',
  'mobile.svg',
  'mongodb.svg',
  'nextjs.svg',
  'nodejs.svg',
  'offline.svg',
  'off-page.svg',
  'on-page.svg',
  'payment.svg',
  'performance.svg',
  'php.svg',
  'pipeline.svg',
  'ppc.svg',
  'push-notifications.svg',
  'question_mark.svg',
  'ranking.svg',
  'react-native.svg',
  'react.svg',
  'responsive.svg',
  'roi.svg',
  'scalable.svg',
  'search.svg',
  'security.svg',
  'segmentation.svg',
  'seo.svg',
  'shipping.svg',
  'shopping.svg',
  'social.svg',
  'speed.svg',
  'strategy.svg',
  'student.svg',
  'support.svg',
  'technical.svg',
  'technology.svg',
  'template.svg',
  'traffic.svg',
  'trust.svg',
  'ux.svg',
  'ux-ui.svg',
  'visibility.svg',
  'watch.svg',
  'whatsapp.svg',
  'white-hat.svg',
  'wordpress.svg',
] as const

export type IconName = (typeof SERVICE_ICONS)[number]

/** Builds the public URL for an icon file name. */
export function iconPath(icon: IconName): string {
  return `/assets/img/icons/${icon}`
}
