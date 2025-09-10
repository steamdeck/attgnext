import React from 'react';
import Header2 from '../Components/Header/Header2';
import Footer2 from '../Components/Footer/Footer2';

const layout = ({ children }) => {
    return (
        <div className='main-page-area3'>
           <Header2></Header2>
            {children}
            <Footer2></Footer2>
        </div>
    );
};

export default layout;