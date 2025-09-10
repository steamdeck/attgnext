import Image from 'next/image';
import React from 'react';

const Marquee = () => {
    return (
<div className="cs_brands cs_gray_bg_3">
      <div className="cs_horizontal_slider_wrapper">
        <div className="cs_horizontal_slider_in">
          <div className="cs_brands_list cs_fs_22 cs_heading_color cs_gallery_list">
            <div>
              <Image src="/assets/img/icons/checkmark.svg" alt="img" width={23} height={22}   />
              <span>Transforming Vision into Digital Reality</span>
            </div>
            <div>
            <Image src="/assets/img/icons/checkmark.svg" alt="img" width={23} height={22}   />
              <span>Your Digital Success Starts Here</span>
            </div>
            <div>
            <Image src="/assets/img/icons/checkmark.svg" alt="img" width={23} height={22}   />
              <span>Fueling Your Brands Digital Evolution</span>
            </div>
            <div>
            <Image src="/assets/img/icons/checkmark.svg" alt="img" width={23} height={22}   />
              <span>Driving Growth in the Digital Age</span>
            </div>
            <div>
           <Image src="/assets/img/icons/checkmark.svg" alt="img" width={23} height={22}   />
              <span>Your Digital Success Starts Here</span>
            </div>
          </div>
          <div className="cs_brands_list cs_fs_22 cs_heading_color cs_gallery_list">
            <div>
           <Image src="/assets/img/icons/checkmark.svg" alt="img" width={23} height={22}   />
              <span>Transforming Vision into Digital Reality</span>
            </div>
            <div>
           <Image src="/assets/img/icons/checkmark.svg" alt="img" width={23} height={22}   />
              <span>Your Digital Success Starts Here</span>
            </div>
            <div>
            <Image src="/assets/img/icons/checkmark.svg" alt="img" width={23} height={22}   />
              <span>Fueling Your Brands Digital Evolution</span>
            </div>
            <div>
            <Image src="/assets/img/icons/checkmark.svg" alt="img" width={23} height={22}   />
              <span>Driving Growth in the Digital Age</span>
            </div>
            <div>
            <Image src="/assets/img/icons/checkmark.svg" alt="img" width={23} height={22}   />
              <span>Your Digital Success Starts Here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Marquee;