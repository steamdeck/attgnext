import { Metadata } from 'next'
import { getMetadata } from '@/lib/jsonDatabase'
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/blog-sidebar')
  if (metadata) {
    return convertToNextJsMetadata(metadata)
  }
  return {
    title: 'Blog Sidebar | AT Tech Global',
    description: 'Explore our blog with a sidebar for easy navigation and additional content.',
    keywords: 'blog sidebar, digital marketing blog, at tech global',
  }
}

import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import BlogSidebar from '../../Components/BlogSidebar/BlogSidebar';
import SEOHead from '../../Components/Common/SEOHead';

const page = () => {
  return (
    <>
      <SEOHead route="/blog-sidebar" />
      <div>
            <BreadCumb
                bgimg="https://placeholdr.ai/e8c47297-dfab-468c-b9db-e8189acd8d35/1024/412"
                Title="Blog Sidebar"
            ></BreadCumb>    
            <BlogSidebar></BlogSidebar>       
    </div>
    </>
  );
};

export default page;