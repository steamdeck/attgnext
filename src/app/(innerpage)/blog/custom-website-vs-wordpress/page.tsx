import React from 'react';
import { Metadata } from 'next';
import BreadCumb from '../../../Components/Common/BreadCumb';
import CustomVsWordpress2026 from '../../../Components/BlogDetails/CustomVsWordpress2026';
import { getMetadata } from '@/lib/jsonDatabase';
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/blog/custom-website-vs-wordpress');
  if (metadata) {
    return convertToNextJsMetadata(metadata);
  }
  // Fallback metadata if not found in JSON
  return {
    title: 'Custom Website vs WordPress (2026): Which Is Best for You? | AT Tech Global',
    description:
      'Custom website vs WordPress in India: upfront cost, 3-year ownership, SEO, speed & security compared. Find which platform wins for your business in 2026.',
    keywords:
      'custom website vs wordpress, wordpress vs custom website india, wordpress vs custom development cost, wordpress vs custom website seo, is wordpress good for business website',
    openGraph: {
      title: 'Custom Website vs WordPress in India (2026): Cost, SEO & Which to Choose',
      description:
        'WordPress from ₹25,000 · Custom from ₹60,000 · 3-year ownership math, SEO, speed & security compared with an honest decision framework.',
      type: 'article',
      locale: 'en_US',
      images: ['https://www.attechglobal.com/assets/img/custom-website-vs-wordpress-cost-2026.jpg'],
    },
    alternates: {
      canonical: '/blog/custom-website-vs-wordpress',
    },
  };
}

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/e8c47297-dfab-468c-b9db-e8189acd8d35/1024/412"
        Title="Custom Website vs WordPress (2026)"
      ></BreadCumb>
      <CustomVsWordpress2026></CustomVsWordpress2026>
    </div>
  );
};

export default page;
