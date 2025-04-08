import Image from "next/image";
import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import homeImage from "../../app/homeimage.webp";

const OurVision = () => {
  return (
    <div className="py-5 text-center bg_light ">
      <Container className="py-4">
        <Row className=" align-items-center justify-content-between">
          <Col md={5}>
            <Image className="w-100 h-100 rounded-3" src={homeImage} alt="" />
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <h2 className="fw-bold text-start theme_clr">Our Vision</h2>
            <p className=" subHeading text-start text-white mt-3">
              We aim to revolutionize the way people find their dream homes.
              With trusted listings, expert guidance, and transparency, we
              empower buyers and sellers to make informed decisions for a
              brighter future.
            </p>
            <div className="d-flex justify-content-start">
              <Button variant="danger" className="mt-4 px-4 py-2 fs-6">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurVision;
