import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import ServiceDetails from '../../../Components/ServiceDetails/ServiceDetails';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="https://placeholdr.ai/c645fc15-56dc-47dc-b888-d9416ffaf84b/1024/412"
                Title="Services Details"
            ></BreadCumb>     
            <ServiceDetails></ServiceDetails>       
    </div>
  );
};

export default page;