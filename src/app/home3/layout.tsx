import React from 'react';
import Header3 from '../Components/Header/Header3';
import Footer2 from '../Components/Footer/Footer2';

const layout = ({ children }) => {
    return (
        <div className='main-page-area2'>
            <Header3></Header3>
            {children}
            <Footer2></Footer2>
        </div>
    );
};

export default layout;