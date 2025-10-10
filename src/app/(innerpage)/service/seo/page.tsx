import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import SEOContent from '../../../Components/Services/SEOContent';
import Contact2 from '../../../Components/Contact/Contact2';

const page = () => {
  return (
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
  );
};

export default page;
