"use client"
import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import VideoModal from '../VideoModal/VideoModal';
import Image from 'next/image';

const Video1 = () => {

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
        <div className="position-relative z-2">
        <div className="container-fluid">
          <div className="cs_video_block cs_style_1 cs_center cs_bg_filed position-relative wow fadeInDown" data-background="/assets/img/video_bg_2.jpg">
            <a onClick={handelClick} aria-label="Play video button" className="cs_player_btn cs_video_open cs_center cs_radius_50">
            <span className="cs_player_btn_icon cs_center cs_accent_bg cs_white_color"><span></span></span>
            </a>
            <div className="cs_video_shape_1 position-absolute">
              <Image src="/assets/img/glob_1.svg" alt="img" width={142} height={143}   />
            </div>
          </div>
          <div className="cs_video_shape_2 cs_radius_50 position-absolute">
            <Image src="/assets/img/human_rocket.png" alt="img" width={170} height={174}   />
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal>        
      </div>
    );
};

export default Video1;