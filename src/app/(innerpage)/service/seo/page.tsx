'use client'

import React from 'react'
import BreadCumb from '../../../Components/Common/BreadCumb'
import SEOContent from '../../../Components/Services/SEOContent'
import Contact2 from '../../../Components/Contact/Contact2'
import SEOHead from '../../../Components/Common/SEOHead'

const page = () => {
  return (
    <>
      <SEOHead 
        route="/services/seo"
        defaultTitle="SEO Services | AT Tech Global Digital Marketing"
        defaultDescription="Professional SEO services to boost your online visibility. Rank higher on Google and drive organic traffic with our expert search engine optimization solutions."
        defaultKeywords="seo services, search engine optimization, google ranking, organic traffic, keyword optimization"
      />
      <div>
        <BreadCumb
          bgimg="https://placeholdr.ai/d8252233-d15a-413e-a843-4687cfaa85c3/1024/412"
          Title="SEO Services"
        />
        <SEOContent />
        <div style={{ padding: '60px 40px' }}>
          <Contact2 />
        </div>
      </div>
    </>
  )
}

export default page
