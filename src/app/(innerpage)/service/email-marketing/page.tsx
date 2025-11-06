import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import EmailMarketingContent from '../../../Components/Services/EmailMarketingContent';
import Contact2 from '../../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/2e116f98-6e91-462e-a79d-122e3ae1d26d/1024/412"
        Title="Email Marketing"
      />
      <EmailMarketingContent />
      <Contact2 />
    </div>
  );
};

export default page;
