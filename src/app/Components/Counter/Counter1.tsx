import React from 'react';

const Counter1 = () => {
  return (
    <div className="cs_counter cs_style_1 cs_gray_bg_1" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
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
                <span data-count-to="389" className="odometer"></span>389+
              </div>
              <p className="cs_counter_title cs_fs_18 mb-0">Happy Customers</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs_counter_wrapper cs_bg_gradient">
              <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color mb-0">
                <span data-count-to="421" className="odometer"></span>421+
              </div>
              <p className="cs_counter_title cs_fs_18 mb-0">Projects Delivered</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="cs_counter_wrapper">
              <div className="cs_counter_number cs_fs_48 cs_bold cs_heading_color mb-0">
                <span data-count-to="49" className="odometer"></span>49+
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