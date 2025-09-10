import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project1 = () => {

    const chooseContent = [
        {img:'/assets/img/card_1.jpg'},
        {img:'/assets/img/card_2.jpg'},
        {img:'/assets/img/card_3.jpg'},
        {img:'/assets/img/card_4.jpg'},
        {img:'/assets/img/card_5.jpg'},
        {img:'/assets/img/card_6.jpg'},
      ]; 

    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_center cs_mb_20 wow fadeInDown">
              <span className="cs_shape_left"></span>Latest Work<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">Explore Our Project</h2>
            <p className="cs_section_heading_text mb-0 wow fadeInUp" data-wow-delay="200ms">Our comprehensive suite of digital marketing services is designed to <br/> elevate your brands visibility.</p>
          </div>
        </div>
        <div className="cs_height_60 cs_height_lg_50"></div>
        <div className="cs_horizontal_slider_wrapper">
          <div className="cs_horizontal_slider_in">
            <div className="cs_project_list">
            {chooseContent.map((item, i) => (
              <Link key={i} href="/project/project-details" aria-label="Case study details page link" className="cs_card cs_style_1 cs_center position-relative">
              <img src={item.img} alt="Project Imagr" />
              <span className="cs_card_btn cs_center position-absolute">
                <Image src="/assets/img/icons/arrow_right.svg" alt="img" width={23} height={23}   />
              </span>
              </Link>
               ))}

            </div>
            <div className="cs_project_list">
            {chooseContent.map((item, i) => (
              <Link key={i} href="/project/project-details" aria-label="Case study details page link" className="cs_card cs_style_1 cs_center position-relative">
              <img src={item.img} alt="Project Imagr" />
              <span className="cs_card_btn cs_center position-absolute">
              <Image src="/assets/img/icons/arrow_right.svg" alt="img" width={23} height={23}   />
              </span>
              </Link>
              ))}

            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Project1;