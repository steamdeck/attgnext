'use client'

import React from 'react'
import BreadCumb from '../../Components/Common/BreadCumb'
import Contact3 from '../../Components/Contact/Contact3'
import SEOHead from '../../Components/Common/SEOHead'

const page = () => {
  return (
    <>
      <SEOHead 
        route="/contact"
        defaultTitle="Contact AT Tech Global | Digital Marketing Agency"
        defaultDescription="Get in touch with AT Tech Global for digital marketing services. Contact our experts for SEO, web development, and marketing solutions."
        defaultKeywords="contact digital marketing agency, seo consultation, web development inquiry, marketing services"
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