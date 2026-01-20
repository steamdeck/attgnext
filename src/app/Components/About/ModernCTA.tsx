"use client"
import React from 'react';
import Link from 'next/link';

const ModernCTA = () => {
    return (
        <section className="position-relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, #103b66 0%, #0a2a4a 100%)',
            position: 'relative'
        }}>
            {/* Decorative Background Elements */}
            <div className="position-absolute" style={{
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                opacity: '0.1',
                pointerEvents: 'none'
            }}>
                <div className="position-absolute" style={{
                    top: '10%',
                    left: '5%',
                    width: '200px',
                    height: '200px',
                    background: '#3F66EF',
                    borderRadius: '50%',
                    filter: 'blur(80px)'
                }}></div>
                <div className="position-absolute" style={{
                    bottom: '10%',
                    right: '5%',
                    width: '250px',
                    height: '250px',
                    background: '#EA7010',
                    borderRadius: '50%',
                    filter: 'blur(80px)'
                }}></div>
            </div>

            <div className="container position-relative" style={{ zIndex: '1' }}>
                <div className="row">
                    <div className="col-12">
                        <div className="cs_section_heading cs_style_1 text-center cs_mb_40">
                            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown" style={{ color: '#FF8C42' }}>
                                <span className="cs_shape_right"></span>Ready to Grow<span className="cs_shape_right"></span>
                            </p>
                            <h2 className="cs_fs_48 cs_white_color cs_mb_20 wow fadeInUp">
                                Let's Write Your Success Story Together
                            </h2>
                            <p className="cs_fs_18 cs_white_color cs_mb_0 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', margin: '0 auto', opacity: '0.9' }}>
                                Every great partnership begins with a conversation. Whether you're looking to boost your online visibility, drive more conversions, or completely transform your digital strategy—we're here to make it happen.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Benefits */}
                <div className="row cs_gap_y_20 justify-content-center cs_mb_40">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="cs_card cs_style_2 cs_radius_15 cs_pt_25 cs_pb_25 cs_pl_20 cs_pr_20 h-100" style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'white'
                        }}>
                            <div className="d-flex align-items-center gap-3">
                                <div className="cs_icon_wrapper cs_center" style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '50%',
                                    flexShrink: '0'
                                }}>
                                    <i className="bi bi-search cs_fs_20" style={{ color: '#FF8C42' }}></i>
                                </div>
                                <div>
                                    <h3 className="cs_fs_16 cs_semibold mb-1">Free Audit</h3>
                                    <p className="cs_fs_13 mb-0" style={{ opacity: '0.8' }}>Comprehensive digital presence analysis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="cs_card cs_style_2 cs_radius_15 cs_pt_25 cs_pb_25 cs_pl_20 cs_pr_20 h-100" style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'white'
                        }}>
                            <div className="d-flex align-items-center gap-3">
                                <div className="cs_icon_wrapper cs_center" style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '50%',
                                    flexShrink: '0'
                                }}>
                                    <i className="bi bi-lightning-charge cs_fs_20" style={{ color: '#3F66EF' }}></i>
                                </div>
                                <div>
                                    <h3 className="cs_fs_16 cs_semibold mb-1">Fast Results</h3>
                                    <p className="cs_fs_13 mb-0" style={{ opacity: '0.8' }}>See measurable impact quickly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="cs_card cs_style_2 cs_radius_15 cs_pt_25 cs_pb_25 cs_pl_20 cs_pr_20 h-100" style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'white'
                        }}>
                            <div className="d-flex align-items-center gap-3">
                                <div className="cs_icon_wrapper cs_center" style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '50%',
                                    flexShrink: '0'
                                }}>
                                    <i className="bi bi-shield-check cs_fs_20" style={{ color: '#28a745' }}></i>
                                </div>
                                <div>
                                    <h3 className="cs_fs_16 cs_semibold mb-1">Guaranteed</h3>
                                    <p className="cs_fs_13 mb-0" style={{ opacity: '0.8' }}>Results-driven approach</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="d-flex flex-wrap justify-content-center gap-3 wow fadeInUp" data-wow-delay="0.6s">
                            <Link 
                                href="/contact" 
                                className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase"
                                style={{ 
                                    background: '#EA7010', 
                                    borderColor: '#EA7010',
                                    minWidth: '200px'
                                }}
                                aria-label="Request free consultation"
                            >
                                <span>Request Free Consultation</span>
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                            <Link 
                                href="/service" 
                                className="cs_btn cs_style_2 cs_fs_14 cs_bold text-uppercase"
                                style={{ 
                                    background: 'transparent', 
                                    borderColor: 'white',
                                    color: 'white',
                                    minWidth: '200px'
                                }}
                                aria-label="Explore our solutions"
                            >
                                <span>Explore Our Solutions</span>
                            </Link>
                        </div>
                        
                        <p className="cs_fs_14 cs_white_color cs_mt_30 mb-0" style={{ opacity: '0.7' }}>
                            <i className="bi bi-shield-check me-2"></i> No long-term contracts • <i className="bi bi-credit-card me-2 ms-2"></i> Cancel anytime • <i className="bi bi-graph-up-arrow ms-2 me-2"></i> Results guaranteed
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModernCTA;