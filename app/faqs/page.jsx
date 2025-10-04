"use client";

import React from "react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/container/Breadcrumb/Breadcrumb";
import Faq from "@/container/Faq/Faq";

const FaqsPage = () => {
  return (
    <>
      <SEO
        title="Anthem Infotech - FAQs"
        description="Find answers to your questions about Anthem Infotech's services, solutions, and how we can help your business succeed with our expert technology offerings."
        ogtitle="Anthem Infotech - FAQs"
        ogdescription="Find answers to your questions about Anthem Infotech's services, solutions, and how we can help your business succeed with our expert technology offerings."
      />

    
      <Breadcrumb
        image="/images/bg/faq.webp"
        title="Everything You Need to Know About Our Services and Solutions"
        content="Home"
        contentTwo="FAQs"
      />
      <Faq classOption="bg-white" />
    
    </>
  );
};

export default FaqsPage;
