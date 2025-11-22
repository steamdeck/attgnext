import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Services4 from '../../Components/Services/Services4';
import Marquee2 from '../../Components/Marquee/Marquee2';
import Cta from '../../Components/Cta/Cta';
import Contact2 from '../../Components/Contact/Contact2';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="https://placeholders.io/600/400/information%20stcchnology%20services?style=photographic&seed=42"
                Title="Services"
            ></BreadCumb> 
            <Services4></Services4>      
            <Marquee2></Marquee2>   
            <Cta></Cta> 
            <Contact2></Contact2>      
    </div>
  );
};

export default page;