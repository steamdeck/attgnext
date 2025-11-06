import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import EcommerceContent from '../../../Components/Services/EcommerceContent';
import Contact2 from '../../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/d4b31637-602f-4982-aff8-6efbd9e45f79/256/256"
        Title="E-commerce Development"
      />
      <EcommerceContent />
      <Contact2 />
    </div>
  );
};

export default page;
