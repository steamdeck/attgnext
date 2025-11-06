import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WebDevelopmentContent = () => {
  return (
    <div>
      {/* Service Overview */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  <span className="cs_shape_right"></span>Why Choose Our Web Development Services<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Custom Websites That Drive Business Growth</h2>
                <p className="cs_fs_18 cs_mb_30">
                  At Digitom, we specialize in creating custom, responsive websites that help businesses 
                  establish a strong online presence and drive measurable results. Our team of experienced 
                  developers has helped over 200+ businesses achieve their digital goals.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_choose_content">
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/responsive.svg" alt="Responsive Design" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Responsive Design</h3>
                  <p className="cs_choose_subtitle">Mobile-first approach ensuring your website looks perfect on all devices</p>
                </div>
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/speed.svg" alt="Fast Loading" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Lightning Fast</h3>
                  <p className="cs_choose_subtitle">Optimized for speed with loading times under 3 seconds</p>
                </div>
                <div className="cs_choose_item">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/seo.svg" alt="SEO Optimized" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">SEO Optimized</h3>
                  <p className="cs_choose_subtitle">Built with search engines in mind for better rankings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Features & Benefits */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Our Web Development Features<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">What Makes Our Websites Stand Out</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/custom.svg" alt="Custom Development" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Custom Development</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Every website is built from scratch to meet your specific business needs and requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/security.svg" alt="Security" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Advanced Security</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Built-in security features and SSL certificates to protect your website and user data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/analytics.svg" alt="Analytics" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Analytics Integration</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Built-in Google Analytics and tracking to monitor your website&apos;s performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/cms.svg" alt="CMS" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Easy Content Management</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    User-friendly CMS that allows you to update content without technical knowledge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/support.svg" alt="Support" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">24/7 Support</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Ongoing maintenance and support to keep your website running smoothly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/scalable.svg" alt="Scalable" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Scalable Architecture</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Built to grow with your business and handle increased traffic and functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Our Process */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>How We Work<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Our 5-Step Web Development Process</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">01</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Discovery & Planning</h3>
                <p className="cs_process_subtitle">We analyze your business goals, target audience, and requirements to create a comprehensive project plan.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">02</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Design & Wireframing</h3>
                <p className="cs_process_subtitle">Our designers create wireframes and mockups to visualize your website&apos;s structure and user experience.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">03</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Development</h3>
                <p className="cs_process_subtitle">Our developers bring your design to life using the latest technologies and best practices.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">04</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Testing & Optimization</h3>
                <p className="cs_process_subtitle">We thoroughly test your website across all devices and browsers to ensure perfect functionality.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">05</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Launch & Support</h3>
                <p className="cs_process_subtitle">We launch your website and provide ongoing support to ensure it continues to perform optimally.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Technology Stack */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  <span className="cs_shape_right"></span>Technology Stack<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Built with Modern Technologies</h2>
                <p className="cs_fs_18 cs_mb_30">
                  We use the latest technologies and frameworks to ensure your website is fast, 
                  secure, and future-proof. Our development stack includes:
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row cs_row_gap_20 cs_gap_y_20">
                <div className="col-6">
                  <div className="cs_tech_item text-center">
                    <div className="cs_tech_icon cs_center cs_radius_10 cs_mb_15">
                      <Image src="/assets/img/icons/react.svg" alt="React" width={40} height={40} />
                    </div>
                    <h4 className="cs_tech_name cs_fs_16 cs_semibold">React.js</h4>
                  </div>
                </div>
                <div className="col-6">
                  <div className="cs_tech_item text-center">
                    <div className="cs_tech_icon cs_center cs_radius_10 cs_mb_15">
                      <Image src="/assets/img/icons/nextjs.svg" alt="Next.js" width={40} height={40} />
                    </div>
                    <h4 className="cs_tech_name cs_fs_16 cs_semibold">Next.js</h4>
                  </div>
                </div>
                <div className="col-6">
                  <div className="cs_tech_item text-center">
                    <div className="cs_tech_icon cs_center cs_radius_10 cs_mb_15">
                      <Image src="/assets/img/icons/nodejs.svg" alt="Node.js" width={40} height={40} />
                    </div>
                    <h4 className="cs_tech_name cs_fs_16 cs_semibold">Node.js</h4>
                  </div>
                </div>
                <div className="col-6">
                  <div className="cs_tech_item text-center">
                    <div className="cs_tech_icon cs_center cs_radius_10 cs_mb_15">
                      <Image src="/assets/img/icons/mongodb.svg" alt="MongoDB" width={40} height={40} />
                    </div>
                    <h4 className="cs_tech_name cs_fs_16 cs_semibold">MongoDB</h4>
                  </div>
                </div>
                <div className="col-6">
                  <div className="cs_tech_item text-center">
                    <div className="cs_tech_icon cs_center cs_radius_10 cs_mb_15">
                      <Image src="/assets/img/icons/wordpress.svg" alt="WordPress" width={40} height={40} />
                    </div>
                    <h4 className="cs_tech_name cs_fs_16 cs_semibold">WordPress</h4>
                  </div>
                </div>
                <div className="col-6">
                  <div className="cs_tech_item text-center">
                    <div className="cs_tech_icon cs_center cs_radius_10 cs_mb_15">
                      <Image src="/assets/img/icons/php.svg" alt="PHP" width={40} height={40} />
                    </div>
                    <h4 className="cs_tech_name cs_fs_16 cs_semibold">PHP</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Frequently Asked Questions<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Web Development FAQ</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_faq_wrap">
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How long does it take to develop a website?
                  </div>
                  <div className="cs_faq_answer">
                    The development timeline depends on the complexity of your project. A simple website typically takes 4-6 weeks, while a complex e-commerce site can take 8-12 weeks. We provide detailed timelines during the planning phase.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Do you provide website maintenance and support?
                  </div>
                  <div className="cs_faq_answer">
                    Yes, we offer comprehensive maintenance and support packages. This includes regular updates, security monitoring, performance optimization, and technical support to keep your website running smoothly.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Will my website be mobile-friendly?
                  </div>
                  <div className="cs_faq_answer">
                    Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices, from smartphones to tablets to desktop computers.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can I update the content myself?
                  </div>
                  <div className="cs_faq_answer">
                    Yes, we provide user-friendly content management systems that allow you to easily update text, images, and other content without any technical knowledge. We also provide training on how to use the CMS.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What technologies do you use for web development?
                  </div>
                  <div className="cs_faq_answer">
                    We use modern technologies including React.js, Next.js, Node.js, PHP, WordPress, and various databases. The technology stack is chosen based on your specific requirements and project goals.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Do you offer e-commerce website development?
                  </div>
                  <div className="cs_faq_answer">
                    Yes, we specialize in e-commerce development and can create online stores with payment processing, inventory management, order tracking, and all the features you need to sell products online.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do you ensure website security?
                  </div>
                  <div className="cs_faq_answer">
                    We implement multiple security measures including SSL certificates, secure coding practices, regular security updates, and monitoring. We also provide security audits and recommendations.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What&apos;s included in your web development packages?
                  </div>
                  <div className="cs_faq_answer">
                    Our packages include custom design, responsive development, SEO optimization, content management system, testing, launch, and ongoing support. Specific features vary by package level.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Do you provide hosting and domain services?
                  </div>
                  <div className="cs_faq_answer">
                    We can help you set up hosting and domain registration, or work with your existing hosting provider. We recommend reliable hosting solutions that ensure optimal performance and security.
                  </div>
                </div>
                <div className="cs_faq_item">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can you help with website redesign and updates?
                  </div>
                  <div className="cs_faq_answer">
                    Yes, we offer website redesign services to modernize existing websites, improve user experience, and enhance functionality. We can also provide ongoing updates and improvements to your current site.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Case Studies */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Success Stories<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Web Development Case Studies</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">E-commerce Platform for Fashion Retailer</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A fashion retailer needed a modern e-commerce platform to compete with online giants and increase online sales.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We developed a custom e-commerce website with advanced filtering, mobile optimization, and integrated payment processing.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>300% increase in online sales</li>
                    <li>45% improvement in page loading speed</li>
                    <li>60% increase in mobile conversions</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 8 weeks
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">Corporate Website for Tech Startup</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A tech startup needed a professional website to establish credibility and attract investors and clients.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We created a modern, responsive website with interactive features, case studies, and investor-focused content.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>250% increase in lead generation</li>
                    <li>40% improvement in user engagement</li>
                    <li>Successfully secured Series A funding</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 6 weeks
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Call to Action */}
      <section className="cs_blue_bg cs_white_color">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="cs_fs_48 cs_fw_bold cs_mb_20 cs_white_color">Ready to Transform Your Online Presence?</h2>
              <p className="cs_fs_18 cs_mb_30 cs_white_color">
                Don&apos;t let an outdated website hold your business back. Our expert web development team 
                can create a custom website that drives results and grows your business.
              </p>
              <div className="cs_btn_group cs_mb_40">
                <Link href="/contact" className="cs_btn cs_style_1 cs_fs_14 text-uppercase cs_white_bg cs_accent_color">
                  <span>Schedule Free Consultation</span>
                </Link>
                <Link href="tel:+919266812465" className="cs_btn cs_style_2 cs_fs_14 text-uppercase cs_white_color">
                  <span>Call +91 92668 12465</span>
                </Link>
              </div>
              <p className="cs_fs_16 cs_white_color">
                <strong>Free consultation • Custom quote • Quick start within 48 hours</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
};

export default WebDevelopmentContent;
