import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import SEOContent from '../../../Components/Services/SEOContent';
import Contact2 from '../../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="SEO Services"
      />
      <SEOContent />
      <Contact2 />
    </div>
  );
};

export default page;
