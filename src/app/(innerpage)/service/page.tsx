import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Services4 from '../../Components/Services/Services4';
import Marquee2 from '../../Components/Marquee/Marquee2';
import Cta from '../../Components/Cta/Cta';
import Contact2 from '../../Components/Contact/Contact2';
import { Metadata } from 'next';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/service');
  if (metadata) {
    return convertToNextJsMetadata(metadata);
  }
  return {
    title: 'Our Digital Marketing Services | AT Tech Global',
    description: 'Comprehensive digital marketing services including SEO, web development, social media marketing, content marketing, and PPC advertising to grow your business.',
    keywords: 'digital marketing services, seo services, web development, social media marketing, ppc advertising',
  };
}

import SEOHead from '../../Components/Common/SEOHead';

const page = () => {
  return (
    <>
      <SEOHead route="/service" />
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
    </>
  );
};

export default page;