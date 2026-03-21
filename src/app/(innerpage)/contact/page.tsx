

import React from 'react'
import BreadCumb from '../../Components/Common/BreadCumb'
import Contact3 from '../../Components/Contact/Contact3'
import SEOHead from '../../Components/Common/SEOHead'

import { Metadata } from 'next'
import { getMetadata } from '@/lib/jsonDatabase'
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/contact')
  if (metadata) {
    return convertToNextJsMetadata(metadata)
  }
  return {
    title: 'Contact AT Tech Global - Digital Marketing Experts',
    description: 'Get in touch with AT Tech Global for digital marketing, web development, and SEO services. Contact us today to transform your business.',
    keywords: 'contact at tech global, digital marketing agency, web development, seo services, gurugram',
  }
}

const page = () => {
  return (
    <>
      <SEOHead 
        route="/contact"
      />
      <div>
        <BreadCumb
          bgimg="https://placeholdr.ai/24e9c10c-5670-4d95-acbd-2402052822bd/1024/412"
          Title="Contact Us"
        ></BreadCumb>       
        <Contact3></Contact3>       
      </div>
    </>
  )
}

export default page