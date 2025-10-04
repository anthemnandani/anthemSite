"use client";

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Image from "next/image"; // Next.js optimized image
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Brand = ({ data }) => {
  const [imageStatus, setImageStatus] = useState("loading");

  useEffect(() => {
    if (!data?.logo1) {
      setImageStatus("error");
      return;
    }

    setImageStatus("loading");

    // Preload image
    const img = new window.Image();
    img.src = data.logo1;

    const handleLoad = () => setTimeout(() => setImageStatus("loaded"), 100);
    const handleError = () => setTimeout(() => setImageStatus("error"), 100);

    img.onload = handleLoad;
    img.onerror = handleError;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [data]);

  const width = 200;
  const height = 100;

  return (
    <div className="brand-item">
      <a href={data?.websiteAddress || "#"} target="_blank" rel="noreferrer">
        <div
          className="image-container position-relative"
          style={{ width, height }}
        >
          {/* Loading Skeleton */}
          {(!data?.logo1 || imageStatus === "loading") && (
            <Skeleton
              height={height}
              width={width}
              className="rounded"
              baseColor="#f0f0f0"
              highlightColor="#e0e0e0"
              style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
            />
          )}

          {/* Fallback image if error */}
          {imageStatus === "error" && (
            <Image
              src="/fallback-image.png" // Add your fallback image in /public
              alt={data?.clientName || "Brand"}
              width={width}
              height={height}
              style={{ objectFit: "contain" }}
              priority
            />
          )}

          {/* Actual image */}
          {imageStatus === "loaded" && (
            <Image
              src={data.logo1}
              alt={data.clientName}
              title={data.clientName}
              width={width}
              height={height}
              style={{ objectFit: "contain" }}
              priority
            />
          )}
        </div>
      </a>
    </div>
  );
};

Brand.propTypes = {
  data: PropTypes.shape({
    logo1: PropTypes.string,
    clientName: PropTypes.string,
    websiteAddress: PropTypes.string,
  }),
};

export default Brand;
