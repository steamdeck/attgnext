import React from 'react';

const MissionVisionValues = () => {
    return (
        <section className="cs_about cs_style_1 position-relative">
            <div className="cs_height_60 cs_height_lg_50"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div style={{ 
                            display: 'flex', 
                            flexDirection: 'row', 
                            gap: '30px', 
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}>
                            <div style={{ 
                                flex: '1', 
                                minWidth: '280px', 
                                maxWidth: '400px',
                                padding: '30px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '10px',
                                textAlign: 'center'
                            }}>
                                <h3 className="cs_fs_24 cs_mb_3">Our Mission</h3>
                                <p className="cs_fs_18 mb-0">To empower businesses of all sizes with cutting-edge digital marketing solutions that drive measurable growth, enhance brand visibility, and create lasting customer relationships. We believe in transparency, innovation, and delivering value that exceeds expectations.</p>
                            </div>
                            <div style={{ 
                                flex: '1', 
                                minWidth: '280px', 
                                maxWidth: '400px',
                                padding: '30px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '10px',
                                textAlign: 'center'
                            }}>
                                <h3 className="cs_fs_24 cs_mb_3">Our Vision</h3>
                                <p className="cs_fs_18 mb-0">To be the leading digital marketing agency recognized for transforming businesses through strategic vision, creative excellence, and data-driven results. We envision a future where every business can leverage the power of digital marketing to achieve extraordinary success.</p>
                            </div>
                            <div style={{ 
                                flex: '1', 
                                minWidth: '280px', 
                                maxWidth: '400px',
                                padding: '30px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '10px',
                                textAlign: 'center'
                            }}>
                                <h3 className="cs_fs_24 cs_mb_3">Our Values</h3>
                                <p className="cs_fs_18 mb-0">Integrity, innovation, and client success are at the core of everything we do. We foster a culture of continuous learning, collaboration, and excellence, ensuring we stay ahead of industry trends and deliver solutions that make a real difference.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cs_height_60 cs_height_lg_50"></div>
        </section>
    );
};

export default MissionVisionValues;

