import { Metadata } from 'next'
import { getMetadata } from '@/lib/jsonDatabase'
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/blog')
  if (metadata) {
    return convertToNextJsMetadata(metadata)
  }
  return {
    title: 'Blog | Digital Marketing Insights by AT Tech Global',
    description: 'Read latest articles on digital marketing, SEO, web development, and online business strategies.',
    keywords: 'digital marketing blog, SEO tips, marketing strategies',
  }
}

import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Blog4 from '../../Components/Blog/Blog4';
import SEOHead from '../../Components/Common/SEOHead';

const page = () => {
  return (
    <>
      <SEOHead route="/blog" />
      <div>
            <BreadCumb
                bgimg="https://placeholdr.ai/3a3299b3-c1ed-414a-a934-5f005dfbf29a/1024/412"
                Title="Blog"
            ></BreadCumb>     
            <Blog4></Blog4>        
    </div>
    </>
  );
};

export default page;