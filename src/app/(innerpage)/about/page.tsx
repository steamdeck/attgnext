import { Metadata } from 'next';
import ModernAboutHero from '../../Components/About/ModernAboutHero';
import ModernMissionVision from '../../Components/About/ModernMissionVision';
import ModernWhyChooseUs from '../../Components/About/ModernWhyChooseUs';
import ModernTimeline from '../../Components/About/ModernTimeline';
import ModernTeam from '../../Components/About/ModernTeam';
import ModernFAQ from '../../Components/About/ModernFAQ';
import ModernCTA from '../../Components/About/ModernCTA';

// SEO Metadata
export const metadata: Metadata = {
  title: 'About AT Tech Global | Your Partner in Digital Excellence',
  description: 'Discover the story behind AT Tech Global. Since 2020, we\'ve helped 500+ businesses achieve digital success through innovative marketing strategies, creative solutions, and unwavering commitment to results.',
  keywords: [
    'about AT Tech Global',
    'digital marketing agency',
    'our story',
    'digital marketing experts',
    'business growth partners',
    'digital transformation agency',
    'SEO marketing company',
    'social media agency',
    'web development experts',
    'digital strategy'
  ],
  authors: [{ name: 'AT Tech Global' }],
  creator: 'AT Tech Global',
  publisher: 'AT Tech Global',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'About AT Tech Global - Your Digital Success Partner',
    description: 'Meet the team transforming businesses through strategic digital marketing. Learn our story, explore our values, and see why 500+ businesses trust us with their digital growth.',
    url: 'https://attechglobal.com/about',
    siteName: 'AT Tech Global',
    images: [
      {
        url: 'https://attechglobal.com/assets/img/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AT Tech Global - Digital Marketing Agency Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About AT Tech Global - Your Digital Success Partner',
    description: 'Meet the team transforming businesses through strategic digital marketing. Discover our story, values, and commitment to your success.',
    images: ['https://attechglobal.com/assets/img/about-twitter-image.jpg'],
    creator: '@attechglobal',
  },
  alternates: {
    canonical: 'https://attechglobal.com/about',
  },
  other: {
    'article:author': 'AT Tech Global',
    'article:section': 'About',
    'og:image:alt': 'AT Tech Global Digital Marketing Agency Team',
  },
};

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
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div style={{ margin: 0, padding: 0 }}>
        {/* Modern Hero Section */}
        <ModernAboutHero />
        
        {/* Mission, Vision & Values */}
        <ModernMissionVision />
        
        {/* Why Choose Us */}
        <ModernWhyChooseUs />
        
        {/* Company Timeline */}
        <ModernTimeline />
        
        {/* Our Team */}
        <ModernTeam />
        
        {/* FAQ Section */}
        <ModernFAQ />
        
        {/* Call to Action */}
        <ModernCTA />
      </div>
    </>
  );
};

export default AboutPage;