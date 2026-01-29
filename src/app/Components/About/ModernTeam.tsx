"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ModernTeam = () => {
    const team = [
        {
            name: 'Alex Thomax',
            role: 'Founder & Director',
            image: 'https://i.ibb.co/rK6Nw1zF/Alex-Thomas.jpg',
            bio: 'Visionary leader with expertise in building innovative digital solutions and driving business growth.',
            social: { linkedin: '#', twitter: '#', email: '#' }
        },
        {
            name: 'Hardik Vaish',
            role: 'Senior Developer',
            image: 'https://i.ibb.co/PvwSYB7M/Hardik-Vaish.jpg',
            bio: 'Skilled developer specializing in building scalable web applications and delivering high-quality solutions.',
            social: { linkedin: '#', twitter: '#', email: '#' }
        },
        {
            name: 'Vinit Pushpak',
            role: 'Digital Marketing Head',
            image: 'https://i.ibb.co/1twVNRFX/Vinit-Pushpak.jpg',
            bio: 'Digital marketing strategist driving brand growth through data-driven campaigns and innovative strategies.',
            social: { linkedin: '#', twitter: '#', email: '#' }
        },
        {
            name: 'Rishi',
            role: 'Digital Marketing Assistant',
            image: 'https://i.ibb.co/JjvsyF78/Rishi.jpg',
            bio: 'Enthusiastic marketing professional assisting in campaign execution and social media management.',
            social: { linkedin: '#', twitter: '#', email: '#' }
        }
    ];

    return (
        <section className="position-relative overflow-hidden" style={{ background: '#F6F3FE' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cs_section_heading cs_style_1 text-center cs_mb_50">
                            <p className="cs_section_subtitle cs_center cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
                                <span className="cs_shape_right"></span>Meet The Team<span className="cs_shape_right"></span>
                            </p>
                            <h2 className="cs_fs_48 cs_mb_20 wow fadeInUp">The Experts Behind Your Success</h2>
                            <p className="cs_fs_18 cs_mb_0 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                Our diverse team of strategists, designers, developers, and analysts work together to deliver exceptional results.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row cs_gap_y_40">
                    {team.map((member, index) => (
                        <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${index * 0.15}s`}>
                            <div className="cs_card cs_style_2 cs_radius_20 overflow-hidden h-100 position-relative" style={{
                                background: 'white',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                transition: 'all 0.4s ease'
                            }}>
                                {/* Image */}
                                <div className="position-relative" style={{ height: '280px', overflow: 'hidden' }}>
                                    <Image 
                                        src={member.image}
                                        alt={member.name}
                                        width={280}
                                        height={280}
                                        unoptimized={true}
                                        style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover',
                                            transition: 'transform 0.4s ease'
                                        }}
                                    />
                                    
                                    {/* Social Overlay */}
                                    <div className="position-absolute" style={{
                                        top: '0',
                                        left: '0',
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(135deg, rgba(63, 102, 239, 0.95) 0%, rgba(234, 112, 16, 0.95) 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '15px',
                                        opacity: '0',
                                        transition: 'opacity 0.4s ease'
                                    }}>
                                        {Object.entries(member.social).map(([platform, url]) => (
                                            <Link key={platform} href={url} aria-label={platform} style={{
                                                width: '45px',
                                                height: '45px',
                                                background: 'white',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#3F66EF',
                                                fontSize: '18px',
                                                transition: 'transform 0.3s ease'
                                            }}>
                                                <i className={`bi bi-${platform === 'email' ? 'envelope' : platform}`}></i>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="cs_pt_25 cs_pb_25 cs_pl_20 cs_pr_20">
                                    <h3 className="cs_fs_20 cs_semibold cs_mb_5">{member.name}</h3>
                                    <p className="cs_fs_14 cs_accent_color cs_mb_10" style={{ fontWeight: '600' }}>{member.role}</p>
                                    <p className="cs_fs_13 mb-0" style={{ lineHeight: '1.6', color: '#666' }}>{member.bio}</p>
                                </div>

                                {/* Hover Effects */}
                                <style jsx>{`
                                    .cs_card:hover {
                                        transform: translateY(-10px);
                                        box-shadow: 0 20px 50px rgba(63, 102, 239, 0.15) !important;
                                    }
                                    .cs_card:hover .position-relative img {
                                        transform: scale(1.1);
                                    }
                                    .cs_card:hover .position-absolute {
                                        opacity: 1;
                                    }
                                `}</style>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team CTA */}
                <div className="row cs_mt_50">
                    <div className="col-12 text-center">
                        <div className="cs_card cs_style_2 cs_radius_15 cs_pt_40 cs_pb_40 cs_pl_40 cs_pr_40" style={{
                            background: 'linear-gradient(135deg, #103b66 0%, #0a2a4a 100%)',
                            color: 'white'
                        }}>
                            <h3 className="cs_fs_28 cs_mb_15">Want to Join Our Team?</h3>
                            <p className="cs_fs_16 mb-4" style={{ opacity: '0.9' }}>
                                We're always looking for talented individuals who are passionate about digital innovation and client success.
                            </p>
                            <Link 
                                href="/contact" 
                                className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase"
                                style={{ background: '#EA7010', borderColor: '#EA7010' }}
                                aria-label="View career opportunities"
                            >
                                <span>View Opportunities</span>
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModernTeam;