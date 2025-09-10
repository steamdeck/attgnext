import React from 'react';

const Counter1 = () => {
    return (
<div className="cs_counter cs_style_1 cs_gray_bg_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="cs_counter_wrapper cs_bg_gradient">
              <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color mb-0">
                <span data-count-to="14" className="odometer"></span>14+
              </div>
              <p className="cs_counter_title cs_fs_18 mb-0">Years of Experience</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs_counter_wrapper">
              <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color mb-0">
                <span data-count-to="500" className="odometer"></span>500+
              </div>
              <p className="cs_counter_title cs_fs_18 mb-0">Happy Customer</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs_counter_wrapper cs_bg_gradient">
              <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color mb-0">
                <span data-count-to="4530" className="odometer"></span>4530+
              </div>
              <p className="cs_counter_title cs_fs_18 mb-0">Project Delivered</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs_counter_wrapper">
              <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color mb-0">
                <span data-count-to="450" className="odometer"></span>450+
              </div>
              <p className="cs_counter_title cs_fs_18 mb-0">Employees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Counter1;