import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import WebDevelopmentContent from '../../Components/Services/WebDevelopmentContent';
import Contact2 from '../../Components/Contact/Contact2';
import { Metadata } from 'next';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/website-design-service-gurgaon');
  if (metadata) {
    return convertToNextJsMetadata(metadata);
  }
  return {
    title: 'Website Design Service Gurgaon | AT Tech Global',
    description: 'Top-tier Website Design Service in Gurgaon. AT Tech Global provides innovative and responsive web designs for local and global businesses.',
  };
}

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/591d45d7-b0e8-44aa-bbb1-b950e39425ba/1024/412"
        Title="Website Design Service Gurgaon"
      />
      <WebDevelopmentContent />
      <Contact2 />
    </div>
  );
};

export default page;
