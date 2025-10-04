// app/services/page.jsx
"use client";

import React from "react";
import SEO from "../../../components/SEO";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb";
import ServiceIconBoxTwo from "../../../container/service/ServiceIconBoxTwo";
import ServiceSkill from "../../../container/service/ServiceSkill";
import AboutSix from "../../../container/About/AboutSix";
import FunfactTwo from "../../../container/Funfact/FunfactTwo";
import ContactInformationThree from "../../../container/ContactInformation/ContactInformationThree";
import ScrollToTop from "../../../components/ScrollToTop";
import servicesData from "../../../data/services/services.json";

const ServicePage = () => {
  const filterservices = "Custom Software Development"; // Title to filter
  const filteredServices = Array.isArray(servicesData)
    ? servicesData.filter((data) => data.title === filterservices)
    : [];

  return (
    <>
      {/* SEO Metadata */}
      <SEO
        title="Anthem Infotech - Services"
        description="Explore Anthem’s comprehensive range of services designed to help businesses develop, scale, and transform using the latest technology solutions."
        ogtitle="Anthem Infotech - Services"
        ogdescription="Explore Anthem’s comprehensive range of services designed to help businesses develop, scale, and transform using the latest technology solutions."
      />

     

      {/* Breadcrumb */}
      <Breadcrumb
        image="/assets/images/bg/breadcrumb-bg-four.jpg"
        title="End-to-End Paratner in <span class='text-color-span'>Developing, Scaling</span>, and <span class='text-color-span'>Transforming</span> Businesses with Technology"
        content="Home"
        contentTwo="Services"
      />

      {/* Service Sections */}
      <ServiceIconBoxTwo classOption="bg-white" />
      <ServiceSkill classOption="background-1" />
      <AboutSix classOption="bg-white" />
      <FunfactTwo classOption="background-1" />
      <ContactInformationThree classOption="bg-white" />


      {/* Scroll to Top */}
      <ScrollToTop />
    </>
  );
};

export default ServicePage;
