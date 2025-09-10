import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Team3 from '../../Components/Team/Team3';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Team"
            ></BreadCumb> 
            <Team3></Team3>         
    </div>
  );
};

export default page;