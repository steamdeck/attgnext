import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import ServiceDetails from '../../../Components/ServiceDetails/ServiceDetails';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="https://placeholdr.ai/42845905-086d-44ee-8f76-14681ce988f7/1024/412"
                Title="Learning Management System"
            ></BreadCumb>     
            <ServiceDetails></ServiceDetails>       
    </div>
  );
};

export default page;
