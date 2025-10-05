"use client";

import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import Vivus from "vivus";

const ContactInfoItem = ({ data }) => {
  const svgContainerRef = useRef(null);

  useEffect(() => {
    if (!data.icon) return;

    // Clear previous SVG
    svgContainerRef.current.innerHTML = "";

    // Initialize Vivus manually
    new Vivus(svgContainerRef.current, {
      file: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}${data.icon}`,
      type: "oneByOne", // correct key
      duration: 150, // number of frames (animation speed)
      start: "autostart", // autostart animation
      animTimingFunction: Vivus.EASE, // use Vivus constant
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.icon]);

  // Equalize heights (optional)
  useEffect(() => {
    const equalizeHeights = () => {
      const divs = document.querySelectorAll(".contact-info");
      let maxHeight = 0;

      divs.forEach((div) => {
        const height = div.offsetHeight;
        if (height > maxHeight) maxHeight = height;
      });

      divs.forEach((div) => {
        div.style.height = `${maxHeight}px`;
      });
    };

    equalizeHeights();
    window.addEventListener("resize", equalizeHeights);
    return () => window.removeEventListener("resize", equalizeHeights);
  }, []);

  return (
    <div style={{ height: "fit-content" }}>
      <div className="contact-info h-100">
        <div className="icon" ref={svgContainerRef}></div>
        <div className="info">
          <h4 className="title">{data.title}</h4>
          <span
            className="info-text"
            dangerouslySetInnerHTML={{ __html: data.info }}
          />
        </div>
      </div>
    </div>
  );
};

ContactInfoItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactInfoItem;
