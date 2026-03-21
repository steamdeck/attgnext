import { Metadata } from 'next';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/about');
  if (metadata) {
    return convertToNextJsMetadata(metadata);
  }
  return {
    title: 'About AT Tech Global - Your Digital Success Partner',
    description: "We've helped 500+ businesses achieve digital success through innovative marketing strategies, creative solutions, and unwavering commitment to results.",
    keywords: ['about AT Tech Global', 'digital marketing agency', 'our story', 'digital marketing experts', 'business growth partners', 'digital transformation agency', 'SEO marketing company', 'social media agency', 'web development experts', 'digital strategy'],
  };
}

import ModernAboutHero from '../../Components/About/ModernAboutHero';
import ModernWhyChooseUs from '../../Components/About/ModernWhyChooseUs';
import ModernTimeline from '../../Components/About/ModernTimeline';
import ModernTeam from '../../Components/About/ModernTeam';
import ModernCTA from '../../Components/About/ModernCTA';
import SEOHead from '../../Components/Common/SEOHead';
import AboutClientComponents from '../../Components/About/AboutClientComponents';

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AT Tech Global",
  "alternateName": "AT Tech Global - Digital Marketing Excellence",
  "url": "https://attechglobal.com",
  "logo": "https://attechglobal.com/assets/img/logo.png",
  "description": "AT Tech Global is a full-service digital marketing agency specializing in SEO, social media marketing, web development, and comprehensive digital transformation strategies. We partner with businesses worldwide to drive measurable growth and lasting success.",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "AT Tech Global Team"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Global"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://facebook.com/attechglobal",
    "https://twitter.com/attechglobal",
    "https://linkedin.com/company/attechglobal",
    "https://instagram.com/attechglobal",
    "https://www.youtube.com/@ATTechGlobal"
  ],
  "serviceArea": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Search Engine Optimization (SEO)",
          "description": "Comprehensive SEO services to improve search rankings and organic traffic"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Marketing",
          "description": "Strategic social media campaigns across all major platforms"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom website development and optimization services"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5"
  }
};

const AboutPage = () => {
  return (
    <>
      <SEOHead route="/about" />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div style={{ margin: 0, padding: 0 }}>
        {/* Modern Hero Section */}
        <ModernAboutHero />
        
        {/* Mission, Vision & Values and FAQ Section */}
        <AboutClientComponents />
        
        {/* Call to Action */}
        <ModernCTA />
      </div>
    </>
  );
};

export default AboutPage;