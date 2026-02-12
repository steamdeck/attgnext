import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Services4 from '../../Components/Services/Services4';
import Marquee2 from '../../Components/Marquee/Marquee2';
import Cta from '../../Components/Cta/Cta';
import Contact2 from '../../Components/Contact/Contact2';

export const metadata = {
  title: 'Our Digital Marketing Services | AT Tech Global',
  description: 'Comprehensive digital marketing services including SEO, web development, social media marketing, content marketing, and PPC advertising to grow your business.',
  keywords: 'digital marketing services, seo services, web development, social media marketing, ppc advertising',
  openGraph: {
    title: 'Digital Marketing Services | AT Tech Global',
    description: 'Professional digital marketing solutions to boost your business growth and online presence.',
    url: 'https://attechglobal.com/service',
    siteName: 'AT Tech Global',
    images: [
      {
        url: '/assets/img/services-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services | AT Tech Global',
    description: 'Professional digital marketing solutions to boost your business growth and online presence.',
    images: ['/assets/img/services-hero.jpg'],
  },
  alternates: {
    canonical: 'https://attechglobal.com/service',
  },
};

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="https://placeholders.io/600/400/information%20stcchnology%20services?style=photographic&seed=42"
                Title="Services"
            ></BreadCumb> 
            <Services4></Services4>      
            <Marquee2></Marquee2>   
            <Cta></Cta> 
            <Contact2></Contact2>      
    </div>
  );
};

export default page;