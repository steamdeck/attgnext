import React from 'react';
import { Metadata } from 'next';
import BreadCumb from '../../../Components/Common/BreadCumb';
import DigitalMarketingAgencyGurugram from '../../../Components/BlogDetails/DigitalMarketingAgencyGurugram';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Gurugram | AT Tech Global',
  description: 'Looking for the best digital marketing agency in Gurugram? AT Tech Global offers comprehensive SEO, PPC, social media marketing, and content marketing services to help your business grow. Get expert digital marketing solutions in Gurugram.',
  keywords: 'digital marketing agency in gurugram, seo services gurugram, ppc advertising gurugram, social media marketing gurugram, digital marketing company gurugram, online marketing agency gurugram',
  openGraph: {
    title: 'Digital Marketing Agency in Gurugram | AT Tech Global',
    description: 'Expert digital marketing services in Gurugram. SEO, PPC, social media marketing, and more to help your business achieve online success.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/blog/digital-marketing-agency-in-gurugram',
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/e8c47297-dfab-468c-b9db-e8189acd8d35/1024/412"
        Title="Digital Marketing Agency in Gurugram"
      ></BreadCumb>         
      <DigitalMarketingAgencyGurugram></DigitalMarketingAgencyGurugram>       
    </div>
  );
};

export default page;
