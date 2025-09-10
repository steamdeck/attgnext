import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import About1 from '../Components/About/About1';
import Counter1 from '../Components/Counter/Counter1';
import Services1 from '../Components/Services/Services1';
import Project1 from '../Components/Project/Project1';
import Marquee from '../Components/Marquee/Marquee';
import HowWeDo from '../Components/HowWeDo/HowWeDo';
import Process1 from '../Components/Process/Process1';
import Video1 from '../Components/Video/Video1';
import Brand1 from '../Components/Brand/Brand1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Team1 from '../Components/Team/Team1';
import Contact1 from '../Components/Contact/Contact1';
import Blog1 from '../Components/Blog/Blog1';

const page = () => {
    return (
        <div>
            <HeroBanner1></HeroBanner1>
            <About1></About1>
            <Counter1></Counter1>
            <Services1></Services1>
            <Project1></Project1>
            <Marquee></Marquee>
            <HowWeDo></HowWeDo>
            <Process1></Process1>
            <Video1></Video1>
            <Brand1></Brand1>
            <Testimonial1></Testimonial1>
            <Team1></Team1>
            <Contact1></Contact1>
            <Blog1></Blog1>
        </div>
    );
};

export default page;