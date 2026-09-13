# Service page content authoring spec

Every file in this folder is a content module for one service page. The route
file and SEO record are generated from it by `scripts/generate-service-pages.js`,
so **the content module is the only file you write**.

## File shape

Exactly this structure — copy the shape from `static-website-design.ts`:

```ts
import type { ServicePageContent } from '@/app/Components/Services/servicePageTypes'

const content: ServicePageContent = {
  slug: '<directory name, no slashes>',
  route: '/<public route>',
  breadcrumbTitle: '<H1 shown in the banner>',
  breadcrumbImage: '/assets/img/page_header.jpg',
  seo: { ... },
  intro: { ... },
  highlights: [ /* exactly 3 */ ],
  features: { ... /* items: exactly 6 */ },
  process: { ... /* steps: exactly 5 */ },
  deliverables: { ... /* items: 6-8 */ },
  faqs: { ... /* items: 6-8 */ },
  related: [ /* 4-6 links */ ],
}

export default content
```

Rules:

- The file must end with `export default content`.
- `route` must equal `/<slug>` for root pages, or end with `/<slug>` for nested
  pages (for example slug `web-development`, route `/service/web-development`).
- Use only the icon file names listed in `SERVICE_ICONS` inside
  `src/app/Components/Services/servicePageTypes.ts`. Do not invent icon names.
- Never use an apostrophe inside a single-quoted string without escaping it, and
  avoid raw `'` in prose where a rewrite reads more naturally.

## Content requirements

| Field | Requirement |
| --- | --- |
| `seo.metaTitle` | 50-60 characters, includes the primary keyword and `AT Tech Global` where it fits |
| `seo.metaDescription` | **140-160 characters** — this is validated |
| `seo.keywords` | 5-8 comma separated terms |
| `intro.paragraphs` | exactly 2 paragraphs, 350-600 characters each |
| `highlights` | exactly 3 icon items, `text` 90-160 characters |
| `features.items` | exactly 6 icon items, `text` 90-160 characters |
| `process.steps` | exactly 5 steps, `text` **under 90 characters** (the theme clamps it to two lines) |
| `deliverables.items` | 6-8 bullets, 40-90 characters each |
| `faqs.items` | 6-8 Q&A pairs, each `answer` 180-420 characters |
| `related` | 4-6 internal links, `href` chosen from the valid route list below |

## Writing quality bar

- Write for the specific service. Two pages in this set must never share a
  sentence, a heading, a FAQ or a step title.
- Lead with the customer's problem, then the mechanism, then the outcome. Avoid
  hollow filler such as "we are a leading company with a team of experts".
- Prefer concrete specifics: named technologies, delivery timelines, measurable
  outcomes, real deliverables.
- Vary sentence openings and section headings across pages. Do not reuse the
  same `eyebrow` values on unrelated pages.
- Reference AT Tech Global's real position where it is relevant: a Gurgaon
  (Gurugram) based studio with a UK presence in Leicester, 14+ years of
  experience, rooted in web design, web development, ecommerce, ERP/CRM and
  digital marketing.
- FAQs must answer something a buyer genuinely asks, and the answer must be
  useful even if the reader never contacts us.

## Valid `related` hrefs

Use only these, and do not link a page to itself:

```
/about
/contact
/pricing
/portfolio-website-design
/business-profile-design
/website-designing
/website-designing-gurgaon
/gurgaon-website-design
/responsive-website-design
/responsive-website-design-gurgaon
/static-website-design
/dynamic-website-design
/mobile-friendly-website
/psd-to-html-design
/custom-website-development
/multi-vendor-website-development
/informative-website-design
/corporate-website-design
/website-redesigning
/startup-website-design
/business-profile-design
/cms-development
/custom-cms-development
/crm-development
/saas-development
/app-development-service-gurgaon
/progressive-web-apps
/api-integration
/seo-services
/website-maintenance
/performance-optimization
/security-audits
/free-website-design
/gurgaon-free-web-design
/gurgaon-digital-marketing
/gurgaon-website-designer
/website-design-service
/website-design-service-gurgaon
/gurgaon-web-development
/web-development-gurgaon
/digital-marketing-gurgaon
/service
/service/seo
/service/smm
/service/ppc
/service/ecommerce
/service/crm
/service/erp
/service/lms
/service/mobile-application
/service/digital-marketing
/service/email-marketing
/service/whatsapp-marketing
/service/web-development
/service/quickcart-development
/service/ecommerce-development
/service/erp-development
/business-transformation
```

## Checking your work

After writing the modules, run:

```bash
node scripts/generate-service-pages.js --dry
```

It validates every module (counts, icon files, meta description length, route
consistency) and reports problems without writing anything. Fix every reported
problem before finishing. Then run the same command without `--dry` to generate
the route files.
