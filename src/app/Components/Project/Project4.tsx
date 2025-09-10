import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project4 = () => {

  const chooseContent = [
    {img:'/assets/img/card_7.jpg', title:'PPC Advertising', content:'Seo Design'},
    {img:'/assets/img/card_8.jpg', title:'PPC Advertising', content:'Seo Design'},
    {img:'/assets/img/card_9.jpg', title:'PPC Advertising', content:'Seo Design'},
    {img:'/assets/img/card_10.jpg', title:'PPC Advertising', content:'Seo Design'},
    {img:'/assets/img/card_11.jpg', title:'PPC Advertising', content:'Seo Design'},
    {img:'/assets/img/card_12.jpg', title:'PPC Advertising', content:'Seo Design'},
  ]; 

    return (
<section className="cs_tabs position-relative">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">

          <div className="cs_tab_body wow fadeInUp" data-wow-delay="200ms">
            <div className="cs_tab active" id="all">
              <div className="cs_cards_wrapper_1">
              {chooseContent.map((item, i) => (
                <Link key={i} href="/project/project-details" className="cs_card cs_style_3 cs_radius_15 position-relative" aria-label="Click go to casestudy page">
                  <div className="cs_card_overlay position-absolute"></div>
                  <img src={item.img} alt="Casestudy image" />
                  <span className="cs_card_btn cs_accent_bg cs_center cs_radius_50 position-absolute">
                  <Image src="/assets/img/icons/arrow_right.svg" alt="img" width={23} height={23}   />
                  </span>
                  <div className="cs_card_info position-absolute">
                    <h3 className="cs_fs_24 cs_white_color cs_mb_2">{item.title}</h3>
                    <p className="cs_medium cs_white_color mb-0">{item.content}</p>
                  </div>
                </Link>
                ))}

              </div>
            </div>

          </div>
          <div className="cs_case_shape_1 position-absolute">
            <Image src="/assets/img/case_shape_1.svg" alt="img" width={381} height={1121}   />
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Project4;