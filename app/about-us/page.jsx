"use client";

import React from "react";
import SEO from "@/components/SEO";
import IntroTwo from "@/container/IntroSlider/IntroTwo";
import AboutFour from "@/container/About/AboutFour";
import Video from "@/container/Video/Video";
import AboutFive from "@/container/About/AboutFive";
import TestimonialContainer from "@/container/Testimonial/TestimonialContainer";
import CallToActionTwo from "@/container/CallToAction/CallToActionTwo";

const AboutUs = () => {
  return (
    <>
      <SEO
        title="Anthem Infotech - About Us"
        description="Learn more about Anthem Infotech, a leading provider of tech solutions. Discover our mission, values, and commitment to innovation and client success."
        ogtitle="Anthem Infotech - About Us"
        ogdescription="Learn more about Anthem Infotech, a leading provider of tech solutions. Discover our mission, values, and commitment to innovation and client success."
      />

      {/* Intro Section with Background Video */}
      <IntroTwo />

      {/* About Section with Fun Facts */}
      <AboutFour classOption="bg-white" />

      {/* Video Section */}
      <Video />

      {/* About Images / Parallax Section */}
      <AboutFive classOption="bg-white" />

      {/* Testimonials */}
      <TestimonialContainer classOption="background-1" />

      {/* Call to Action */}
      <CallToActionTwo classOption="bg-white" />
    </>
  );
};

export default AboutUs;
