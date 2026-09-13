import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FaqAccordion from '../Faq/FaqAccordion'
import { iconPath, type ServicePageContent } from './servicePageTypes'

/**
 * Renders a full service page body from a `ServicePageContent` object.
 *
 * Only class names that exist in src/app/assets/main.css are used, so the
 * output picks up the site theme without any extra stylesheet work.
 *
 * This is a server component: everything below renders as static HTML for
 * crawlers, while the interactive FAQ accordion is its own client component.
 */
const ServicePageSections = ({ content }: { content: ServicePageContent }) => {
  return (
    <div>
      {/* Intro + highlights */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-7">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  <span className="cs_shape_right"></span>
                  {content.intro.eyebrow}
                  <span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">{content.intro.heading}</h2>
              </div>
            </div>
            <div className="col-lg-5">
              {content.intro.paragraphs.map((paragraph, index) => (
                <p className="cs_fs_18 cs_mb_20" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="cs_height_60 cs_height_lg_50"></div>

          <div className="row cs_row_gap_30 cs_gap_y_30">
            {content.highlights.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.title}>
                <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                  <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                    <Image src={iconPath(item.icon)} alt="" width={40} height={40} aria-hidden="true" />
                  </span>
                  <div className="cs_card_content">
                    <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">{item.title}</h3>
                    <p className="cs_card_subtitle cs_mb_0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Features */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_left"></span>
              {content.features.eyebrow}
              <span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 cs_mb_21">{content.features.heading}</h2>
            <p className="cs_section_heading_text mb-0">{content.features.intro}</p>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            {content.features.items.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.title}>
                <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                  <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                    <Image src={iconPath(item.icon)} alt="" width={40} height={40} aria-hidden="true" />
                  </span>
                  <div className="cs_card_content">
                    <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">{item.title}</h3>
                    <p className="cs_card_subtitle cs_mb_0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Process */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_service_details">
            <div className="cs_steps_to_get_service">
              <div className="cs_section_heading cs_style_1 text-center">
                <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  <span className="cs_shape_left"></span>
                  {content.process.eyebrow}
                  <span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_21">{content.process.heading}</h2>
                <p className="mb-0">{content.process.intro}</p>
              </div>
              <div className="cs_height_60 cs_height_lg_50"></div>
              <div className="cs_process_steps_wrapper">
                {content.process.steps.map((step, index) => (
                  <div
                    className="cs_process_step cs_white_bg cs_radius_10"
                    key={step.title}
                  >
                    <span className="cs_step_index cs_center cs_blue_bg cs_fs_18 cs_bold cs_white_color cs_radius_50">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="cs_step_info">
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Deliverables */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_40">
            <div className="col-lg-5">
              <div className="cs_section_heading cs_style_1">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  <span className="cs_shape_right"></span>
                  {content.deliverables.eyebrow}
                  <span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_30">{content.deliverables.heading}</h2>
                <p className="cs_fs_18 mb-0">{content.deliverables.intro}</p>
              </div>
            </div>
            <div className="col-lg-7">
              <ul className="cs_list cs_style_1 cs_type_1 cs_mp_0">
                {content.deliverables.items.map((item) => (
                  <li key={item}>
                    <span className="cs_list_icon cs_center">
                      <i className="bi bi-check-circle"></i>
                    </span>
                    <span className="cs_list_text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* FAQ */}
      <section className="cs_gray_bg_2">
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_left"></span>
              {content.faqs.eyebrow}
              <span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">{content.faqs.heading}</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <FaqAccordion items={content.faqs.items} />
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* Related services */}
      <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center">
            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
              <span className="cs_shape_left"></span>
              Keep Exploring
              <span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0">Related Services</h2>
          </div>
          <div className="cs_height_60 cs_height_lg_50"></div>
          <div className="row cs_row_gap_30 cs_gap_y_30">
            {content.related.map((link) => (
              <div className="col-lg-4 col-md-6" key={link.href}>
                <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                  <div className="cs_card_content">
                    <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10">{link.label}</h3>
                    <Link
                      href={link.href}
                      className="cs_card_btn cs_center cs_radius_50 cs_white_color"
                      aria-label={link.label}
                    >
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    </div>
  )
}

export default ServicePageSections
