import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ERPContent = () => {
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
                  <span className="cs_shape_right"></span>Why Choose Our ERP Solutions<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Streamline Your Business Operations</h2>
                <p className="cs_fs_18 cs_mb_30">
                  Enterprise Resource Planning (ERP) software integrates all your business processes into a single 
                  system, improving efficiency, reducing costs, and enabling data-driven decisions. We develop custom 
                  ERP solutions tailored to your business needs, helping you manage finances, inventory, human resources, 
                  manufacturing, and more. Our team has implemented 150+ ERP systems, helping businesses reduce 
                  operational costs by an average of 25% and improve productivity by 40%.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_choose_content">
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/roi.svg" alt="ROI" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">25% Cost Reduction</h3>
                  <p className="cs_choose_subtitle">Average 25% reduction in operational costs within 12 months of ERP implementation</p>
                </div>
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/automation.svg" alt="Automation" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Process Automation</h3>
                  <p className="cs_choose_subtitle">Automate workflows across departments and eliminate manual data entry</p>
                </div>
                <div className="cs_choose_item">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Analytics" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Real-Time Analytics</h3>
                  <p className="cs_choose_subtitle">Get real-time insights into your business performance with comprehensive reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* ERP Modules */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Our ERP Modules<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Complete ERP Solution for Your Business</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/finance.svg" alt="Finance" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Financial Management</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Manage accounting, invoicing, budgeting, financial reporting, and cash flow in one system.
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
                    Track inventory levels, manage stock, automate reordering, and optimize warehouse operations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/hr.svg" alt="HR" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Human Resources</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Manage employee data, payroll, attendance, leave management, and performance tracking.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/manufacturing.svg" alt="Manufacturing" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Manufacturing</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Manage production planning, bill of materials, quality control, and manufacturing workflows.
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
            <h2 className="cs_fs_48 mb-0">Our 6-Step ERP Implementation Process</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">01</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Business Analysis</h3>
                <p className="cs_process_subtitle">We analyze your business processes, requirements, and identify improvement opportunities.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">02</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">System Design</h3>
                <p className="cs_process_subtitle">We design a custom ERP solution with modules tailored to your business needs.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">03</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Development</h3>
                <p className="cs_process_subtitle">We develop your ERP system with modern technologies and best practices.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">04</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Data Migration</h3>
                <p className="cs_process_subtitle">We migrate your existing business data safely and securely into the new ERP system.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">05</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Testing & Training</h3>
                <p className="cs_process_subtitle">We test all modules thoroughly and train your team on how to use the system effectively.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">06</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Deployment & Support</h3>
                <p className="cs_process_subtitle">We deploy your ERP system and provide ongoing support, maintenance, and updates.</p>
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
                <h2 className="cs_fs_48 cs_mb_30">Why ERP Matters for Your Business</h2>
                <p className="cs_fs_18 cs_mb_30">
                  A well-implemented ERP system can transform how you manage your business operations and drive growth. 
                  Here&apos;s how our ERP solutions can transform your business:
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_benefits_list">
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/roi.svg" alt="Cost Reduction" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Reduced Operational Costs</h4>
                    <p className="cs_benefit_desc">Eliminate duplicate systems, reduce manual work, and optimize resource utilization</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/automation.svg" alt="Process Efficiency" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Improved Process Efficiency</h4>
                    <p className="cs_benefit_desc">Streamline workflows, automate processes, and improve productivity across departments</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Data Integration" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Centralized Data Management</h4>
                    <p className="cs_benefit_desc">Single source of truth for all business data with real-time updates across departments</p>
                  </div>
                </div>
                <div className="cs_benefit_item">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Better Decisions" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Better Business Decisions</h4>
                    <p className="cs_benefit_desc">Make informed decisions with comprehensive reporting, analytics, and business intelligence</p>
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
            <h2 className="cs_fs_48 mb-0">ERP Solutions FAQ</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_faq_wrap">
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What is ERP and why does my business need it?
                  </div>
                  <div className="cs_faq_answer">
                    ERP (Enterprise Resource Planning) is software that integrates all your business processes including 
                    finance, inventory, HR, manufacturing, and sales into a single system. If you&apos;re using multiple 
                    disconnected systems, struggling with data accuracy, or spending too much time on manual processes, 
                    an ERP system can help you streamline operations, reduce costs, and improve efficiency.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What&apos;s the difference between custom ERP and off-the-shelf ERP software?
                  </div>
                  <div className="cs_faq_answer">
                    Off-the-shelf ERP software offers standard modules but may not fit your specific business processes. 
                    Custom ERP is built specifically for your business, tailored to your workflows, and can be integrated 
                    with your existing systems. Custom ERP offers more flexibility, better fit, and can be more cost-effective 
                    for businesses with unique requirements.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How long does it take to implement an ERP system?
                  </div>
                  <div className="cs_faq_answer">
                    Implementation time depends on the complexity of your business and number of modules required. 
                    A basic ERP with 3-4 modules can be implemented in 8-12 weeks, while a more complex system with 
                    multiple modules and integrations may take 16-24 weeks. We provide a detailed timeline during 
                    the business analysis phase.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can you integrate ERP with our existing business systems?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! We can integrate your ERP with accounting software, e-commerce platforms, CRM systems, 
                    payment gateways, shipping systems, and other business applications. Integration ensures 
                    seamless data flow and eliminates duplicate data entry across systems.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What ERP modules do you typically include?
                  </div>
                  <div className="cs_faq_answer">
                    Common modules include Financial Management, Inventory Management, Human Resources, Manufacturing, 
                    Sales & Distribution, Purchase Management, and Reporting & Analytics. We customize modules based 
                    on your business needs and can add industry-specific modules as required.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What data security measures do you implement?
                  </div>
                  <div className="cs_faq_answer">
                    We implement industry-standard security measures including data encryption, secure authentication, 
                    role-based access control, regular backups, and compliance with data protection regulations. Your 
                    business data is protected with the highest security standards and regular security audits.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Will you train our employees on how to use the ERP?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! We provide comprehensive training for your employees including user manuals, video tutorials, 
                    and hands-on training sessions for each module. We also provide ongoing support to help your team 
                    get the most out of your ERP system.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can the ERP be accessed on mobile devices?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! Our ERP solutions are responsive and work on all devices including smartphones and tablets. 
                    Your team can access business data, approve workflows, and manage operations from anywhere, anytime, 
                    with mobile-optimized interfaces.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How much does a custom ERP system cost?
                  </div>
                  <div className="cs_faq_answer">
                    ERP costs vary based on modules, complexity, integrations, and number of users. We provide detailed 
                    quotes after understanding your requirements. Custom ERP can be more cost-effective than paying 
                    monthly fees for off-the-shelf software, especially for larger businesses with specific needs.
                  </div>
                </div>
                <div className="cs_faq_item">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do I get started with your ERP development services?
                  </div>
                  <div className="cs_faq_answer">
                    Contact us for a free ERP consultation. We&apos;ll analyze your business processes, discuss your 
                    requirements, and recommend the best ERP solution for your business. We can start development 
                    within 2-3 weeks of project approval.
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
            <h2 className="cs_fs_48 mb-0">ERP Implementation Case Studies</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">Manufacturing Company</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A manufacturing company was using multiple disconnected systems for inventory, production, and finance, leading to data inconsistencies and operational inefficiencies.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We developed a custom ERP with integrated modules for inventory management, production planning, quality control, financial management, and reporting.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>30% reduction in operational costs within 12 months</li>
                    <li>45% improvement in inventory accuracy</li>
                    <li>35% reduction in production lead time</li>
                    <li>50% reduction in manual data entry time</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 16 weeks
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">Distribution Business</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A distribution business needed to manage inventory across multiple warehouses, streamline order processing, and improve financial reporting.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We built an ERP system with multi-warehouse inventory management, sales order processing, purchase management, financial accounting, and integrated reporting.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>40% improvement in order processing efficiency</li>
                    <li>25% reduction in inventory carrying costs</li>
                    <li>60% reduction in financial reporting time</li>
                    <li>35% improvement in customer satisfaction</li>
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
              <h2 className="cs_fs_48 cs_fw_bold cs_mb_20 cs_white_color">Ready to Streamline Your Business Operations?</h2>
              <p className="cs_fs_18 cs_mb_30 cs_white_color">
                Start managing your business more efficiently with a custom ERP solution. Our ERP experts 
                can help you build a system that integrates all your business processes and drives growth.
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

export default ERPContent;

