import { Metadata } from 'next'
import { getMetadata } from '@/lib/jsonDatabase'
import { convertToNextJsMetadata } from '@/lib/fileSeoUtils'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getMetadata('/')
  if (metadata) {
    return convertToNextJsMetadata(metadata)
  }
  return {
    title: 'AT Tech Global - Digital Marketing Agency in Gurugram',
    description: 'Leading digital marketing agency in Gurugram offering SEO, PPC, social media marketing, and web development services. Grow your business with our expert digital solutions.',
    keywords: 'digital marketing agency, seo services, web development, ppc advertising, social media marketing, gurugram',
  }
}

import React from 'react';
import dynamic from 'next/dynamic';
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
  DynamicTeam1 
} from './Components/Common/DynamicWrapper';
import SEOHead from './Components/Common/SEOHead';
import ClientWhatsAppButton from './Components/Common/ClientWhatsAppButton';

const HomePage = () => {
    return (
        <>
            <SEOHead 
                route="/"
            />
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
                <ClientWhatsAppButton />
                <Footer1 />
            </div>
        </>
    );
};

export default HomePage;
