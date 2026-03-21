import { Metadata } from 'next'
import { getMetadata } from '@/lib/jsonDatabase'
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/pricing')
  if (metadata) {
    return convertToNextJsMetadata(metadata)
  }
  return {
    title: 'Our Pricing Plans | AT Tech Global',
    description: 'Explore the flexible and affordable pricing plans for digital marketing and web development services offered by AT Tech Global.',
    keywords: 'pricing plans, digital marketing cost, web development pricing, AT Tech Global',
  }
}

import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Pricing1 from '../../Components/Pricing/Pricing1';
import SEOHead from '../../Components/Common/SEOHead';

const page = () => {
  return (
    <>
      <SEOHead route="/pricing" />
      <div>
             <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Our Pricing"
            ></BreadCumb>  
            <Pricing1></Pricing1>         
    </div>
    </>
  );
};

export default page;