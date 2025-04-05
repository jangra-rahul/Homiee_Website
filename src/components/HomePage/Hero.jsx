import CustomNavbar from "../../app/CustomNavbar";
import React from "react";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.26), rgba(0, 0, 0, 0.33)), url(/assets/image/png/HeroImage.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="d-flex flex-column min-vh-100 justify-content-center text-white text-center HeroBgImAGE"
    >
      <div className="bg-white">
        <CustomNavbar />
      </div>
      <Container className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
        <h1 className="fw-bold text-center heading display-4">
          Reviewed Best Profiles for <br className="d-none d-md-block"></br>{" "}
          Your <span className="theme_clr">Dream Home</span>
        </h1>

        <p className="mt-3 text-center fw-normal subHeading">
          Find the perfect home with top-rated listings, expert reviews,{" "}
          <br className="d-none d-md-block "></br>and seamless property search.
        </p>
      </Container>
    </div>
  );
};

export default Hero;
