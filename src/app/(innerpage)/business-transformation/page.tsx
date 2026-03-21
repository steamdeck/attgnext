import { Metadata } from 'next'
import { getMetadata } from '@/lib/jsonDatabase'
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/business-transformation')
  if (metadata) {
    return convertToNextJsMetadata(metadata)
  }
  return {
    title: 'Business Transformation Services | AT Tech Global',
    description: 'Transform your business with our expert digital transformation services. We help companies modernize operations, adopt new technologies, and drive sustainable growth.',
    keywords: 'business transformation, digital transformation, business consulting, process automation, technology adoption, digital strategy',
  }
}

import React from 'react';
import BusinessTransformationClientPage from '../../Components/BusinessTransformation/BusinessTransformationClientPage';

const BusinessTransformationPage = () => {
    return (
        <BusinessTransformationClientPage />
    );
};

export default BusinessTransformationPage;
