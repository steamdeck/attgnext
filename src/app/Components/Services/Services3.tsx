import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services3 = () => {

    const chooseContent = [
        {title:'Digital Strategy'},
        {title:'Software Services'},
        {title:'Business Analysis'},
        {title:'Technology & Media'},
        {title:'web app development'},
        {title:'SEO & Analytics'},
      ]; 

    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_30">
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1 cs_type_4">
                <p className="cs_section_subtitle cs_fs-18 cs_medium cs_accent_color wow fadeInDown">
                  Our featured services <span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">We Provide Exclusive Service For You</h2>
                <p className="cs_mb_41 wow fadeInUp" data-wow-delay="200ms">There are many variations of passages of  available, but the majority have suffered alteration in some form,</p>
                <Link href="/service" aria-label="Click to view all services" className="cs_view_service_btn cs_fs_14 cs_bold cs_accent_color position-relative">
                <span className="cs_btn_shape position-absolute">
                  <Image src="/assets/img/btn_shape.svg" alt="img" width={140} height={76}   />
                </span>
                <span>ALL SERVICES</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_service_list_wrapper wow fadeInRight">
                <ul className="cs_service_list cs_fs_24 cs_bold cs_mp_0">
                {chooseContent.map((item, i) => (
                  <li key={i}>
                    <Link href="/service/service-details" aria-label="Click to view service details">
                    <span>{item.title}</span>
                    <Image src="/assets/img/icons/arrow_right.svg" alt="img" width={23} height={23}   />
                    </Link>
                  </li>
                  ))}

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Services3;