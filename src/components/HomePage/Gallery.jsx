import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../../../public/assets/image/png/KitchenImage.avif";
import image2 from "../../../public/assets/image/png/bedroomImage.avif";
import image3 from "../../../public/assets/image/png/levelingImage.avif";
import image4 from "../../../public/assets/image/png/image.webp";
import groupImage from "../../../public/assets/image/png/group.png";

const Gallery = () => {
  return (
    <div className="pb-5">
      <Container className="pb-md-5">
        <h2 className=" text-center fw-bold theme_clr">Our Design Gallery</h2>
        <Row className=" h-100 align-items-center">
          <Col md={3} sm={6} className="mt-4 h-100">
            <Image className="w-100 h-100 rounded-3" src={image1} alt="" />
          </Col>
          <Col md={3} sm={6} className="mt-4 h-100">
            <Image className="w-100 h-100 rounded-3" src={image2} alt="" />
          </Col>
          <Col md={3} sm={6} className="mt-4 h-100">
            <Image className="w-100 h-100 rounded-3" src={image3} alt="" />
          </Col>
          <Col md={3} sm={6} className="mt-4 h-100">
            <Image className="w-100 h-100 rounded-3" src={image4} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
