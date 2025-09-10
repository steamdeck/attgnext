import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PricingCard = ({addclass,name,content,price,duration,featurelist,btnname,btnurl}) => {
    return (
                
        <div className={addclass}>
        <div className="cs_pricing_head">
          <span className="cs_pricing_icon cs_center cs_mb_22">
            <Image src="/assets/img/icons/diamond.svg" alt="img" width={60} height={60}   />
          </span>
          <div className="cs_pricing_head_text">
            <h3 className="cs_pricing_head_title cs_fs_24 cs_semibold cs_mb_8">{name}</h3>
            <p className="cs_pricing_head_subtitle cs_mb_8">{content}</p>
            <h3 className="cs_price_value cs_fs_40 cs_mb_12">{price} <small>{duration}</small></h3>
          </div>
        </div>
        <div className="cs_pricing_seperator cs_mb_25"></div>
        <div className="cs_pricing_feature cs_mb_24">
          <ul className="cs_pricing_feature_list cs_medium cs_mp_0">
          {featurelist?.map((item, index) => (
            <li key={index}>
              <Image src="/assets/img/icons/checkmark_2.svg" alt="img" width={16} height={16}   />
              <span>{item}</span>
              <Image src="/assets/img/icons/question_mark.svg" alt="img" width={16} height={16}   />
            </li>
            ))}
          </ul>
        </div>
        <Link href={btnurl} className="cs_pricing_btn cs_radius_8 cs_semibold text-capitalize" aria-label="Click to buy service">{btnname}</Link>
      </div>
    );
};

export default PricingCard;