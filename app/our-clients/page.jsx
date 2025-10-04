"use client";

import React from "react";
import SEO from "../../components/SEO";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import BrandContainer from "../../container/Brand/BrandContainer";


const OurClients = () => {
  return (
    <>
      <SEO
        title="Anthem Infotech - Our Clients"
        description="Anthem Infotech is trusted by leading brands across various industries. Our clients benefit from innovative technology solutions that drive business growth and transformation."
        ogtitle="Anthem Infotech - Our Clients"
        ogdescription="Anthem Infotech is trusted by leading brands across various industries. Our clients benefit from innovative technology solutions that drive business growth and transformation."
      />

      <Breadcrumb
        image="images/bg/clients.webp"
        title="Trusted by Leading Brands Across Industries"
        content="Home"
        contentTwo="Our Clients"
      />
      <BrandContainer classOption="section-padding bg-white" />
    
    </>
  );
};

export default OurClients;
