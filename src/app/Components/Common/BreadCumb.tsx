"use client"
import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import Link from "next/link";

const BreadCumb = ({Title,bgimg}) => {
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (

        <section className="cs_page_heading cs_bg_filed cs_center text-center cs_heading_bg position-relative" data-background={bgimg}>
        <div className="cs_overlay position-absolute"></div>
        <div className="container">
          <h1 className="cs_fs_50 cs_white_color cs_extra_bold cs_mb_20 wow fadeInDown">{Title}</h1>
          <ol className="breadcrumb wow fadeInUp">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active">{Title}</li>
          </ol>
        </div>
      </section>

    );
};

export default BreadCumb;