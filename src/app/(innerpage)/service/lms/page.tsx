import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import LMSContent from '../../../Components/Services/LMSContent';
import Contact2 from '../../../Components/Contact/Contact2';

import { Metadata } from 'next';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/service/lms');
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
          bgimg="https://placeholdr.ai/42845905-086d-44ee-8f76-14681ce988f7/1024/412"
          Title="Learning Management System"
        />
        <LMSContent />
        <Contact2 />
      </div>
    </>
  );
};

export default page;
