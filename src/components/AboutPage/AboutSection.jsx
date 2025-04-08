import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import soffaImage from "../../app/soffImage.webp";

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
              Connecting You with Trusted
              <span className="theme_clr"> Interior Experts</span>
            </h3>
            <p className=" subHeading text-center text-md-start mb-0 mt-3">
              Transform your house into a dream home with the help of skilled
              interior professionals. We bridge the gap between homeowners and
              verified vendors to ensure a smooth and satisfying interior design
              experience. From initial consultation to final execution, we offer
              complete transparency, expert guidance, and customized solutions
              to match your style and budget. Whether it’s a modular kitchen,
              elegant wardrobe, or a complete home makeover – we make it simple,
              reliable, and stress-free.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
