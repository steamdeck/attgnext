import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import ServiceDetails from '../../../Components/ServiceDetails/ServiceDetails';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Services Details"
            ></BreadCumb>     
            <ServiceDetails></ServiceDetails>       
    </div>
  );
};

export default page;