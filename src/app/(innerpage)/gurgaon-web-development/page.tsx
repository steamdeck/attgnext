import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import WebDevelopmentContent from '../../Components/Services/WebDevelopmentContent';
import Contact2 from '../../Components/Contact/Contact2';
import { Metadata } from 'next';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/gurgaon-web-development');
  if (metadata) {
    return convertToNextJsMetadata(metadata);
  }
  return {
    title: 'Gurgaon Web Development | AT Tech Global',
    description: 'Premier Gurgaon Web Development agency. We deliver high-performance websites and web applications tailored to your business goals.',
  };
}

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/591d45d7-b0e8-44aa-bbb1-b950e39425ba/1024/412"
        Title="Gurgaon Web Development"
      />
      <WebDevelopmentContent />
      <Contact2 />
    </div>
  );
};

export default page;
