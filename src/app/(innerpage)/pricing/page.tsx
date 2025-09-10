import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Pricing1 from '../../Components/Pricing/Pricing1';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Our Pricing"
            ></BreadCumb>  
            <Pricing1></Pricing1>         
    </div>
  );
};

export default page;