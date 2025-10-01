import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import ServiceDetails from '../../../Components/ServiceDetails/ServiceDetails';

const page = () => {
  return (
    <div>
             <BreadCumb
               bgimg="https://placeholdr.ai/6f64d46d-fd31-48d3-b66d-7f1fc5ff9a98/1024/412"
                Title="Social Media Marketing"
            ></BreadCumb>     
            <ServiceDetails></ServiceDetails>       
    </div>
  );
};

export default page;
