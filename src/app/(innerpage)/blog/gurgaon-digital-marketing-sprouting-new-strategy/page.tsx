import React from 'react';
import { Metadata } from 'next';
import BreadCumb from '../../../Components/Common/BreadCumb';
import GurgaonDigitalMarketingStrategy from '../../../Components/BlogDetails/GurgaonDigitalMarketingStrategy';

export const metadata: Metadata = {
  title: 'Gurgaon Digital Marketing Sprouting in New Strategy | AT Tech Global',
  description: 'Rank your company at the top in Gurgaon digital marketing with AT Tech Global\'s new intense services. Expert digital marketing across India.',
  keywords: 'gurgaon digital marketing, digital marketing services gurgaon, AT Tech Global, online growth strategy, digital business gurgaon, seo services gurgaon, ppc gurgaon',
  openGraph: {
    title: 'Gurgaon Digital Marketing Sprouting in New Strategy | AT Tech Global',
    description: 'Do you also want to rank your Company & Product at the top in Gurgaon digital marketing? Then AT Tech Global is ready to help you with its new intense services.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/blog/gurgaon-digital-marketing-sprouting-new-strategy',
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/e8c47297-dfab-468c-b9db-e8189acd8d35/1024/412"
        Title="Gurgaon Digital Marketing Sprouting in New Strategy"
      ></BreadCumb>         
      <GurgaonDigitalMarketingStrategy></GurgaonDigitalMarketingStrategy>       
    </div>
  );
};

export default page;
