import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';

const page = () => {
  const logos = [
    {img:'https://tiimg.tistatic.com/co_logo/35874189/maitri-original-food-products-v2.jpg'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCChgrMAgQA1h2O4vSS9TyoMouNRBh3D2MQ&s'},
    {img:'https://images.seeklogo.com/logo-png/44/1/gopal-namkeen-logo-png_seeklogo-443236.png'},
    {img:'https://cdn.sologo.ai/23/12/28/db6bd7e65a3a5e7838859ac587010d57.jpeg?x-oss-process=image/resize,m_lfit,w_800,h_0/format,webp'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjL5JYw8NMQQlYq8B8tpugEyAyrv-xPaklsA&s'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_1AiwBsKMSAr0Ow8CSKIzwerKkQXz1NUNg&s'},
  ];

  return (
    <div>
            <BreadCumb
                bgimg="https://placeholdr.ai/e8c47297-dfab-468c-b9db-e8189acd8d35/1024/412"
                Title="Project"
            ></BreadCumb>  
            <div className="cs_brands_slider position-relative z-2">
              <div className="container">
                <div className="cs_section_heading cs_style_1 cs_type_2">
                  <p className="cs_section_subtitle cs_fs_20 cs_semibold cs_accent_color mb-0">OUR CLIENTS</p>
                </div>
                <div className="cs_horizontal_slider_wrapper cs_brands_wrapper">
                  <div className="cs_horizontal_slider_in">
                    <div className="cs_brands_list cs_type_2">
                    {logos.map((item, i) => (
                      <div key={i} className="cs_brand">
                        <img src={item.img} alt="Client logo" style={{width: '280px', height: '90px', objectFit: 'contain'}} />
                      </div>
                     ))}
                    </div>
                    <div className="cs_brands_list cs_type_2">
                        {logos.map((item, i) => (
                      <div key={i} className="cs_brand">
                        <img src={item.img} alt="Client logo" style={{width: '280px', height: '90px', objectFit: 'contain'}} />
                      </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>        
    </div>
  );
};

export default page;