"use client";

import React from "react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/container/Breadcrumb/Breadcrumb";
import TestimonialContainer from "@/container/Testimonial/TestimonialContainer";


const Testimonial = () => {
  return (
    <>
      <SEO
        title="Anthem Infotech - Testimonials"
        description="Read what our clients say about their experience with Anthem Infotech. Discover how our innovative solutions have helped businesses achieve success and drive growth."
        ogtitle="Anthem Infotech - Testimonials"
        ogdescription="Read what our clients say about their experience with Anthem Infotech. Discover how our innovative solutions have helped businesses achieve success and drive growth."
      />

   
      <Breadcrumb
        image="images/bg/testimonials.jpg"
        title="What Our Clients Say About Their Experience with Us"
        content="Home"
        contentTwo="Testimonials"
      />
      <TestimonialContainer classOption="bg-white" />
   
    </>
  );
};

export default Testimonial;
