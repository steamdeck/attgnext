import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import MobileAppContent from '../../../Components/Services/MobileAppContent';
import Contact2 from '../../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/61a7afca-0d55-4395-a8f4-43c1be20cf86/1024/412"
        Title="Mobile Application Development"
      />
      <MobileAppContent />
      <Contact2 />
    </div>
  );
};

export default page;
