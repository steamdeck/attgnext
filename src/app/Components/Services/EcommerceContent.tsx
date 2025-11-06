import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EcommerceContent = () => {
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
                  <span className="cs_shape_right"></span>Why Choose Our E-commerce Solutions<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Launch Your Online Store and Grow Your Sales</h2>
                <p className="cs_fs_18 cs_mb_30">
                  E-commerce has become essential for businesses to reach customers and grow revenue. We develop 
                  custom online stores that are user-friendly, secure, and optimized for conversions. Our team 
                  has built 300+ e-commerce websites, helping businesses increase online sales by an average of 
                  150% and improve customer satisfaction with seamless shopping experiences.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_choose_content">
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/roi.svg" alt="ROI" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">150% Sales Increase</h3>
                  <p className="cs_choose_subtitle">Average 150% increase in online sales within 6 months of launch</p>
                </div>
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/mobile.svg" alt="Mobile" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Mobile Optimized</h3>
                  <p className="cs_choose_subtitle">Fully responsive design that works seamlessly on all devices</p>
                </div>
                <div className="cs_choose_item">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/security.svg" alt="Security" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Secure & Fast</h3>
                  <p className="cs_choose_subtitle">SSL encryption, secure payment processing, and fast loading times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* E-commerce Features */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Our E-commerce Features<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Complete E-commerce Solution for Your Business</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/shopping.svg" alt="Product Catalog" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Product Catalog</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Unlimited products with categories, variants, attributes, and advanced filtering options.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/payment.svg" alt="Payment" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Payment Integration</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Multiple payment gateways including credit cards, debit cards, UPI, wallets, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/inventory.svg" alt="Inventory" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Inventory Management</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Real-time inventory tracking, low stock alerts, and automated stock management.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/shipping.svg" alt="Shipping" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Order Management</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Complete order processing, shipping integration, tracking, and customer notifications.
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
            <h2 className="cs_fs_48 mb-0">Our 6-Step E-commerce Development Process</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">01</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Planning & Strategy</h3>
                <p className="cs_process_subtitle">We analyze your business requirements, target audience, and create a comprehensive e-commerce strategy.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">02</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Design & UX</h3>
                <p className="cs_process_subtitle">We create beautiful, user-friendly designs that reflect your brand and optimize conversions.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">03</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Development</h3>
                <p className="cs_process_subtitle">We develop your e-commerce website with modern technologies and best practices.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">04</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Payment Integration</h3>
                <p className="cs_process_subtitle">We integrate secure payment gateways and configure payment processing for your store.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">05</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Testing & Optimization</h3>
                <p className="cs_process_subtitle">We test all features thoroughly, optimize performance, and ensure mobile responsiveness.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">06</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Launch & Support</h3>
                <p className="cs_process_subtitle">We launch your store and provide ongoing support, maintenance, and updates.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Benefits Section */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  <span className="cs_shape_right"></span>Business Benefits<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Why E-commerce Matters for Your Business</h2>
                <p className="cs_fs_18 cs_mb_30">
                  An e-commerce website opens new revenue streams, expands your customer reach, and provides 
                  a convenient shopping experience. Here&apos;s how our e-commerce solutions can transform your business:
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_benefits_list">
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/roi.svg" alt="Increased Sales" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Increased Sales Revenue</h4>
                    <p className="cs_benefit_desc">Sell 24/7 online, reach customers worldwide, and increase revenue with multiple sales channels</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/customer.svg" alt="Customer Reach" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Expanded Customer Reach</h4>
                    <p className="cs_benefit_desc">Reach customers beyond your local area and expand your market globally</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/automation.svg" alt="Automation" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Reduced Operating Costs</h4>
                    <p className="cs_benefit_desc">Lower overhead costs compared to physical stores and automate order processing</p>
                  </div>
                </div>
                <div className="cs_benefit_item">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Data Insights" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Data-Driven Insights</h4>
                    <p className="cs_benefit_desc">Track customer behavior, sales patterns, and inventory with comprehensive analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* FAQ Section */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Frequently Asked Questions<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">E-commerce Development FAQ</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_faq_wrap">
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What platforms do you use for e-commerce development?
                  </div>
                  <div className="cs_faq_answer">
                    We work with popular e-commerce platforms including WooCommerce, Shopify, Magento, BigCommerce, 
                    and custom solutions built with React, Next.js, and Node.js. We recommend the best platform 
                    based on your business needs, budget, and scalability requirements.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How long does it take to build an e-commerce website?
                  </div>
                  <div className="cs_faq_answer">
                    Development time depends on the complexity of your requirements. A basic e-commerce website 
                    with 50-100 products can be built in 6-8 weeks, while a more complex store with custom features 
                    and integrations may take 12-16 weeks. We provide a detailed timeline during the planning phase.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What payment gateways do you integrate?
                  </div>
                  <div className="cs_faq_answer">
                    We integrate all major payment gateways including Razorpay, Stripe, PayPal, Square, PayU, 
                    CCAvenue, and others. We can also integrate multiple payment options including credit cards, 
                    debit cards, UPI, digital wallets, and cash on delivery based on your requirements.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Is the e-commerce website mobile-friendly?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! All our e-commerce websites are fully responsive and mobile-optimized. With over 60% 
                    of online shopping happening on mobile devices, we ensure your store provides an excellent 
                    mobile shopping experience with fast loading times and easy navigation.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Do you provide SEO optimization for e-commerce websites?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! We implement SEO best practices including product page optimization, meta tags, structured 
                    data, sitemaps, fast loading times, and mobile optimization. We also help with product SEO, 
                    category optimization, and content marketing to improve your search rankings.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can you integrate inventory management systems?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! We can integrate your e-commerce website with existing inventory management systems, 
                    ERP software, accounting software, and other business tools. Integration ensures seamless 
                    data flow and eliminates duplicate data entry.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What security measures do you implement?
                  </div>
                  <div className="cs_faq_answer">
                    We implement industry-standard security measures including SSL encryption, secure payment 
                    processing, PCI DSS compliance, regular security updates, data backups, and protection 
                    against common vulnerabilities. Your customer data and transactions are protected with 
                    the highest security standards.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Do you provide ongoing support and maintenance?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! We provide ongoing support including bug fixes, security updates, feature additions, 
                    performance optimization, and technical support. We offer monthly maintenance plans to 
                    keep your e-commerce website running smoothly and securely.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can you add custom features to the e-commerce website?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! We can add custom features including product customization tools, subscription services, 
                    multi-vendor marketplace, loyalty programs, advanced filtering, product recommendations, 
                    and any other features specific to your business needs.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How much does an e-commerce website cost?
                  </div>
                  <div className="cs_faq_answer">
                    E-commerce website costs vary based on features, complexity, integrations, and platform. 
                    Basic e-commerce websites start from $2,000, while custom solutions with advanced features 
                    may cost $10,000 or more. We provide detailed quotes after understanding your requirements.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can you migrate my existing e-commerce store to a new platform?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! We can migrate your existing e-commerce store including products, customers, orders, 
                    and data to a new platform. We ensure data integrity, minimize downtime, and maintain 
                    SEO rankings during migration.
                  </div>
                </div>
                <div className="cs_faq_item">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do I get started with your e-commerce development services?
                  </div>
                  <div className="cs_faq_answer">
                    Contact us for a free e-commerce consultation. We&apos;ll analyze your business requirements, 
                    discuss your goals, and recommend the best e-commerce solution for your business. We can 
                    start development within 1-2 weeks of project approval.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Case Studies */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Success Stories<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">E-commerce Development Case Studies</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">Fashion Retail Store</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A fashion retailer needed to move online and compete with established e-commerce brands while maintaining brand identity.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We developed a custom e-commerce website with product catalog, multiple payment options, shipping integration, and mobile optimization.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>200% increase in online sales within 6 months</li>
                    <li>65% of sales from mobile devices</li>
                    <li>45% improvement in conversion rate</li>
                    <li>80% customer satisfaction score</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 10 weeks
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">Electronics Store</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> An electronics retailer wanted to expand online sales and manage inventory across multiple warehouses.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We built an e-commerce platform with multi-warehouse inventory management, advanced product filtering, payment integration, and order tracking.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>180% increase in online revenue within 8 months</li>
                    <li>50% reduction in order processing time</li>
                    <li>35% improvement in inventory accuracy</li>
                    <li>60% reduction in customer support tickets</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 12 weeks
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
              <h2 className="cs_fs_48 cs_fw_bold cs_mb_20 cs_white_color">Ready to Launch Your Online Store?</h2>
              <p className="cs_fs_18 cs_mb_30 cs_white_color">
                Start selling online and grow your business with a custom e-commerce website. Our e-commerce 
                experts can help you build a store that drives sales, engages customers, and grows your revenue.
              </p>
              <div className="cs_btn_group cs_mb_40">
                <Link href="/contact" className="cs_btn cs_style_1 cs_fs_14 text-uppercase cs_white_bg cs_accent_color">
                  <span>Get Free Consultation</span>
                </Link>
                <Link href="tel:+919266812465" className="cs_btn cs_style_2 cs_fs_14 text-uppercase cs_white_color">
                  <span>Call +91 92668 12465</span>
                </Link>
              </div>
              <p className="cs_fs_16 cs_white_color">
                <strong>Free consultation • Custom solutions • Ongoing support</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  );
};

export default EcommerceContent;

