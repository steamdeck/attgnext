import { Metadata } from 'next'
import { getMetadata } from '@/lib/jsonDatabase'
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/faq')
  if (metadata) {
    return convertToNextJsMetadata(metadata)
  }
  return {
    title: 'Frequently Asked Questions | AT Tech Global',
    description: 'Find answers to common questions about AT Tech Global, our services, and digital marketing.',
    keywords: 'faq, frequently asked questions, digital marketing questions, AT Tech Global',
  }
}

import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Faq1 from '../../Components/Faq/Faq1';
import SEOHead from '../../Components/Common/SEOHead';

const page = () => {
  return (
    <>
      <SEOHead route="/faq" />
      <div>
               <BreadCumb
                bgimg="https://placeholdr.ai/fff247ec-b78f-4f20-a201-28b993c3fa80/1024/412"
                Title="FAQ's"
            ></BreadCumb>    
            <Faq1></Faq1>      
    </div>
    </>
  );
};

export default page;