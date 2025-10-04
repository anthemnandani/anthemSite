"use client";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Brand from "../../components/Brand/Brand";
import Swiper, { SwiperSlide } from "../../components/swiper";
import Loader from "../Loader/Loader";
import { getClients } from "../../services/clientsservice";
import { getToken } from "../../services/tokenservice";

const BrandContainer = ({ classOption }) => {
  const [token, setToken] = useState(null);
  const [brandData, setBrandData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch token on mount
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await getToken();
        setToken(data.token);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchToken();
  }, []);

  // Fetch brand data once token is available
  useEffect(() => {
    if (!token) return;

    const fetchClients = async () => {
      setLoading(true);
      try {
        const data = await getClients();
        const modifiedClients = data.map((client) => ({
          ...client,
          logo1: `${process.env.NEXT_PUBLIC_URL_CONTENT}/ClientImages/${client.logo1}`,
          logo2: `${process.env.NEXT_PUBLIC_URL_CONTENT}/ClientImages/${client.logo2}`,
        }));
        setBrandData(modifiedClients);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, [token]);

  const sliderOptions = {
    spaceBetween: 30,
    slidesPerView: 6,
    loop: brandData.length > 1, // Only loop if more than 1 slide
    breakpoints: {
      1200: { slidesPerView: 6 },
      992: { slidesPerView: 5 },
      768: { slidesPerView: 5 },
      576: { slidesPerView: 4 },
      320: { slidesPerView: 2 },
    },
  };

  if (loading) return <Loader />;

  if (!brandData.length) return null; // Don't render empty Swiper

  return (
    <section className={`brand-section section ${classOption}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up">
            <div className="brand-wrapper">
              <div className="brand-list">
                <Swiper
                  key={brandData.length} // Re-initialize Swiper if data changes
                  className="brand-carousel"
                  options={sliderOptions}
                >
                  {brandData.map((single, index) => (
                    <SwiperSlide key={index}>
                      <Brand data={single} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BrandContainer.propTypes = {
  classOption: PropTypes.string,
};

BrandContainer.defaultProps = {
  classOption: "brand-section section section-padding-bottom",
};

export default BrandContainer;
