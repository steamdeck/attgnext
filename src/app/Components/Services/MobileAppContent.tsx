import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MobileAppContent = () => {
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
                  <span className="cs_shape_right"></span>Why Choose Our Mobile App Development<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Build Powerful Mobile Apps That Drive Business Growth</h2>
                <p className="cs_fs_18 cs_mb_30">
                  Mobile apps have become essential for businesses to engage customers, increase sales, and 
                  improve customer satisfaction. We develop custom mobile applications for iOS and Android 
                  that deliver exceptional user experiences and drive business results. Our team has developed 
                  200+ successful mobile apps across various industries, helping businesses increase revenue 
                  by an average of 120% and improve customer engagement by 85%.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_choose_content">
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/ios.svg" alt="iOS Development" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">120% Revenue Increase</h3>
                  <p className="cs_choose_subtitle">Average 120% increase in revenue within 6 months of app launch</p>
                </div>
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/ux.svg" alt="UX Design" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">85% Engagement Increase</h3>
                  <p className="cs_choose_subtitle">Average 85% improvement in customer engagement with mobile apps</p>
                </div>
                <div className="cs_choose_item">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/mobile.svg" alt="Platforms" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">All Platforms</h3>
                  <p className="cs_choose_subtitle">Native iOS, Android, and cross-platform development with React Native and Flutter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* App Development Process */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Our Development Process<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">6-Step Mobile App Development Process</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">01</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Discovery & Strategy</h3>
                <p className="cs_process_subtitle">We analyze your business goals, target audience, and market requirements to create a comprehensive app strategy.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">02</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">UI/UX Design</h3>
                <p className="cs_process_subtitle">Our designers create wireframes, prototypes, and stunning visual designs that provide exceptional user experiences.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">03</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Development</h3>
                <p className="cs_process_subtitle">Our expert developers bring your app to life using the latest technologies and best practices.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">04</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Testing & QA</h3>
                <p className="cs_process_subtitle">Comprehensive testing across all devices and platforms to ensure flawless functionality and performance.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">05</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">App Store Launch</h3>
                <p className="cs_process_subtitle">We handle the complete app store submission process and optimization for better visibility.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">06</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Maintenance & Support</h3>
                <p className="cs_process_subtitle">Ongoing maintenance, updates, and support to keep your app running smoothly and up-to-date.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Platform Expertise */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  <span className="cs_shape_right"></span>Platform Expertise<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Native & Cross-Platform Development</h2>
                <p className="cs_fs_18 cs_mb_30">
                  We develop mobile applications for all major platforms using the most appropriate 
                  technology stack for your specific needs and requirements.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row cs_row_gap_20 cs_gap_y_20">
                <div className="col-6">
                  <div className="cs_platform_item text-center">
                    <div className="cs_platform_icon cs_center cs_radius_10 cs_mb_15">
                      <Image src="/assets/img/icons/ios.svg" alt="iOS" width={40} height={40} />
                    </div>
                    <h4 className="cs_platform_name cs_fs_16 cs_semibold">iOS Development</h4>
                    <p className="cs_platform_desc cs_fs_14">Native iOS apps using Swift and Objective-C</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="cs_platform_item text-center">
                    <div className="cs_platform_icon cs_center cs_radius_10 cs_mb_15">
                      <Image src="/assets/img/icons/android.svg" alt="Android" width={40} height={40} />
                    </div>
                    <h4 className="cs_platform_name cs_fs_16 cs_semibold">Android Development</h4>
                    <p className="cs_platform_desc cs_fs_14">Native Android apps using Kotlin and Java</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="cs_platform_item text-center">
                    <div className="cs_platform_icon cs_center cs_radius_10 cs_mb_15">
                      <Image src="/assets/img/icons/react-native.svg" alt="React Native" width={40} height={40} />
                    </div>
                    <h4 className="cs_platform_name cs_fs_16 cs_semibold">React Native</h4>
                    <p className="cs_platform_desc cs_fs_14">Cross-platform apps with native performance</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="cs_platform_item text-center">
                    <div className="cs_platform_icon cs_center cs_radius_10 cs_mb_15">
                      <Image src="/assets/img/icons/flutter.svg" alt="Flutter" width={40} height={40} />
                    </div>
                    <h4 className="cs_platform_name cs_fs_16 cs_semibold">Flutter</h4>
                    <p className="cs_platform_desc cs_fs_14">Beautiful cross-platform apps with Dart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* App Features */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>App Features & Capabilities<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Comprehensive Mobile App Solutions</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/push-notifications.svg" alt="Push Notifications" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Push Notifications</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Engage users with targeted push notifications and real-time updates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/payment.svg" alt="Payment Integration" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Payment Integration</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Secure payment processing with multiple payment gateways and methods.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/offline.svg" alt="Offline Functionality" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Offline Functionality</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Apps that work seamlessly even without internet connectivity.
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
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Analytics & Tracking</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Comprehensive analytics to track user behavior and app performance.
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
                    Enterprise-grade security features to protect user data and app integrity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/cloud.svg" alt="Cloud Integration" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Cloud Integration</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Seamless integration with cloud services for data storage and synchronization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Benefits Section */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  <span className="cs_shape_right"></span>Business Benefits<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Why Mobile Apps Matter for Your Business</h2>
                <p className="cs_fs_18 cs_mb_30">
                  Mobile apps have transformed how businesses connect with customers and drive growth. 
                  Here&apos;s how our mobile app development services can transform your business:
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_benefits_list">
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/roi.svg" alt="Increased Revenue" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Increased Revenue</h4>
                    <p className="cs_benefit_desc">Reach customers on their mobile devices and increase sales through convenient mobile commerce</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/engagement.svg" alt="Customer Engagement" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Enhanced Customer Engagement</h4>
                    <p className="cs_benefit_desc">Build stronger relationships with customers through push notifications and personalized experiences</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Data Insights" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Customer Insights</h4>
                    <p className="cs_benefit_desc">Track user behavior, preferences, and app usage with comprehensive analytics</p>
                  </div>
                </div>
                <div className="cs_benefit_item">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/brand.svg" alt="Brand Visibility" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Brand Visibility</h4>
                    <p className="cs_benefit_desc">Increase brand awareness and stay top-of-mind with customers through mobile presence</p>
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
            <h2 className="cs_fs_48 mb-0">Mobile App Development FAQ</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_faq_wrap">
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How long does it take to develop a mobile app?
                  </div>
                  <div className="cs_faq_answer">
                    App development timeline depends on complexity and features. Simple apps take 2-3 months, while complex apps can take 6-12 months. We provide detailed timelines during the planning phase.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Should I choose native or cross-platform development?
                  </div>
                  <div className="cs_faq_answer">
                    Native apps offer better performance and platform-specific features, while cross-platform apps are cost-effective and faster to develop. We recommend the best approach based on your requirements.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Do you provide app store submission services?
                  </div>
                  <div className="cs_faq_answer">
                    Yes, we handle the complete app store submission process including app store optimization, metadata creation, and compliance with store guidelines for both iOS and Android.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What technologies do you use for mobile app development?
                  </div>
                  <div className="cs_faq_answer">
                    We use native technologies (Swift, Kotlin) for iOS and Android, and cross-platform frameworks like React Native and Flutter. The choice depends on your specific requirements and budget.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Do you provide app maintenance and updates?
                  </div>
                  <div className="cs_faq_answer">
                    Yes, we offer comprehensive maintenance packages including bug fixes, feature updates, security patches, and performance optimizations to keep your app running smoothly.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can you integrate third-party services and APIs?
                  </div>
                  <div className="cs_faq_answer">
                    Absolutely! We integrate various third-party services including payment gateways, social media APIs, analytics tools, and cloud services to enhance your app&apos;s functionality.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do you ensure app security?
                  </div>
                  <div className="cs_faq_answer">
                    We implement multiple security measures including data encryption, secure authentication, API security, and regular security audits to protect your app and user data.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What&apos;s included in your app development packages?
                  </div>
                  <div className="cs_faq_answer">
                    Our packages include UI/UX design, development, testing, app store submission, and ongoing support. Specific features and timeline vary by package level.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Do you provide app analytics and user tracking?
                  </div>
                  <div className="cs_faq_answer">
                    Yes, we integrate comprehensive analytics solutions to track user behavior, app performance, and key metrics to help you make data-driven decisions.
                  </div>
                </div>
                <div className="cs_faq_item">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can you help with app marketing and user acquisition?
                  </div>
                  <div className="cs_faq_answer">
                    We provide app store optimization (ASO) services and can recommend marketing strategies. For comprehensive marketing, we work with our digital marketing team.
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
            <h2 className="cs_fs_48 mb-0">Mobile App Development Case Studies</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">E-commerce Mobile App</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A retail business needed a mobile app to compete with online giants and increase customer engagement.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We developed a cross-platform e-commerce app with advanced features including AR try-on, push notifications, and seamless checkout.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>500% increase in mobile sales</li>
                    <li>4.8-star app store rating</li>
                    <li>200% improvement in user engagement</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 4 months
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">Healthcare Management App</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A healthcare provider needed a patient management app to streamline appointments and improve patient experience.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We created a HIPAA-compliant app with appointment booking, telemedicine features, and secure patient data management.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>60% reduction in no-show appointments</li>
                    <li>300% increase in patient satisfaction</li>
                    <li>40% improvement in operational efficiency</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 6 months
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
              <h2 className="cs_fs_48 cs_fw_bold cs_mb_20 cs_white_color">Ready to Build Your Mobile App?</h2>
              <p className="cs_fs_18 cs_mb_30 cs_white_color">
                Transform your business idea into a successful mobile application. Our expert developers 
                can create an app that engages users and drives business growth.
              </p>
              <div className="cs_btn_group cs_mb_40">
                <Link href="/contact" className="cs_btn cs_style_1 cs_fs_14 text-uppercase cs_white_bg cs_accent_color">
                  <span>Get Free App Consultation</span>
                </Link>
                <Link href="tel:+919266812465" className="cs_btn cs_style_2 cs_fs_14 text-uppercase cs_white_color">
                  <span>Call +91 92668 12465</span>
                </Link>
              </div>
              <p className="cs_fs_16 cs_white_color">
                <strong>Free consultation • Custom quote • Start development in 48 hours</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
};

export default MobileAppContent;
