import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Blog4 from '../../Components/Blog/Blog4';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Blog"
            ></BreadCumb>     
            <Blog4></Blog4>        
    </div>
  );
};

export default page;