"use client";
import React from "react";
import { Container } from "react-bootstrap";
import {
  FaUtensils,
  FaRegCloset,
  FaCouch,
  FaRegLightbulb,
  FaHome,
} from "react-icons/fa"; // Ensure the icons are imported correctly
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurServices = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // for tablets and small laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // for mobile devices (portrait)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const services = [
    {
      icon: <FaHome />, // Home icon for verified vendors
      title: "Trusted & Verified Vendors",
      subheading:
        "Collaborate only with reliable, quality-assured service providers.",
    },
    {
      icon: <FaUtensils />, // Pricing transparency linked to kitchen work
      title: "Transparent Pricing",
      subheading:
        "No hidden costs—get honest, upfront pricing for every service.",
    },
    {
      icon: <FaCouch />, // Couch for interior design/3D visuals
      title: "3D Visual Designs",
      subheading: "Visualize your dream home with our realistic 3D mockups.",
    },
    {
      icon: <FaRegLightbulb />, // Lightbulb for timely innovation/delivery
      title: "On-time Delivery",
      subheading: "Timely execution to ensure your project stays on track.",
    },
    {
      icon: <FaCouch />, // Closet for after-sales support
      title: "After-Sales Support",
      subheading: "We're here even after project completion for ongoing help.",
    },
  ];

  return (
    <div className="py-5">
      <Container>
        <h2 className="text-center theme_clr mb-0 fw-bold">Our Services</h2>
        <p className="text-center mb-0 mt-2">
          Everything you need to transform your space.
        </p>
        <div className="py-5">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div className="px-2 h-100" key={index}>
                <div className="service-card h-100  p-4 rounded-3 text-center">
                  <div className="service-icon mb-3">
                    <div
                      className="mb-3 d-flex red_box flex-column justify-content-center align-items-center mx-auto text-white"
                      style={{
                        fontSize: "3rem",
                        backgroundColor: "#E52648",
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                      }}
                    >
                      {service.icon}
                    </div>
                    {/* Render the icon inside JSX */}
                  </div>
                  <h5 className="fs_16 fw-semibold clr_darkBlack mb-2">
                    {service.title}
                  </h5>
                  <p className="fs_14 mb-0 text-muted">{service.subheading}</p>{" "}
                  {/* Subheading added here */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default OurServices;
