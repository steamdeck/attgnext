"use client"
import React, { useEffect, useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Video2 = () => {

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
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_center cs_mb_20 wow fadeInDown">
              <span className="cs_shape_left"></span>Watch Video<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_32 mb-0 wow fadeInUp">We assist our clients in bringing their business concepts to <br/> life and achieving outstanding outcomes.</h2>
          </div>
          <div className="cs_video_block cs_style_1 cs_type_1 cs_center cs_bg_filed position-relative wow fadeInUp" data-wow-delay="200ms" data-background="/assets/img/video_bg_5.jpg">
            <a onClick={handelClick} aria-label="Play video button" className="cs_player_btn cs_video_open cs_center cs_radius_50">
            <span className="cs_player_btn_icon cs_center cs_white_color"><span></span></span>
            </a>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>

        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal> 

      </section>
    );
};

export default Video2;