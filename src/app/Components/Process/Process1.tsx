import Image from 'next/image';
import React from 'react';

const Process1 = () => {
    return (
    <section className="cs_process_area cs_style_1">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_center cs_mb_20 wow fadeInDown">
            <span className="cs_shape_left"></span>Work Process<span className="cs_shape_right"></span>
          </p>
          <h2 className="cs_fs_48 cs_mb_21 wow fadeInUp">Our Solution Process.</h2>
          <p className="cs_section_heading_text mb-0 wow fadeInUp" data-wow-delay="200ms">Experience Excellence with AT Tech Global - Your Leading Digital Solutions Provider. We are a leading technology company.</p>
        </div>
        <div className="cs_height_60 cs_height_lg_50"></div>
        <div className="cs_process_content">
          <div className="cs_heading_box cs_radius_20">
            <div className="cs_heading_box_inner cs_center cs_blue_bg cs_bold cs_white_color cs_radius_10 text-center text-uppercase">AT Tech Global Approach</div>
          </div>
          <div className="cs_steps_boxes_wrapper position-relative">
            <div className="cs_stepbox_wrapper position-relative wow fadeInUp">
              <span className="cs_stepbox_index cs_center cs_radius_50 position-absolute">
              <span className="cs_step_index_in cs_radius_50">
              <span className="cs_fs-18 cs_bold cs_heading_color">01</span>
              <span className="cs_fs_14 cs_medium">Step</span>
              </span>
              <Image src="/assets/img/step_index_1.svg" alt="img" width={72} height={25}   />
              </span>
              <div className="cs_stepbox_inner cs_center cs_fs_22 cs_medium cs_heading_color cs_radius_10 text-center">Discovery& Research</div>
            </div>
            <div className="cs_stepbox_wrapper cs_box_2 position-relative">
              <span className="cs_stepbox_index cs_center cs_radius_50 position-absolute">
              <span className="cs_step_index_in cs_radius_50">
              <span className="cs_fs-18 cs_bold cs_heading_color">02</span>
              <span className="cs_fs_14 cs_medium">Step</span>
              </span>
              <Image src="/assets/img/step_index_2.svg" alt="img" width={72} height={25}   />
              </span>
              <div className="cs_stepbox_inner cs_center cs_fs_22 cs_medium cs_heading_color cs_radius_10 text-center">Strategy Development</div>
            </div>
            <div className="cs_stepbox_wrapper cs_box_3 position-relative">
              <span className="cs_stepbox_index cs_center cs_radius_50 position-absolute">
              <span className="cs_step_index_in cs_radius_50">
              <span className="cs_fs-18 cs_bold cs_heading_color">03</span>
              <span className="cs_fs_14 cs_medium">Step</span>
              </span>
              <Image src="/assets/img/step_index_3.svg" alt="img" width={72} height={25}   />
              </span>
              <div className="cs_stepbox_inner cs_center cs_fs_22 cs_medium cs_heading_color cs_radius_10 text-center">Design & Development</div>
            </div>
            <div className="cs_stepbox_wrapper cs_box_4 position-relative wow fadeInUp">
              <span className="cs_stepbox_index cs_center cs_radius_50 position-absolute">
              <span className="cs_step_index_in cs_radius_50">
              <span className="cs_fs-18 cs_bold cs_heading_color">04</span>
              <span className="cs_fs_14 cs_medium">Step</span>
              </span>
              <Image src="/assets/img/step_index_4.svg" alt="img" width={72} height={25}   />
              </span>
              <div className="cs_stepbox_inner cs_center cs_fs_22 cs_medium cs_heading_color cs_radius_10 text-center">Launch & QA</div>
            </div>
            <div className="cs_process_shape_1 position-absolute">
              <Image src="/assets/img/process_shape_1.svg" alt="img" width={959} height={208}   />
            </div>
            <div className="cs_process_shape_2 position-absolute"></div>
            <div className="cs_process_shape_3 position-absolute"></div>
            <div className="cs_process_shape_4 position-absolute"></div>
            <div className="cs_process_shape_5 position-absolute"></div>
            <div className="cs_process_shape_6 position-absolute"></div>
            <div className="cs_process_shape_7 position-absolute"></div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Process1;