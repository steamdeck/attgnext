import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import DigitalMarketingContent from '../../../Components/Services/DigitalMarketingContent';
import Contact2 from '../../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="Digital Marketing Services"
      />
      <DigitalMarketingContent />
      <Contact2 />
    </div>
  );
};

export default page;
