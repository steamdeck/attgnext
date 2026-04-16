import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import DigitalMarketingContent from '../../Components/Services/DigitalMarketingContent';
import Contact2 from '../../Components/Contact/Contact2';
import { Metadata } from 'next';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/digital-marketing-gurgaon');
  if (metadata) {
    return convertToNextJsMetadata(metadata);
  }
  return {
    title: 'Digital Marketing Gurgaon | AT Tech Global',
    description: 'Expert Digital Marketing services in Gurgaon by AT Tech Global. Boost your online presence with our data-driven strategies and multi-channel approach.',
  };
}

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/591d45d7-b0e8-44aa-bbb1-b950e39425ba/1024/412"
        Title="Digital Marketing Gurgaon"
      />
      <DigitalMarketingContent />
      <Contact2 />
    </div>
  );
};

export default page;
