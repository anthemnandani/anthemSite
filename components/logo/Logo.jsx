import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ image }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const appDarkMode = typeof window !== "undefined" ? localStorage.getItem("appDarkMode") : null;

  return (
    <div className="header-logo">
     <Link href={process.env.NEXT_PUBLIC_URL}>
        <div className="logo-wrapper">
          <Image
          src={`${image}`}
            alt="logo"
            className="dark-logo"
            width={150} // your logo width
            height={50} // your logo height
          />
          <div className="logo-overlay">
            {/* Optional overlay content */}
          </div>
        </div>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Logo;
