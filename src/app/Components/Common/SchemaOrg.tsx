import React from 'react';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ReviewRating {
  ratingValue: string | number;
  reviewCount: string | number;
  bestRating?: string | number;
  worstRating?: string | number;
}

interface SchemaOrgProps {
  type: 'website' | 'organization' | 'faq' | 'breadcrumb' | 'review';
  data?: any;
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({ type, data }) => {
  const baseUrl = 'https://www.attechglobal.com';
  
  let schemaData: any = null;

  switch (type) {
    case 'website':
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': data?.name || 'AT Tech Global',
        'url': baseUrl,
        'potentialAction': {
          '@type': 'SearchAction',
          'target': `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      };
      break;

    case 'organization':
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'AT Tech Global',
        'url': baseUrl,
        'logo': `${baseUrl}/assets/img/logo-3.png`,
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': data?.telephone || '+91-9953444458',
          'contactType': 'customer service',
          'areaServed': ['IN', 'GB'],
          'availableLanguage': ['English', 'Hindi']
        },
        'sameAs': data?.sameAs || [
          'https://www.facebook.com/attechglobal',
          'https://twitter.com/attechglobal',
          'https://www.linkedin.com/company/at-tech-global',
          'https://www.instagram.com/attechglobal'
        ]
      };
      break;

    case 'faq':
      if (data?.faqs) {
        schemaData = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': data.faqs.map((faq: FAQItem) => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        };
      }
      break;

    case 'breadcrumb':
      if (data?.items) {
        schemaData = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': data.items.map((item: BreadcrumbItem, index: number) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': item.name,
            'item': item.item.startsWith('http') ? item.item : `${baseUrl}${item.item}`
          }))
        };
      }
      break;

    case 'review':
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': data?.serviceName || 'Web Development Service',
        'provider': {
          '@type': 'Organization',
          'name': 'AT Tech Global'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': data?.ratingValue || '4.9',
          'reviewCount': data?.reviewCount || '421',
          'bestRating': data?.bestRating || '5',
          'worstRating': data?.worstRating || '1'
        }
      };
      break;

    default:
      return null;
  }

  if (!schemaData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaOrg;
