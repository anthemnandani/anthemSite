"use client";

import PropTypes from "prop-types";
import Head from "next/head";

const SEO = ({ title, description, ogtitle, ogdescription }) => {
  const canonicalUrl = process.env.NEXT_PUBLIC_CANONICAL_URL;

  return (
    <Head>
      <meta charSet="utf-8" />
      {title && <title>{title}</title>}
      <meta name="robots" content="index, follow" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {description && <meta name="description" content={description} />}
      {ogtitle && <meta property="og:title" content={ogtitle} />}
      {ogdescription && <meta property="og:description" content={ogdescription} />}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ogtitle: PropTypes.string,
  ogdescription: PropTypes.string,
};

export default SEO;
