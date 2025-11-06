import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import WhatsAppMarketingContent from '../../../Components/Services/WhatsAppMarketingContent';
import Contact2 from '../../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/d738dd68-faeb-4882-8897-e919d3353b9c/1024/412"
        Title="WhatsApp Marketing"
      />
      <WhatsAppMarketingContent />
      <Contact2 />
    </div>
  );
};

export default page;
