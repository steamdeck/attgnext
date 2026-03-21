'use client'
import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import TeamDetails from '../../../Components/TeamDetails/TeamDetails';
import SEOHead from '../../../Components/Common/SEOHead';

const page = () => {
  return (
    <>
      <SEOHead route="/team/team-details" />
      <div>
            <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Team Details"
            ></BreadCumb> 
            <TeamDetails></TeamDetails>      
    </div>
    </>
  );
};

export default page;