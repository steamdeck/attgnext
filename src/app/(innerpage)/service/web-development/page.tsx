import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import WebDevelopmentContent from '../../../Components/Services/WebDevelopmentContent';
import Contact2 from '../../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="Web Development Services"
      />
      <WebDevelopmentContent />
      <Contact2 />
    </div>
  );
};

export default page;
