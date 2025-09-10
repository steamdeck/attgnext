import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Faq1 from '../../Components/Faq/Faq1';

const page = () => {
  return (
    <div>
               <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="FAQ’s"
            ></BreadCumb>    
            <Faq1></Faq1>      
    </div>
  );
};

export default page;