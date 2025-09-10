import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import About2 from '../../Components/About/About2';
import Counter1 from '../../Components/Counter/Counter1';
import Video2 from '../../Components/Video/Video2';
import Testimonial3 from '../../Components/Testimonial/Testimonial3';
import Awards from '../../Components/Award/Awards';
import Team2 from '../../Components/Team/Team2';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="About Us"
            ></BreadCumb> 
            <About2></About2>  
            <Counter1></Counter1> 
            <Video2></Video2> 
            <Testimonial3></Testimonial3>
            <Awards></Awards>
            <Team2></Team2>
    </div>
  );
};

export default page;