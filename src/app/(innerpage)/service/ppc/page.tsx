import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import PPCContent from '../../../Components/Services/PPCContent';
import Contact2 from '../../../Components/Contact/Contact2';

import { Metadata } from 'next';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/service/ppc');
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
          bgimg="https://placeholdr.ai/d66dd1f9-ad78-4896-b869-0404c4885786/1024/412"
          Title="Pay Per Click Advertising"
        />
        <PPCContent />
        <Contact2 />
      </div>
    </>
  );
};

export default page;
