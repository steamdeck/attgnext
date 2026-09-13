import React from 'react';
import { Metadata } from 'next';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServicePageSections from '@/app/Components/Services/ServicePageSections';
import Contact2 from '@/app/Components/Contact/Contact2';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';
import content from '@/content/servicePages/informative-website-design';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/informative-website-design');
  if (metadata) {
    return convertToNextJsMetadata(metadata);
  }
  return {
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    keywords: content.seo.keywords
      .split(',')
      .map((keyword) => keyword.trim())
      .filter(Boolean),
    alternates: { canonical: `https://www.attechglobal.com/informative-website-design` },
  };
}

const page = () => {
  return (
    <div>
      <BreadCumb bgimg={content.breadcrumbImage} Title={content.breadcrumbTitle} />
      <ServicePageSections content={content} />
      <Contact2 />
    </div>
  );
};

export default page;
