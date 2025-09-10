"use client"
import React, { useEffect, useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const HeroBanner2 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);

        const [iframeSrc, setIframeSrc] = useState('about:blank');
        const [toggle, setToggle] = useState(false);
      
        const handelClick = () => {
          setIframeSrc("https://www.youtube.com/embed/HC-tgFdIcB0");
          setToggle(!toggle);
        };
        const handelClose = () => {
          setIframeSrc('about:blank');
          setToggle(!toggle);
        };   

    return (
<section className="cs_hero cs_style_2 cs_bg_filled position-relative" data-background="assets/img/hero_bg_2.jpg">
      <div className="container-fluid">
        <div className="cs_hero_content">
          <div className="cs_hero_thumbnail">
            <Image src="/assets/img/hero_img_2.png" alt="img" width={928} height={815}   />
            <span className="cs_reviewbox position-absolute wow fadeInLeft">
              <Image src="/assets/img/5-starbox.png" alt="img" width={341} height={188}   />
            </span>
          </div>
          <div className="cs_hero_text_wrapper position-relative z-1">
            <p className="cs_hero_subtitle cs_white_color cs_medium cs_mb_12 wow fadeInDown">BEST TECH SERVICE PROVIDER OF THE YEAR</p>
            <h1 className="cs_hero_title cs_white_color cs_extra_bold cs_mb_28 wow fadeInUp">We Are a Fast Growing Creative Startup</h1>
            <p className="cs_white_color cs_mb_46 wow fadeInUp" data-wow-delay="200ms">Our experience with AT Tech Global has been fantastic. They understood our goals and delivered a comprehensive marketing strategy that has improved our brand visibility and engagement. Their team is talented, professional, and a pleasure</p>
            <div className="cs_about_btn_group">
              <Link href="/service" aria-label="Service page visit button" className="cs_btn cs_style_1 cs_fs_14 cs_semibold text-uppercase wow fadeInLeft"><span>View All Services</span></Link>
              <a onClick={handelClick} aria-label="Play video button" className="cs_reel_btn cs_video_open cs_fs_14 cs_semibold wow fadeInRight">
              <span><i className="bi bi-play-fill"></i></span>
              <span>Play Reel</span>
              </a>
            </div>
          </div>
          <div className="cs_marketing_graph_content_wrapper cs_white_bg cs_radius_10 position-absolute wow zoomIn">
            <Image src="/assets/img/sales_trends.png" alt="img" width={200} height={180}   />
          </div>
        </div>
        <div className="cs_hero_shape_1 position-absolute">
          <Image src="/assets/img/rocket_1.png" alt="img" width={126} height={128}   />
        </div>
      </div>

      <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal>

    </section>
    );
};

export default HeroBanner2;