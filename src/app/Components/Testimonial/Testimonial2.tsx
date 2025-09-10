"use client"
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';

const Testimonial2 = () => {

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

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      }; 

          useEffect(() => {
              loadBackgroudImages();
          }, []);

    const testimonialContent = [
        {img:'/assets/img/avatar_5.jpg', subtitle:'Senior Director', title:'Eleanor Pena', subcontent:'I’m a new customer', content:'It’s a pleasure working with Bunker. They understood our new brand positioning guidelines and translated them beautifully and consistently into.'},
        {img:'/assets/img/avatar_1.jpg', subtitle:'Senior Developer', title:'Brooklyn Simmons', subcontent:'I’m a new customer', content:'It’s a pleasure working with Bunker. They understood our new brand positioning guidelines and translated them beautifully and consistently into.'},
      ]; 

    return (
        <section className="cs_bg_filed position-relative" data-background="/assets/img/testimonial_bg.jpg">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_center cs_mb_20 wow fadeInDown">
              <span className="cs_shape_left"></span>Our Testimonial<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0 wow fadeInUp">Our Clients Are Feeling Good</h2>
          </div>
        </div>
        <div className="cs_height_60 cs_height_lg_50"></div>
        <div className="cs_testimonial cs_style_2">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="cs_testimonial_thumbnail cs_center position-relative wow fadeInLeft">
                  <Image src="/assets/img/testimonial_img.png" alt="img" width={355} height={612}   />
                  <div className="cs_testimonial_shape_2 position-absolute">
                    <Image src="/assets/img/leaves_shape.svg" alt="img" width={120} height={90}   />
                  </div>
                  <div className="cs_testimonial_shape_3 position-absolute">
                    <Image src="/assets/img/message_shape.svg" alt="img" width={116} height={89}   />
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="cs_height_80 cs_height_lg_80"></div>
                <div className="cs_slider cs_style_2 cs_slider_gap_30 position-relative">
                  <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-variable-width="0" data-xs-slides="1" data-sm-slides="1" data-md-slides="1" data-lg-slides="1" data-add-slides="1" data-slides-per-view="responsive">
                    <div className="cs_slider_wrapper">
                    <Slider ref={sliderRef} {...settings}>
                    {testimonialContent.map((item, i) => (
                      <div key={i} className="cs_slide">
                        <div className="cs_card cs_style_4 wow fadeInDown">
                          <p className="cs_card_subtitle cs_fs_20 cs_medium cs_accent_color cs_mb_21">{item.subcontent}</p>
                          <blockquote>{item.content}</blockquote>
                          <div className="cs_avatar cs_style_1">
                            <div className="cs_avatar_icon cs_radius_10">
                              <Image src={item.img} alt="img" width={70} height={70}   />
                            </div>
                            <div className="cs_avatar_info">
                              <h3 className="cs_fs_20 cs_semibold cs_mb_5">{item.title}</h3>
                              <p className="cs_blue_color mb-0">{item.subtitle}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    </Slider>
                    </div>
                  </div>
                  <div className="cs_slider_arrows cs_style_1 cs_type_1">
                    <div onClick={previous} className="cs_left_arrow cs_center cs_radius_50 slick-arrow">
                      <Image src="/assets/img/icons/arrow_right.svg" alt="img" width={23} height={23}   />
                    </div>
                    <div onClick={next} className="cs_right_arrow cs_center cs_radius_50 slick-arrow">
                      <Image src="/assets/img/icons/arrow_right.svg" alt="img" width={23} height={23}   />
                    </div>
                  </div>
                </div>
                <div className="cs_height_70 cs_height_lg_50"></div>
                <div className="cs_client_reviews_info position-relative text-center">
                  <a href="#">Read More Reviews</a>
                  <Image src="/assets/img/arrow_shape.svg" alt="img" width={135} height={24} className="cs_reviews_arrow position-absolute"   />
                  <div className="cs_review_summery">
                    <div className="cs_client_info_header mb-0">
                      <Image src="/assets/img/icons/star.svg" alt="img" width={18} height={18}   />
                      <span className="cs_fs_18 cs_bold cs_heading_color">Trustpilot</span>
                    </div>
                    <Image src="/assets/img/stars.svg" alt="img" width={106} height={21}   />
                    <p className="mb-0">1k Reviews</p>
                  </div>
                </div>
                <div className="cs_height_80 cs_height_lg_80"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_testimonial_shape_4 position-absolute">
          <Image src="/assets/img/spiral_1.svg" alt="img" width={63} height={132}   />
        </div>
      </section>
    );
};

export default Testimonial2;