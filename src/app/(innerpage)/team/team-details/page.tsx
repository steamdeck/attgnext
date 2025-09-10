import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import TeamDetails from '../../../Components/TeamDetails/TeamDetails';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Team Details"
            ></BreadCumb> 
            <TeamDetails></TeamDetails>      
    </div>
  );
};

export default page;