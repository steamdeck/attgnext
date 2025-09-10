import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Project4 from '../../Components/Project/Project4';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Project"
            ></BreadCumb>  
            <Project4></Project4>        
    </div>
  );
};

export default page;