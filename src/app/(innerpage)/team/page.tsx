import { Metadata } from 'next'
import { getMetadata } from '@/lib/jsonDatabase'
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/team')
  if (metadata) {
    return convertToNextJsMetadata(metadata)
  }
  return {
    title: 'Our Team | AT Tech Global',
    description: 'Meet the expert team behind AT Tech Global. Our professionals are dedicated to delivering top-notch digital marketing solutions.',
    keywords: 'our team, digital marketing experts, AT Tech Global',
  }
}

import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Team3 from '../../Components/Team/Team3';
import SEOHead from '../../Components/Common/SEOHead';

const page = () => {
  return (
    <>
      <SEOHead route="/team" />
      <div>
             <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Team"
            ></BreadCumb> 
            <Team3></Team3>         
    </div>
    </>
  );
};

export default page;