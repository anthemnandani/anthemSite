"use client";

import PropTypes from "prop-types";
import Image from "next/image";

const Testimonial = ({ data }) => {
  return (
    <div className="static-testimonial mb-6">
      <div className="testimonial-image">
        <Image
          src={process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL + data.image}
          alt={data.name}
          width={100}
          height={100}
          className="rounded-full"
          loading="lazy"
        />
      </div>
      <div className="testimonial-content">
        <p>{data.desc}</p>
      </div>
      <div className="author-info">
        <div className="cite">
          <h6 className="name">{data.name}</h6>
          <span className="position">{data.position}</span>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Testimonial;
