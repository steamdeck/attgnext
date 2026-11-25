import React from 'react';
import { Metadata } from 'next';
import BreadCumb from '../../../Components/Common/BreadCumb';
import WebsiteCostIndia2026 from '../../../Components/BlogDetails/WebsiteCostIndia2026';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/blog/website-development-cost-india-2026');
  if (metadata) {
    return convertToNextJsMetadata(metadata);
  }
  // Fallback metadata if not found in JSON
  return {
    title: 'Website Development Cost in India (2026): Gurgaon Price Guide | AT Tech Global',
    description:
      'How much does a website cost in India in 2026? Business websites ₹25,000–₹80,000, eCommerce ₹60,000–₹3,00,000+. Full breakdown by type, cost drivers & hidden charges.',
    keywords:
      'website development cost india, website cost in india, website design cost gurgaon, ecommerce website cost india, website maintenance cost india, how much does a website cost',
    openGraph: {
      title: 'Website Development Cost in India (2026): Price Guide by Project Type',
      description:
        'Business sites ₹25,000–₹80,000 · eCommerce ₹60,000–₹3,00,000+ · Web apps from ₹1,50,000. Cost drivers, hidden charges & quote checklist.',
      type: 'article',
      locale: 'en_US',
      images: ['https://www.attechglobal.com/assets/img/website-development-cost-india-2026.jpg'],
    },
    alternates: {
      canonical: '/blog/website-development-cost-india-2026',
    },
  };
}

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/e8c47297-dfab-468c-b9db-e8189acd8d35/1024/412"
        Title="Website Development Cost in India (2026)"
      ></BreadCumb>
      <WebsiteCostIndia2026></WebsiteCostIndia2026>
    </div>
  );
};

export default page;
