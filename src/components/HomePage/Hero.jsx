import CustomNavbar from "../../app/CustomNavbar";
import React from "react";
import { Container } from "react-bootstrap";
const Hero = () => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center text-white text-center HeroBgImAGE">
      <div className="bg-white">
        <CustomNavbar />
      </div>
      <Container className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
        <h1 className="fw-bold text-center heading display-4">
          Design Your <span className="theme_clr">Dream Home </span>
          with Trusted <br className="d-none d-md-block"></br>Interior Experts
        </h1>

        <p className=" mt-3 text-center fw-normal subHeading">
          We connect homeowners with verified vendors to bring{" "}
          <br className="d-none d-md-block "></br> your home interiors to life.
        </p>
      </Container>
    </div>
  );
};

export default Hero;
