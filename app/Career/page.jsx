// app/career/page.jsx
"use client";

import React from "react";
import SEO from "../../components/SEO";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import CareerFromContainer from "../../container/CareerFromContainer/CareerFromContainer";


const Career = () => {
  return (
    <>
      {/* SEO Metadata */}
      <SEO
        title="Anthem Infotech - Career"
        description="Explore exciting career opportunities at Anthem Infotech. Join our innovative team and contribute to cutting-edge projects. Discover your next role today!"
        ogtitle="Anthem Infotech - Career"
        ogdescription="Explore exciting career opportunities at Anthem Infotech. Join our innovative team and contribute to cutting-edge projects. Discover your next role today!"
      />

   

      {/* Breadcrumb */}
      <Breadcrumb
        image="/images/bg/breadcrumb-bg.jpg"
        title="Explore Career Opportunities with Anthem Infotech"
        content="Home"
        contentTwo="Career"
      />

      {/* Career Form Section */}
      <CareerFromContainer classOption="background-7" />

 
    </>
  );
};

export default Career;
