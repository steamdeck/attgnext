import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Blog4 from '../../Components/Blog/Blog4';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="https://placeholdr.ai/3a3299b3-c1ed-414a-a934-5f005dfbf29a/1024/412"
                Title="Blog"
            ></BreadCumb>     
            <Blog4></Blog4>        
    </div>
  );
};

export default page;