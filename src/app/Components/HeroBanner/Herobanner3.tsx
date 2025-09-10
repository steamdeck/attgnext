"use client"
import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import VideoModal from '../VideoModal/VideoModal';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

const Herobanner3 = () => {

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

        const settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 4000,        
            responsive: [
              {
                breakpoint: 1399,
                settings: {
                  slidesToShow: 1,
                }
              },
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 1,
                }
              },{
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]
          };  

          const chooseContent = [
            {img:'/assets/img/hero_img_3.jpg'},
            {img:'/assets/img/hero-img-4.jpg'},
            {img:'/assets/img/hero-img-5.jpg'},
            {img:'/assets/img/hero-img-6.jpg'},
          ];

    return (
        <section className="cs_hero cs_style_3 cs_bg_filed position-relative" data-background="/assets/img/hero_bg_3.jpg">
        <div className="container-fluid">
          <div className="cs_hero_content">
            <div className="cs_hero_text">
              <h1 className="cs_hero_title cs_white_color text-uppercase cs_mb_29 wow fadeInDown">
                <span className="cs_video_block cs_style_2 cs_center cs_bg_filed" data-background="/assets/img/video_bg_4.jpg">
                <a onClick={handelClick} aria-label="Play video button" className="cs_player_btn cs_video_open cs_center cs_radius_50">
                <span className="cs_player_btn_icon cs_center cs_accent_color">
                <span></span></span>
                </a>
                </span>
                <span>Busi<span className="cs_stroke_text">ness</span></span>
                <span>strategy</span>
              </h1>
              <p className="cs_hero_subtitle cs_medium cs_white_color cs_mb_32 wow fadeInUp">Curabitur faucibus tellus nisi, vel vulputate risus aliquam et. Nunc nec lacinia mi. Integer ut <br/> posuere ipsum. In mattis quam ut velit porttitor tristique. Etiam pulvinar consequat <br/> condimentum. Phasellus ac tempus ex, at scelerisque lacus.</p>
              <div className="cs_btn_group">
                <Link href="/contact" aria-label="Contact button" className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft"><span>GET IN TOUCH</span></Link>
                <div className="cs_client_info_wrapper wow fadeInRight">
                  <Image src="/assets/img/client_group_1.png" alt="img" width={126} height={42}   />
                  <p className="cs_fs_14 cs_medium cs_white_color mb-0">15k+ Active Customer</p>
                </div>
              </div>
            </div>
            <div className="cs_hero_slider_wrapper">
              <div className="cs_slider cs_style_1 position-relative">
                <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-variable-width="0" data-xs-slides="1" data-sm-slides="1" data-md-slides="1" data-lg-slides="1" data-add-slides="1" data-slides-per-view="responsive">
                  <div className="cs_slider_wrapper">
                  <Slider {...settings}>
                  {chooseContent.map((item, i) => (
                    <div key={i} className="cs_slide">
                      <div className="cs_slider_item">
                        <Image src={item.img} alt="img" width={870} height={704}   />
                      </div>
                    </div>
                    ))}
                    </Slider>
                  </div>
                </div>
                <div className="cs_pagination cs_style_1"></div>
              </div>
            </div>
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

export default Herobanner3;