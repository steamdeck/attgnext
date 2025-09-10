"use client"
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const ProjectDetails = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

      const testimonialContent = [
        {img:'/assets/img/casestudy_2.jpg'},
        {img:'/assets/img/casestudy_3.jpg'},
        {img:'/assets/img/casestudy_4.jpg'},
        {img:'/assets/img/casestudy_2.jpg'},
     
      ]; 


    return (
        <div>
  <div className="cs_height_120 cs_height_lg_80"></div>
    <div className="container">
      <div className="cs_casestudy_setails">
        <div className="cs_casestudy_thumbnail cs_radius_20 position-relative">
          <Image src="/assets/img/casestudy_1.jpg" alt="img" width={1146} height={596}   />
          <div className="cs_project_infobox cs_white_bg cs_radius_20 wow fadeInLeft">
            <h3 className="cs_fs_24 cs_semibold cs_mb_30">Project Information</h3>
            <ul className="cs_project_info_list cs_mp_0">
              <li>
                <span className="cs_project_info_icon cs_center cs_blue_color cs_radius_50 position-relative">
                <i className="bi bi-person-fill"></i>
                </span>
                <div className="cs_project_info_text">
                  <span>Clients:</span>
                  <h3 className="cs_fs_18 cs_semibold mb-0">Josefin H. Smith</h3>
                </div>
              </li>
              <li>
                <span className="cs_project_info_icon cs_center cs_blue_color cs_radius_50 position-relative">
                <i className="bi bi-tag-fill"></i>
                </span>
                <div className="cs_project_info_text">
                  <span>Category:</span>
                  <h3 className="cs_fs_18 cs_semibold mb-0">Digital Marketing, SEO</h3>
                </div>
              </li>
              <li>
                <span className="cs_project_info_icon cs_center cs_blue_color cs_radius_50 position-relative">
                <i className="bi bi-calendar-check-fill"></i>
                </span>
                <div className="cs_project_info_text">
                  <span>Date:</span>
                  <h3 className="cs_fs_18 cs_semibold mb-0">25 March, 2023</h3>
                </div>
              </li>
              <li>
                <span className="cs_project_info_icon cs_center cs_blue_color cs_radius_50 position-relative">
                <i className="bi bi-geo-alt-fill"></i>
                </span>
                <div className="cs_project_info_text">
                  <span>Address:</span>
                  <h3 className="cs_fs_18 cs_semibold mb-0">258 Dancing Street, USA</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <h2>Mobile Application Development</h2>
        <p> consectetur adipiscing,  nunc eleifend duis sociosqu augue imperdiet, metus varius at dignissim malesuada. Nisi pharetra felis ullamcorper diam rutrum justo lectus ligula aptent, dapibus egestas habitasse habitant velit platea eget penatibus facilisi fusce, dictumst torquent sagittis porttitor nunc orci posuere praesent. Penatibus tincidunt erat odio augue sed platea, dapibus mauris hendrerit felis morbi duis, ornare lacinia sodales convallis sollicitudin. Sociosqu pulvinar tempus vel laoreet interdum porttitor commodo, vivamus congue sagittis aenean turpis nullam diam, bibendum</p>
        <p>Accumsan dui id justo fusce vehicula inceptos dignissim potenti elementum iaculis, nibh suspendisse ultricies nisl aptent sodales vitae eros vulputate. Gravida sollicitudin bibendum nascetur facilisis platea feugiat parturient mauris, erat habitant metus conubia lobortis tempor elementum augue.</p>
        <h2>The challenge of project</h2>
        <p>Turpis odio nascetur vel suscipit proin vestibulum bibendum tempor. Curabitur aliquam sociis risus parturient faucibus ornare magnis nascetur mauris, bibendum convallis vestibulum purus tincidunt eleifend litora. Leo magnis egestas conubia fringilla justo platea pharetra cubilia phasellus hac tristique proin, eget nascetur fermentum lacus mi arcu habitant facilisis odio eleifend vitae. Dignissim nostra hendrerit suscipit platea condimentumporttitor.</p>
      </div>
      <div className="cs_another_projects cs_slider cs_style_1 cs_slider_gap_30 wow fadeInUp">
        <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-variable-width="0" data-xs-slides="1" data-sm-slides="1" data-md-slides="2" data-lg-slides="3" data-add-slides="3" data-slides-per-view="responsive">
          <div className="cs_slider_wrapper cs_slider_gap_301">
          <Slider {...settings}>
          {testimonialContent.map((item, i) => (
            <div key={i} className="cs_slide">
              <a href="#" aria-label="Click to view project" className="cs_project_card cs_radius_20">
                <Image src={item.img} alt="img" width={362} height={342}   />
              </a>
            </div>
            ))}
            </Slider>
          </div>
        </div>
        <div className="cs_slider_footer wow fadeInDown">
          <div className="cs_slider_arrows cs_style_2">
            <div className="cs_left_arrow cs_center cs_radius_50 slick-arrow">
              <span className="cs_slider_arrow_icon cs_center cs_heading_color cs_radius_50">
              <i className="bi bi-arrow-left"></i>
              </span>
              <p className="cs_semibold mb-0">Previous Post</p>
            </div>
            <div className="cs_right_arrow cs_center cs_radius_50 slick-arrow">
              <p className="cs_semibold mb-0">Next Post</p>
              <span className="cs_slider_arrow_icon cs_center cs_heading_color cs_radius_50">
              <i className="bi bi-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cs_height_120 cs_height_lg_80"></div>           
        </div>
    );
};

export default ProjectDetails;