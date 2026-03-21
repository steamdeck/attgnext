import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import DigitalMarketingContent from '../../../Components/Services/DigitalMarketingContent';
import Contact2 from '../../../Components/Contact/Contact2';

import { Metadata } from 'next';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/service/digital-marketing');
  if (metadata) {
    return convertToNextJsMetadata(metadata);
  }
  return {
    title: 'Service | AT Tech Global',
  };
}


const page = () => {
  return (
    <>
      <div>
        <BreadCumb
          bgimg="https://placeholdr.ai/6ce1fa15-f73c-4f1f-8ab5-9f0013077f58/1024/412"
          Title="Digital Marketing Services"
        />
        <DigitalMarketingContent />
        <Contact2 />
      </div>
    </>
  );
};

export default page;
