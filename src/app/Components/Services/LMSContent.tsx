"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FaqAccordion from '../Faq/FaqAccordion';

const LMSContent = () => {
  const faqItems = [
    {
      question: "What is LMS and why does my organization need it?",
      answer: "LMS (Learning Management System) is software that helps organizations deliver, track, and manage online learning and training programs. If you're delivering training in person, managing courses manually, or struggling to track student progress, an LMS can help you automate course delivery, improve learning outcomes, and reduce training costs."
    },
    {
      question: "What's the difference between custom LMS and off-the-shelf LMS software?",
      answer: "Off-the-shelf LMS software offers standard features but may not fit your specific learning needs or workflows. Custom LMS is built specifically for your organization, tailored to your course structure, branding, and requirements. Custom LMS offers more flexibility, better fit, and can integrate with your existing systems."
    },
    {
      question: "How long does it take to implement an LMS system?",
      answer: "Implementation time depends on the complexity of your requirements. A basic LMS with core features can be implemented in 8-12 weeks, while a more complex system with advanced features and integrations may take 16-20 weeks. We provide a detailed timeline during the requirements analysis phase."
    },
    {
      question: "Can you integrate LMS with our existing systems?",
      answer: "Yes! We can integrate your LMS with student information systems, HR systems, payment gateways, video conferencing tools, and other business applications. Integration ensures seamless data flow and eliminates duplicate data entry."
    },
    {
      question: "What features do you typically include in an LMS?",
      answer: "Common features include course management, student enrollment, progress tracking, assessments and quizzes, certificates, video streaming, discussion forums, gradebooks, reporting, and mobile access. We customize features based on your needs and can add industry-specific features as required."
    },
    {
      question: "Can students access courses on mobile devices?",
      answer: "Yes! Our LMS solutions are fully responsive and mobile-friendly. Students can access courses, take quizzes, view progress, and interact with content on smartphones and tablets. We also offer native mobile apps for iOS and Android if required."
    },
    {
      question: "How do you handle video content and live classes?",
      answer: "We integrate video streaming capabilities including video uploads, video hosting, live streaming for webinars, and integration with video conferencing tools like Zoom and Google Meet. Video content is optimized for different devices and network conditions."
    },
    {
      question: "Can you migrate existing course content to the new LMS?",
      answer: "Yes! We can migrate your existing course content including videos, documents, quizzes, assignments, and student data to the new LMS. We ensure data integrity and maintain course structure during migration."
    },
    {
      question: "How much does a custom LMS system cost?",
      answer: "LMS costs vary based on features, complexity, integrations, and number of users. We provide detailed quotes after understanding your requirements. Custom LMS can be more cost-effective than paying monthly fees for off-the-shelf software, especially for larger organizations."
    },
    {
      question: "How do I get started with your LMS development services?",
      answer: "Contact us for a free LMS consultation. We'll analyze your learning requirements, discuss your objectives, and recommend the best LMS solution for your organization. We can start development within 2-3 weeks of project approval."
    }
  ];
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
                  <span className="cs_shape_right"></span>Why Choose Our LMS Solutions<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">Transform Your Learning and Training Programs</h2>
                <p className="cs_fs_18 cs_mb_30">
                  Learning Management Systems (LMS) enable organizations to deliver online training, manage courses, 
                  track student progress, and improve learning outcomes. We develop custom LMS solutions tailored to 
                  your needs, helping you create engaging learning experiences. Our team has built 150+ LMS platforms, 
                  helping educational institutions and businesses improve training efficiency by an average of 60% and 
                  increase student engagement by 75%.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_choose_content">
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/engagement.svg" alt="Engagement" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">75% Engagement Increase</h3>
                  <p className="cs_choose_subtitle">Average 75% increase in student engagement with interactive learning features</p>
                </div>
                <div className="cs_choose_item cs_mb_30">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/automation.svg" alt="Automation" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Automated Learning</h3>
                  <p className="cs_choose_subtitle">Automate course delivery, assessments, certifications, and progress tracking</p>
                </div>
                <div className="cs_choose_item">
                  <div className="cs_choose_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Analytics" width={40} height={40} />
                  </div>
                  <h3 className="cs_choose_title cs_fs_22 cs_semibold cs_mb_10">Learning Analytics</h3>
                  <p className="cs_choose_subtitle">Track student progress, performance, and learning outcomes with comprehensive analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* LMS Features */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_right"></span>Our LMS Features<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Complete Learning Management Solution</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/course.svg" alt="Course Management" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Course Management</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Create, organize, and manage courses with multimedia content, quizzes, assignments, and resources.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/student.svg" alt="Student Tracking" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Student Tracking</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Track student progress, attendance, completion rates, and performance across all courses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/assessment.svg" alt="Assessments" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Assessments & Exams</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Create quizzes, exams, assignments with automated grading, feedback, and progress tracking.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src="/assets/img/icons/certificate.svg" alt="Certificates" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">Certificates & Badges</h3>
                  <p className="cs_card_subtitle cs_mb_22">
                    Issue certificates and badges upon course completion with customizable templates.
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
            <h2 className="cs_fs_48 mb-0">Our 6-Step LMS Implementation Process</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">01</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Requirements Analysis</h3>
                <p className="cs_process_subtitle">We analyze your learning needs, course structure, and user requirements.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">02</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">System Design</h3>
                <p className="cs_process_subtitle">We design a custom LMS solution tailored to your learning objectives.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">03</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Development</h3>
                <p className="cs_process_subtitle">We develop your LMS with modern technologies and best practices.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">04</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Content Migration</h3>
                <p className="cs_process_subtitle">We migrate your existing course content and data into the new LMS.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">05</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Testing & Training</h3>
                <p className="cs_process_subtitle">We test all features thoroughly and train your team on system usage.</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="cs_process_item text-center">
                <div className="cs_process_number cs_center cs_radius_50 cs_mb_20">06</div>
                <h3 className="cs_process_title cs_fs_20 cs_semibold cs_mb_10">Deployment & Support</h3>
                <p className="cs_process_subtitle">We deploy your LMS and provide ongoing support, maintenance, and updates.</p>
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
                <h2 className="cs_fs_48 cs_mb_30">Why LMS Matters for Your Organization</h2>
                <p className="cs_fs_18 cs_mb_30">
                  A well-implemented LMS can transform how you deliver training and education. Here&apos;s how our 
                  LMS solutions can transform your learning programs:
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_benefits_list">
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/engagement.svg" alt="Improved Learning" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Improved Learning Outcomes</h4>
                    <p className="cs_benefit_desc">Interactive content, progress tracking, and personalized learning paths improve student success</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/automation.svg" alt="Cost Reduction" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Reduced Training Costs</h4>
                    <p className="cs_benefit_desc">Eliminate travel costs, reduce instructor time, and scale training efficiently online</p>
                  </div>
                </div>
                <div className="cs_benefit_item cs_mb_25">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/analytics.svg" alt="Analytics" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Learning Analytics</h4>
                    <p className="cs_benefit_desc">Track student progress, identify learning gaps, and measure training effectiveness</p>
                  </div>
                </div>
                <div className="cs_benefit_item">
                  <div className="cs_benefit_icon cs_center cs_radius_50 cs_mb_15">
                    <Image src="/assets/img/icons/mobile.svg" alt="Accessibility" width={30} height={30} />
                  </div>
                  <div className="cs_benefit_content">
                    <h4 className="cs_benefit_title cs_fs_18 cs_semibold cs_mb_5">Flexible Learning</h4>
                    <p className="cs_benefit_desc">Students can learn anytime, anywhere with mobile-friendly access to courses</p>
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
            <h2 className="cs_fs_48 mb-0">LMS Solutions FAQ</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <FaqAccordion items={faqItems} />
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
            <h2 className="cs_fs_48 mb-0">LMS Implementation Case Studies</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_p_40" style={{ 
                marginBottom: '30px', 
                padding: '40px 30px',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: '#ffffff',
                boxShadow: '0 10px 30px rgba(79, 172, 254, 0.3)'
              }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15" style={{ color: '#ffffff' }}>Educational Institution</h3>
                <p className="cs_case_challenge cs_mb_20" style={{ color: '#f0f0f0' }}>
                  <strong style={{ color: '#ffffff' }}>Challenge:</strong> A university needed to deliver online courses, manage student enrollment, and track academic progress for remote learning.
                </p>
                <p className="cs_case_solution cs_mb_20" style={{ color: '#f0f0f0' }}>
                  <strong style={{ color: '#ffffff' }}>Solution:</strong> We developed a custom LMS with course management, student enrollment, gradebook, assessments, video streaming, and academic reporting.
                </p>
                <div className="cs_case_results" style={{ color: '#f0f0f0' }}>
                  <strong style={{ color: '#ffffff' }}>Results:</strong>
                  <ul className="cs_mt_10" style={{ color: '#f0f0f0' }}>
                    <li>80% increase in online course enrollment</li>
                    <li>65% reduction in administrative workload</li>
                    <li>70% improvement in student engagement</li>
                    <li>50% reduction in training delivery costs</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20" style={{ color: '#f0f0f0' }}>
                  <strong style={{ color: '#ffffff' }}>Timeline:</strong> 16 weeks
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_case_study cs_radius_20 cs_p_40" style={{ 
                marginBottom: '30px', 
                padding: '40px 30px',
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                color: '#ffffff',
                boxShadow: '0 10px 30px rgba(250, 112, 154, 0.3)'
              }}>
                <h3 className="cs_case_title cs_fs_24 cs_semibold cs_mb_15" style={{ color: '#ffffff' }}>Corporate Training</h3>
                <p className="cs_case_challenge cs_mb_20" style={{ color: '#f0f0f0' }}>
                  <strong style={{ color: '#ffffff' }}>Challenge:</strong> A large corporation needed to train employees across multiple locations, track compliance training, and manage certifications.
                </p>
                <p className="cs_case_solution cs_mb_20" style={{ color: '#f0f0f0' }}>
                  <strong style={{ color: '#ffffff' }}>Solution:</strong> We built an LMS with employee training modules, compliance tracking, certification management, reporting, and mobile access.
                </p>
                <div className="cs_case_results" style={{ color: '#f0f0f0' }}>
                  <strong style={{ color: '#ffffff' }}>Results:</strong>
                  <ul className="cs_mt_10" style={{ color: '#f0f0f0' }}>
                    <li>60% reduction in training costs</li>
                    <li>85% improvement in training completion rates</li>
                    <li>90% reduction in training delivery time</li>
                    <li>75% increase in employee satisfaction with training</li>
                  </ul>
                </div>
                <div className="cs_case_timeline cs_mt_20" style={{ color: '#f0f0f0' }}>
                  <strong style={{ color: '#ffffff' }}>Timeline:</strong> 14 weeks
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
              <h2 className="cs_fs_48 cs_fw_bold cs_mb_20 cs_white_color">Ready to Transform Your Learning Programs?</h2>
              <p className="cs_fs_18 cs_mb_30 cs_white_color">
                Start delivering effective online training and education with a custom LMS solution. Our LMS experts 
                can help you build a system that engages learners, tracks progress, and improves learning outcomes.
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

export default LMSContent;

