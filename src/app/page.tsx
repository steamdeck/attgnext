import React from 'react';
import Header1 from './Components/Header/Header1';
import Footer1 from './Components/Footer/Footer1';
import HeroBanner1 from './Components/HeroBanner/HeroBanner1';
import About1 from './Components/About/About1';
import Counter1 from './Components/Counter/Counter1';
import Marquee from './Components/Marquee/Marquee';
import HowWeDo from './Components/HowWeDo/HowWeDo';
import Process1 from './Components/Process/Process1';
import Video1 from './Components/Video/Video1';
import Brand1 from './Components/Brand/Brand1';
import Contact1 from './Components/Contact/Contact1';
import LazyWrapper from './Components/Common/LazyWrapper';
import Testimonial1 from './Components/Testimonial/Testimonial1';
import { 
  DynamicProject1, 
  DynamicServices1, 
  DynamicTeam1, 
  DynamicBlog1 
} from './Components/Common/DynamicWrapper';

const HomePage = () => {
    return (
        <div className='main-page-area'>
            <Header1 />
            <HeroBanner1 />
            <About1 />
            <Counter1 />
            <LazyWrapper>
                <DynamicServices1 />
            </LazyWrapper>
            <LazyWrapper>
                <DynamicProject1 />
            </LazyWrapper>
            <LazyWrapper>
                <Marquee />
            </LazyWrapper>
            <LazyWrapper>
                <HowWeDo />
            </LazyWrapper>
            <LazyWrapper>
                <Process1 />
            </LazyWrapper>
            <LazyWrapper>
                <Video1 />
            </LazyWrapper>
            <LazyWrapper>
                <Brand1 />
            </LazyWrapper>
            <LazyWrapper>
                <Testimonial1 />
            </LazyWrapper>
            <LazyWrapper>
                <DynamicTeam1 />
            </LazyWrapper>
            <LazyWrapper>
                <Contact1 />
            </LazyWrapper>
            <LazyWrapper>
                <DynamicBlog1 />
            </LazyWrapper>
            <Footer1 />
        </div>
    );
};

export default HomePage;
