import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CRMContent = () => {
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
                  <span className="cs_shape_right"></span>Why Choose Our CRM Solutions<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Transform Your Customer Relationships</h2>
                <p className="cs_fs_18 cs_mb_30">
                  Customer Relationship Management (CRM) software helps businesses manage customer interactions, 
                  streamline sales processes, and improve customer satisfaction. We develop custom CRM solutions 
                  tailored to your business needs, helping you track leads, manage customer data, and close more 
                  deals. Our team has built 200+ CRM systems, helping businesses increase sales by an average 
                  of 30% and improve customer retention by 40%.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_choose_content">
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/roi.svg" alt="ROI" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">30% Sales Increase</h3>
                  <p className="cs_choose_subtitle">Average 30% increase in sales revenue within 6 months of CRM implementation</p>
                </div>
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/automation.svg" alt="Automation" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Automated Workflows</h3>
                  <p className="cs_choose_subtitle">Automate repetitive tasks and focus on building relationships with customers</p>
                </div>
                <div className="cs_choose_item">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Analytics" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Data-Driven Insights</h3>
                  <p className="cs_choose_subtitle">Real-time analytics and reporting to make informed business decisions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* CRM Features */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Our CRM Features<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Complete CRM Solution for Your Business</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/leads.svg" alt="Lead Management" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Lead Management</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Capture, track, and manage leads from multiple sources with automated lead scoring and assignment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/pipeline.svg" alt="Sales Pipeline" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Sales Pipeline</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Visualize your sales pipeline, track deals through stages, and forecast revenue accurately.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/customer.svg" alt="Customer Database" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Customer Database</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Centralized customer database with contact information, interaction history, and preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/automation.svg" alt="Automation" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Task Automation</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Automate follow-ups, reminders, email campaigns, and other repetitive tasks to save time.
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
            <h2 className="cs_fs_48 mb-0">Our 6-Step CRM Implementation Process</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">01</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Requirements Analysis</h3>
                <p className="cs_process_subtitle">We analyze your business processes, sales workflows, and CRM requirements.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">02</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">System Design</h3>
                <p className="cs_process_subtitle">We design a custom CRM solution tailored to your business needs and workflows.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">03</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Development</h3>
                <p className="cs_process_subtitle">We develop your CRM system with modern technologies and best practices.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">04</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Data Migration</h3>
                <p className="cs_process_subtitle">We migrate your existing customer data safely and securely into the new CRM.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">05</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Testing & Training</h3>
                <p className="cs_process_subtitle">We test the system thoroughly and train your team on how to use it effectively.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">06</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Deployment & Support</h3>
                <p className="cs_process_subtitle">We deploy your CRM system and provide ongoing support and maintenance.</p>
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
                <h2 className="cs_fs_48 cs_mb_30">Why CRM Matters for Your Business</h2>
                <p className="cs_fs_18 cs_mb_30">
                  A well-implemented CRM system can transform how you manage customer relationships and drive sales. 
                  Here&apos;s how our CRM solutions can transform your business:
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
                    <p className="cs_benefit_desc">Track leads effectively, follow up on time, and close more deals with organized sales processes</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/customer.svg" alt="Customer Satisfaction" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Improved Customer Satisfaction</h4>
                    <p className="cs_benefit_desc">Provide better customer service with complete customer history and interaction tracking</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/automation.svg" alt="Time Savings" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Time Savings</h4>
                    <p className="cs_benefit_desc">Automate repetitive tasks and focus your time on building relationships and closing deals</p>
                  </div>
                </div>
                <div className="cs_benefit_item">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Data-Driven Decisions" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Data-Driven Decisions</h4>
                    <p className="cs_benefit_desc">Make informed business decisions with real-time analytics, reports, and sales forecasting</p>
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
            <h2 className="cs_fs_48 mb-0">CRM Solutions FAQ</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_faq_wrap">
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What is CRM and why does my business need it?
                  </div>
                  <div className="cs_faq_answer">
                    CRM (Customer Relationship Management) is software that helps businesses manage customer interactions, 
                    track sales opportunities, and improve customer relationships. If you&apos;re managing customer data in 
                    spreadsheets, losing track of leads, or struggling with follow-ups, a CRM system can help you organize 
                    customer data, automate tasks, and increase sales.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What&apos;s the difference between custom CRM and off-the-shelf CRM software?
                  </div>
                  <div className="cs_faq_answer">
                    Off-the-shelf CRM software offers standard features but may not fit your specific business processes. 
                    Custom CRM is built specifically for your business, tailored to your workflows, and can be integrated 
                    with your existing systems. Custom CRM offers more flexibility, better fit, and can be more cost-effective 
                    in the long run.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How long does it take to implement a CRM system?
                  </div>
                  <div className="cs_faq_answer">
                    Implementation time depends on the complexity of your requirements. A basic CRM can be implemented in 
                    4-6 weeks, while a more complex system with multiple integrations may take 8-12 weeks. We provide a 
                    detailed timeline during the requirements analysis phase.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can you integrate CRM with our existing systems?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! We can integrate your CRM with email systems, accounting software, e-commerce platforms, marketing 
                    automation tools, and other business systems. Integration ensures seamless data flow and eliminates 
                    duplicate data entry.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What data security measures do you implement?
                  </div>
                  <div className="cs_faq_answer">
                    We implement industry-standard security measures including data encryption, secure authentication, 
                    regular backups, role-based access control, and compliance with data protection regulations. Your 
                    customer data is protected with the highest security standards.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Will you train our team on how to use the CRM?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! We provide comprehensive training for your team including user manuals, video tutorials, and 
                    hands-on training sessions. We also provide ongoing support to help your team get the most out of 
                    your CRM system.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    Can the CRM be accessed on mobile devices?
                  </div>
                  <div className="cs_faq_answer">
                    Yes! Our CRM solutions are responsive and work on all devices including smartphones and tablets. 
                    Your sales team can access customer data, update deals, and manage tasks from anywhere, anytime.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    What kind of reporting and analytics does the CRM provide?
                  </div>
                  <div className="cs_faq_answer">
                    Our CRM provides comprehensive reporting including sales pipeline reports, revenue forecasts, 
                    lead conversion reports, customer activity reports, and custom reports based on your needs. 
                    All reports include real-time data and visual dashboards.
                  </div>
                </div>
                <div className="cs_faq_item cs_mb_20">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How much does a custom CRM system cost?
                  </div>
                  <div className="cs_faq_answer">
                    CRM costs vary based on features, complexity, and integrations required. We provide detailed 
                    quotes after understanding your requirements. Custom CRM can be more cost-effective than paying 
                    monthly fees for off-the-shelf software, especially for larger teams.
                  </div>
                </div>
                <div className="cs_faq_item">
                  <div className="cs_faq_question cs_fs_18 cs_semibold cs_mb_10">
                    How do I get started with your CRM development services?
                  </div>
                  <div className="cs_faq_answer">
                    Contact us for a free CRM consultation. We&apos;ll analyze your business processes, discuss your 
                    requirements, and recommend the best CRM solution for your business. We can start development 
                    within 1-2 weeks of project approval.
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
            <h2 className="cs_fs_48 mb-0">CRM Implementation Case Studies</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">B2B Sales Company</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> A B2B sales company was managing leads in spreadsheets, losing track of follow-ups, and struggling with sales forecasting.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We developed a custom CRM with lead management, sales pipeline tracking, automated follow-up reminders, and sales forecasting tools.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>35% increase in sales revenue within 6 months</li>
                    <li>50% reduction in lost leads</li>
                    <li>40% improvement in sales team productivity</li>
                    <li>60% reduction in time spent on administrative tasks</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 8 weeks
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_white_bg cs_p_40" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15">E-commerce Business</h3>
                <p className="cs_case_challenge cs_mb_20">
                  <strong>Challenge:</strong> An e-commerce business needed to manage customer support tickets, track customer interactions, and improve customer retention.
                </p>
                <p className="cs_case_solution cs_mb_20">
                  <strong>Solution:</strong> We built a CRM integrated with their e-commerce platform, including customer support ticketing, interaction history, and automated customer communication.
                </p>
                <div className="cs_case_results">
                  <strong>Results:</strong>
                  <ul className="cs_mt_10">
                    <li>45% improvement in customer satisfaction scores</li>
                    <li>30% reduction in customer support response time</li>
                    <li>25% increase in customer retention rate</li>
                    <li>50% improvement in customer support efficiency</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20">
                  <strong>Timeline:</strong> 10 weeks
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
              <h2 className="cs_fs_48 cs_fw_bold cs_mb_20 cs_white_color">Ready to Transform Your Customer Relationships?</h2>
              <p className="cs_fs_18 cs_mb_30 cs_white_color">
                Start managing your customer relationships more effectively with a custom CRM solution. Our CRM experts 
                can help you build a system tailored to your business needs and increase sales.
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

export default CRMContent;

