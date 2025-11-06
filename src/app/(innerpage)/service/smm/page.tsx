import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import SMMContent from '../../../Components/Services/SMMContent';
import Contact2 from '../../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/6f64d46d-fd31-48d3-b66d-7f1fc5ff9a98/1024/412"
        Title="Social Media Marketing"
      />
      <SMMContent />
      <Contact2 />
    </div>
  );
};

export default page;
