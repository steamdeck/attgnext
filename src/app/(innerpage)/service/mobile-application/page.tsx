import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import MobileAppContent from '../../../Components/Services/MobileAppContent';
import Contact2 from '../../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="Mobile Application Development"
        Subtitle="Expert mobile app development for iOS and Android platforms"
      />
      <MobileAppContent />
      <Contact2 />
    </div>
  );
};

export default page;
