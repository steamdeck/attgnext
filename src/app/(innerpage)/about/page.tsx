import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import About2 from '../../Components/About/About2';
import About3 from '../../Components/About/About3';
import About4 from '../../Components/About/About4';
import MissionVisionValues from '../../Components/About/MissionVisionValues';
import Counter1 from '../../Components/Counter/Counter1';
import Video2 from '../../Components/Video/Video2';
import Testimonial3 from '../../Components/Testimonial/Testimonial3';
import Team2 from '../../Components/Team/Team2';

const page = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
             <BreadCumb
                bgimg="https://placeholdr.ai/8f9e3f1a-c3b5-4361-a45f-bdb0661ea3a0/1024/412"
                Title="About Us"
            ></BreadCumb> 
            <About2></About2>
            <MissionVisionValues></MissionVisionValues>
            <Counter1></Counter1> 
            <About3></About3>
            <About4></About4>
            <Video2></Video2> 
            <Testimonial3></Testimonial3>
            <Team2></Team2>
    </div>
  );
};

export default page;