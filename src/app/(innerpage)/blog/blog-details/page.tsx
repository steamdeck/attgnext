import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import BlogDetails from '../../../Components/BlogDetails/BlogDetails';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Blog Details"
            ></BreadCumb>         
            <BlogDetails></BlogDetails>       
    </div>
  );
};

export default page;