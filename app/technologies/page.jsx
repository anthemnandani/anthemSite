"use client";

import React from "react";
import { useParams } from "next/navigation";
import WordCloud from "../../container/WordCloud/WordCloud";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb";
import SEO from "../../components/SEO";

const Technologies = () => {
  const params = useParams();
  const tech = params?.tech || "";
  const normalizedTech = decodeURIComponent(tech).toLowerCase();

  return (
    <React.Fragment>
      <SEO
        title={`Anthem Infotech Projects in ${normalizedTech}`}
        description={`Explore Anthem Infotech's projects that leverage ${normalizedTech}.`}
        ogtitle={`Anthem Infotech Projects in ${normalizedTech}`}
        ogdescription={`Discover how Anthem Infotech uses ${normalizedTech} in cutting-edge business solutions.`}
      />

      <Breadcrumb
        image="/images/bg/portfoliobg.webp"
        title="Technologies Powering Our Innovative Solutions"
        content="Home"
        contentTwo="Technologies"
      />
      <WordCloud classOption="bg-white" />
    </React.Fragment>
  );
};

export default Technologies;
