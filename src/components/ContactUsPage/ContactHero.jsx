"use client";
import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactHero = () => {
  return (
    <div className="py-5">
      <Container>
        <Row className="justify-content-between align-items-center">
          {/* Contact Information Section */}
          <Col md={6}>
            <h2 className="fw-bold text-start theme_clr">Contact Us</h2>
            <p className="subHeading text-start text-secondary mt-3">
              We are here to assist you with any inquiries or concerns you may
              have. Please feel free to reach out to us using the contact
              information provided below. We look forward to hearing from you!
            </p>

            {/* Contact Details */}
            <div className="mt-4">
              <div className="d-flex align-items-center mb-4">
                <span className="icon_bg d-flex justify-content-center align-items-center rounded-circle me-3">
                  <FaMapMarkerAlt className="theme_clr " size={24} />
                </span>
                <p className="mb-0 text-secondary">
                  1234 Business Street, City, Country
                </p>
              </div>
              <div className="d-flex align-items-center mb-4">
                <span className="icon_bg d-flex justify-content-center align-items-center rounded-circle me-3">
                  <FaPhoneAlt className="theme_clr " size={20} />
                </span>
                <p className="mb-0 text-secondary">+1 234 567 8900</p>
              </div>
              <div className="d-flex align-items-center">
                <span className="icon_bg d-flex justify-content-center align-items-center rounded-circle me-3">
                  <FaEnvelope className="theme_clr " size={20} />
                </span>
                <p className="mb-0 text-secondary">info@yourbusiness.com</p>
              </div>
            </div>
          </Col>

          {/* Contact Form Section */}
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="w-100 card p-4 shadow-lg rounded-3">
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label className="fw-semibold">Full Name</Form.Label>
                  <Form.Control className="p-3 py-2" type="text" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="fw-semibold">Email Address</Form.Label>
                  <Form.Control className="p-3 py-2" type="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label className="fw-semibold">Phone</Form.Label>
                  <Form.Control className="p-3 py-2" type="number" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label className="fw-semibold">Message</Form.Label>
                  <Form.Control
                    className="p-3 py-2"
                    as="textarea"
                    rows={4}
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 bg-theme_clr border-0 py-2 mt-4 fw-bold"
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactHero;
