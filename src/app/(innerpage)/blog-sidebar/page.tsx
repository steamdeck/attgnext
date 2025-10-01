import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import BlogSidebar from '../../Components/BlogSidebar/BlogSidebar';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="https://placeholdr.ai/e8c47297-dfab-468c-b9db-e8189acd8d35/1024/412"
                Title="Blog Sidebar"
            ></BreadCumb>    
            <BlogSidebar></BlogSidebar>       
    </div>
  );
};

export default page;