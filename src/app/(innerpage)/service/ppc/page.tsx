import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import ServiceDetails from '../../../Components/ServiceDetails/ServiceDetails';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="https://placeholdr.ai/d66dd1f9-ad78-4896-b869-0404c4885786/1024/412"
                Title="Pay Per Click Advertising"
            ></BreadCumb>     
            <ServiceDetails></ServiceDetails>       
    </div>
  );
};

export default page;
