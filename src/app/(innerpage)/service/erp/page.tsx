import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import ERPContent from '../../../Components/Services/ERPContent';
import Contact2 from '../../../Components/Contact/Contact2';

import { Metadata } from 'next';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/service/erp');
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
          bgimg="https://placeholdr.ai/0ab0611b-98a1-4731-91c3-c185041f96cb/1024/412"
          Title="ERP Development"
        />
        <ERPContent />
        <Contact2 />
      </div>
    </>
  );
};

export default page;
