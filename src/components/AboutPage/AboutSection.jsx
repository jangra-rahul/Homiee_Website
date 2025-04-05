import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import soffaImage from "../../assets/image/png/soffImage.webp";

const AboutSection = () => {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col md={6} className="pe-md-5">
            <Image
              className="w-100 rounded-3 h-100"
              src={soffaImage}
              alt="About Us"
            />
          </Col>
          <Col
            md={6}
            className="d-flex mt-4 flex-column justify-content-center"
          >
            <h3 className="fw-bold text-center text-md-start fs-1 mb-0">
              Reviewed Best Profiles for Your{" "}
              <span className="theme_clr">Dream Home</span>
            </h3>
            <p className=" subHeading text-center text-md-start mb-0 mt-3">
              Find the perfect home with our expertly curated listings and
              trusted reviews. Whether you're looking for a modern apartment, a
              cozy villa, or a luxurious penthouse, we provide verified options
              tailored to your needs. Our seamless search process, detailed
              insights, and transparent information ensure a stress-free
              home-buying experience. With professional evaluations and
              high-quality images, you can explore properties confidently. Let
              us guide you in finding a home that suits your lifestyle. Start
              your journey today and discover the best properties available!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
