import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import ERPContent from '../../../Components/Services/ERPContent';
import Contact2 from '../../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="https://placeholdr.ai/0ab0611b-98a1-4731-91c3-c185041f96cb/1024/412"
        Title="ERP Development"
      />
      <ERPContent />
      <Contact2 />
    </div>
  );
};

export default page;
