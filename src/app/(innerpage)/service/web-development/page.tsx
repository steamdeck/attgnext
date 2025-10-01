import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import WebDevelopmentContent from '../../../Components/Services/WebDevelopmentContent';
import Contact2 from '../../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/591d45d7-b0e8-44aa-bbb1-b950e39425ba/1024/412"
        Title="Web Development Services"
      />
      <WebDevelopmentContent />
      <Contact2 />
    </div>
  );
};

export default page;
