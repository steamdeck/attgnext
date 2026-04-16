import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import WebDevelopmentContent from '../../Components/Services/WebDevelopmentContent';
import Contact2 from '../../Components/Contact/Contact2';
import { Metadata } from 'next';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/gurgaon-website-design');
  if (metadata) {
    return convertToNextJsMetadata(metadata);
  }
  return {
    title: 'Gurgaon Website Design | AT Tech Global',
    description: 'Expert Gurgaon Website Design services by AT Tech Global. We create stunning, responsive websites that drive business growth.',
  };
}

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/591d45d7-b0e8-44aa-bbb1-b950e39425ba/1024/412"
        Title="Gurgaon Website Design"
      />
      <WebDevelopmentContent />
      <Contact2 />
    </div>
  );
};

export default page;
