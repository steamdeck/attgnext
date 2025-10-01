import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Faq1 from '../../Components/Faq/Faq1';

const page = () => {
  return (
    <div>
               <BreadCumb
                bgimg="https://placeholdr.ai/fff247ec-b78f-4f20-a201-28b993c3fa80/1024/412"
                Title="FAQ’s"
            ></BreadCumb>    
            <Faq1></Faq1>      
    </div>
  );
};

export default page;