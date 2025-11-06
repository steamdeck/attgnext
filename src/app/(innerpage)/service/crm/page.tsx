import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import CRMContent from '../../../Components/Services/CRMContent';
import Contact2 from '../../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/e20d587c-147c-4891-9f71-2b23c1bcbf60/1024/412"
        Title="CRM Development"
      />
      <CRMContent />
      <Contact2 />
    </div>
  );
};

export default page;
