"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";

const ReactVivus = dynamic(() => import("react-vivus"), { ssr: false });

const ContactInfoItem = ({ data }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only mark as mounted after first client render
    setMounted(true);
  }, []);

  return (
    <div className="contact-info-wrapper">
      <div className="contact-info h-100">
        <div className="icon">
          {mounted && data.icon && (
            <ReactVivus
              id={`contactsvg-${data.id}`}
              option={{
                file: `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}${data.icon}`,
                animTimingFunction: "EASE",
                type: "oneByOne",
                delay: 80,
              }}
            />
          )}
        </div>
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
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
  }),
};

export default ContactInfoItem;
