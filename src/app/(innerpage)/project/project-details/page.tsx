import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import ProjectDetails from '../../../Components/ProjectDetails/ProjectDetails';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="https://placeholdr.ai/e8c47297-dfab-468c-b9db-e8189acd8d35/1024/412"
                Title="Project Details"
            ></BreadCumb>      
            <ProjectDetails></ProjectDetails>     
    </div>
  );
};

export default page;