import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import WebDevelopmentContent from '../../Components/Services/WebDevelopmentContent';
import Contact2 from '../../Components/Contact/Contact2';
import { Metadata } from 'next';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/web-service');
  if (metadata) {
    return convertToNextJsMetadata(metadata);
  }
  return {
    title: 'Web Service | AT Tech Global',
    description: 'Comprehensive Web Service by AT Tech Global. From development to maintenance, we provide end-to-end web solutions for your business.',
  };
}

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/591d45d7-b0e8-44aa-bbb1-b950e39425ba/1024/412"
        Title="Web Service"
      />
      <WebDevelopmentContent />
      <Contact2 />
    </div>
  );
};

export default page;
