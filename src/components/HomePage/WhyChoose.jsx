"use client";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaCheckCircle,
  FaHandHoldingUsd,
  FaUserTie,
  FaEye,
  FaSearch,
  FaHeadset,
} from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      title: "Verified Properties",
      desc: "100% legally checked and secure homes.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Easy Financing",
      desc: "Get hassle-free loan assistance.",
      icon: <FaHandHoldingUsd />,
    },
    {
      title: "Expert Agents",
      desc: "Trusted professionals to guide you.",
      icon: <FaUserTie />,
    },
    {
      title: "No Hidden Charges",
      desc: "Transparent pricing, no surprises.",
      icon: <FaEye />,
    },
    {
      title: "Personalized Search",
      desc: "Find homes tailored to your needs.",
      icon: <FaSearch />,
    },
    {
      title: "24/7 Support",
      desc: "Always here to help you with queries.",
      icon: <FaHeadset />,
    },
  ];

  return (
    <div className="bg_light">
      <Container className="py-5 text-center ">
        <h2 className="mb-2 fw-bold text-white ">Why Choose Us?</h2>
        <p className="mb-4 fw-normal text-white">
          Your dream home journey starts here – with trust, transparency, and
          <br className="d-none d-md-block"></br>
          expert guidance!
        </p>
        <Row className="mt-5">
          {features.map((feature, index) => (
            <Col md={4} sm={6} className="mb-4" key={index}>
              <Card className="h-100  shadow-sm border-0 p-4">
                <Card.Body>
                  <div
                    className="mb-3 d-flex flex-column justify-content-center align-items-center mx-auto text-white"
                    style={{
                      fontSize: "3rem",
                      backgroundColor: "#E52648",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <Card.Title className="fw-bold">{feature.title}</Card.Title>
                  <Card.Text>{feature.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyChoose;
