import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PricingCard2 = ({addclass,name,content1,content2,price,duration,featurelist,btnname,btnurl}) => {
    return (
        <div className={addclass}>
        <div className="cs_pricing_head">
          <div className="cs_pricing_head_text">
            <h3 className="cs_price_value cs_fs_40 cs_semibold">{price}</h3>
            <p className="cs_fs_18 cs_medium cs_mb_21">{duration}</p>
          </div>
          <p className="cs_pricing_subtitle cs_mb_32">{content1}</p>
        </div>
        <div className="cs_pricing_seperator cs_mb_35"></div>
        <div className="cs_pricing_feature cs_mb_24">
          <ul className="cs_pricing_feature_list cs_medium cs_mp_0">
          {featurelist?.map((item, index) => (
            <li key={index}>
              <Image src="/assets/img/icons/checkmark_2.svg" alt="img" width={16} height={16}   />
              <span>{item}</span>
            </li>
            ))}
          </ul>
        </div>
        <p className="cs_fs_15 cs_medium cs_mb_15">{content2}</p>
        <Link href={btnurl} className="cs_pricing_btn cs_radius_8 cs_semibold text-capitalize" aria-label="Click to buy service">{btnname}</Link>
        <span className="cs_pricing_badge cs_blue_bg cs_fs_15 cs_white_color cs_medium position-absolute">{name}</span>
      </div>
    );
};

export default PricingCard2;