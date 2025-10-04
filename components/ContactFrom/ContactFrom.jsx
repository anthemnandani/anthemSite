"use client";

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [token, setToken] = useState(null);

  // Color theme handling
  useEffect(() => {
    const updateTheme = () => {
      const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      document.querySelector("html").setAttribute("data-bs-theme", colorMode);
    };

    updateTheme();
    const listener = window.matchMedia("(prefers-color-scheme: dark)");
    listener.addEventListener("change", updateTheme);
    return () => listener.removeEventListener("change", updateTheme);
  }, []);

  // Get token from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef();

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const onSubmit = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      if (!recaptchaToken) {
        Swal.fire({
          title: "Please complete the ReCAPTCHA",
          icon: "error",
        });
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData();
      formData.append("Name", data.name);
      formData.append("Email", data.email);
      formData.append("Number", data.contactnumber);
      formData.append("Message", data.message);

      if (token && recaptchaToken) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/ContactUs/ContactUs`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          Swal.fire({
            title: response.data.msg,
            icon: "success",
          });
          setRecaptchaToken(null);
          recaptchaRef.current.reset();
          reset();
        }
      } else {
        console.error("Token is not available");
      }
    } catch (error) {
      console.error("Error in onSubmit: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-n6">
          <div className="col-md-6 col-12 mb-6">
            <input
              type="text"
              placeholder="Enter Name *"
              name="name"
              className="textbox-border"
              {...register("name", {
                required: "Name is required.",
                validate: (value) =>
                  (value.length >= 3 && value.length <= 50) ||
                  "Name must be between 3 and 50 characters.",
              })}
            />
            {errors?.name && <p className="text-danger">{errors.name.message}</p>}
          </div>

          <div className="col-md-6 col-12 mb-6">
            <input
              type="email"
              placeholder="Enter Email *"
              name="email"
              className="textbox-border"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address.",
                },
                validate: (value) =>
                  (value.length >= 3 && value.length <= 50) ||
                  "Email must be between 3 and 50 characters.",
              })}
            />
            {errors?.email && <p className="text-danger">{errors.email.message}</p>}
          </div>

          <div className="col-md-12 col-12 mb-6">
            <input
              type="text"
              placeholder="Contact Number *"
              name="contactnumber"
              className="textbox-border"
              {...register("contactnumber", {
                required: "Contact Number is required.",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "Invalid contact number.",
                },
                validate: (value) =>
                  (value.length >= 10 && value.length <= 13) ||
                  "Contact Number must be between 10 and 13 digits.",
              })}
            />
            {errors?.contactnumber && (
              <p className="text-danger">{errors.contactnumber.message}</p>
            )}
          </div>

          <div className="col-12 mb-6">
            <textarea
              name="message"
              className="textbox-border"
              placeholder="Message *"
              {...register("message", {
                required: "Message is required.",
              })}
            ></textarea>
            {errors?.message && <p className="text-danger">{errors.message.message}</p>}
          </div>

          <div className="col-12 mb-6">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA}
              onChange={onRecaptchaChange}
            />
          </div>

          <div className="col-12 text-center mb-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn btn-bottom"
              data-hover="Contact Us"
              style={{ background: "#0e6497" }}
            >
              {isSubmitting ? "Submitting..." : "Contact Us"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
