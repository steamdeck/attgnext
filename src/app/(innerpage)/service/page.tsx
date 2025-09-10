import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Services4 from '../../Components/Services/Services4';
import Marquee2 from '../../Components/Marquee/Marquee2';
import Cta from '../../Components/Cta/Cta';
import Pricing2 from '../../Components/Pricing/Pricing2';
import Contact2 from '../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Services"
            ></BreadCumb> 
            <Services4></Services4>      
            <Marquee2></Marquee2>   
            <Cta></Cta> 
            <Pricing2></Pricing2>
            <Contact2></Contact2>      
    </div>
  );
};

export default page;