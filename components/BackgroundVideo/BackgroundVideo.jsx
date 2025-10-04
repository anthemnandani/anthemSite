"use client";

import React from "react";

const BackgroundVideo = ({ videoSrc, overlayColor, children, className }) => {
  return (
    <div
      className={`relative overflow-hidden w-full ${className}`}
      style={{ height: "100vh" }} // Full viewport height
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_BASE_URL + videoSrc}
        autoPlay
        loop
        muted
        style={{ objectFit: "cover", zIndex: -1 }} // Video behind overlay
      />
      {overlayColor && (
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundColor: overlayColor,
            mixBlendMode: "multiply",
            zIndex: 0, // Overlay above video
          }}
        />
      )}
      <div className="relative z-10">{children}</div> {/* Content on top */}
    </div>
  );
};

export default BackgroundVideo;
