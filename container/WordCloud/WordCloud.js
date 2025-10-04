"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getToken } from "../../services/tokenservice";
import { getProjects } from "../../services/projectsservices";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";

// Dynamic import for ReactWordcloud (no SSR)
const ReactWordcloud = dynamic(
  () => import("react-wordcloud").then((mod) => mod.default),
  { ssr: false }
);

const WordCloud = ({ classOption }) => {
  const [token, setToken] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false); // <-- check for window
  const router = useRouter();

  // Ensure we're on client
  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  // Fetch token
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await getToken();
        if (data?.token) setToken(data.token);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchToken();
  }, []);

  // Fetch projects
  useEffect(() => {
    if (!token) return;

    const fetchProjects = async () => {
      try {
        const data = await getProjects(token);
        const uniqueTechnologies = new Set();

        data.forEach((project) => {
          if (project.technolgies) {
            project.technolgies
              .split(",")
              .map((tech) => tech.trim())
              .forEach((tech) => uniqueTechnologies.add(tech));
          }
        });

        const wordArray = Array.from(uniqueTechnologies).map((tech) => ({
          text: tech,
          value: Math.floor(Math.random() * 96) + 5,
        }));

        setProjects(wordArray);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [token]);

  const options = {
    rotations: 5,
    rotationAngles: [0, -90],
    fontFamily: "sans-serif",
    fontWeight: "normal",
    padding: 5,
    fontSizes: [30, 60],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
    enableTooltip: false,
    tooltipOptions: { theme: "custom" },
    svgAttributes: { className: "svg-hover" },
    textAttributes: { className: "wordcloud-text" },
  };

  const getCallback = (callbackName) => (word, event) => {
    const isActive = callbackName !== "onWordMouseOut";
    const element = event.target;

    element.addEventListener("click", () => {
      if (isActive) {
        const slug = word.text.toLowerCase().replace(/\s+/g, "-");
        router.push(`/OurWork/${slug}`);
      }
    });

    element.style.transition = "all 0.3s ease";
    element.style.fontSize = isActive ? "300%" : "";
    element.style.zIndex = isActive ? "999" : "0";
    element.style.cursor = "pointer";
    element.style.textDecoration = "none";
    element.style.color = "#000";
  };

  const callbacks = {
    getWordTooltip: (word) => word.text,
    onWordClick: getCallback("onWordClick"),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver: getCallback("onWordMouseOver"),
  };

  return (
    <div
      className={`section section-padding-t90-b100 svg-height-500 ${classOption}`}
      style={{ margin: "0 auto" }}
    >
      <div className="container">
        <SectionTitle
          headingOption="title fz-32"
          title="Anthem Infotech Leverages Innovative Technologies, Latest Tools, and Platforms to Deliver Scalable, Efficient Business Solutions"
        />
        {loading ? (
          <Loader />
        ) : isClient && projects?.length > 0 ? (
          <div className="wordcloud-bg">
            <ReactWordcloud words={projects} options={options} callbacks={callbacks} />
          </div>
        ) : (
          <p className="text-center">No technologies available.</p>
        )}
      </div>
    </div>
  );
};

export default WordCloud;
