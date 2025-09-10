"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Image from 'next/image';
import Link from 'next/link';

const Cta = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section className="cs_bg_filed" data-background="/assets/img/project_bg.png">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_project_content position-relative">
            <div className="cs_project_thumbnail_wrapper cs_center">
              <div className="cs_project_thumbnail cs_radius_20">
                <Image src="/assets/img/project_1.jpg" alt="img" width={242} height={261}   />
              </div>
              <div className="cs_project_thumbnail cs_radius_20">
                <Image src="/assets/img/project_2.jpg" alt="img" width={242} height={261}   />
              </div>
            </div>
            <div className="cs_project_heading text-center">
              <h2 className="cs_fs_48 cs_mb_30 text-capitalize wow fadeInDown">Have a project in mind?</h2>
              <Link href="/contact" aria-label="Click to contact us" className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInUp"><span>CONTACT US</span></Link>
            </div>
          </div>
          <div className="cs_height_120 cs_height_lg_80"></div>
          <div className="cs_counter_grid_1">
            <div className="cs_counter_wrapper cs_type_1">
              <p className="cs_counter_title cs_fs_18 cs_semibold cs_mb_3">Years of Experience</p>
              <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color">
                <span data-count-to="14" className="odometer"></span>14+
              </div>
            </div>
            <div className="cs_counter_wrapper cs_type_1">
              <p className="cs_counter_title cs_fs_18 cs_semibold cs_mb_3">Happy Customer</p>
              <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color">
                <span data-count-to="500" className="odometer"></span>500+
              </div>
            </div>
            <div className="cs_counter_wrapper cs_type_1">
              <p className="cs_counter_title cs_fs_18 cs_semibold cs_mb_3">Project Delivered</p>
              <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color">
                <span data-count-to="4" className="odometer"></span>4K+
              </div>
            </div>
            <div className="cs_counter_wrapper cs_type_1">
              <p className="cs_counter_title cs_fs_18 cs_semibold cs_mb_3">Employees</p>
              <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color">
                <span data-count-to="45" className="odometer"></span>45+
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Cta;