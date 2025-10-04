"use client";

import PropTypes from "prop-types";
import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, content, contentTwo, contentThree, image }) => {
  const publicUrl = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL;

  return (
    <div
      className="relative page-title-section section section-padding-top overlay-two"
      style={{
        backgroundImage: `url(${publicUrl}/${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative page-title">
        <div className="container">
          <h1
            className="title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
        </div>
      </div>

      <div className="relative page-breadcrumb position-static">
        <div className="container">
          <ul className="breadcrumb justify-content-center">
            <li>
              <Link href="/">{content}</Link>
            </li>

            {!contentThree ? (
              <li className="current">{contentTwo}</li>
            ) : (
              <li>
                {contentTwo === "OurWork" ? (
                  <Link href={`/${contentTwo}`}>{contentTwo}</Link>
                ) : (
                  <Link href={`/Home/${contentTwo}`}>{contentTwo}</Link>
                )}
              </li>
            )}

            {contentThree && <li className="current">{contentThree}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentTwo: PropTypes.string,
  contentThree: PropTypes.string,
  image: PropTypes.string,
};

export default Breadcrumb;
