"use client"; // needed if any component uses state or effects

import React from "react";

import SEO from "../../components/SEO";
import IntroThree from "../../container/IntroSlider/IntroThree";
import ContactInformation from "../../container/ContactInformation/ContactInformation";
import GoogleMap from "../../container/Map/GoogleMap";
import ContactFromContainer from "../../container/ContactFromContainer/ContactFromContainer";


const ContactUs = () => {
  return (
    <>
      <SEO
        title="Anthem Infotech - Contact Us"
        description="Get in touch with Anthem Infotech. Whether you have inquiries or need assistance, our team is here to help. Reach out to us today!"
        ogtitle="Anthem Infotech - Contact Us"
        ogdescription="Get in touch with Anthem Infotech. Whether you have inquiries or need assistance, our team is here to help. Reach out to us today!"
      />

     
      <IntroThree />
      <ContactInformation classOption="bg-white" />
      <GoogleMap classOption="bg-white" />
      <ContactFromContainer classOption="background-1" />
    
    </>
  );
};

export default ContactUs;
