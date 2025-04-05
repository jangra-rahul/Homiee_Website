"use client";
import React from "react";
import { Accordion, Row } from "react-bootstrap";

const FAQs = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center theme_clr">FAQs</h2>
      <Row className="justify-content-center">
        {" "}
        <div className="col-md-9">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item className="shadow-lg mt-4" eventKey="0">
              <Accordion.Header>
                <h6 className="mb-0"> How do I find the best home profiles?</h6>
              </Accordion.Header>
              <Accordion.Body>
                Our platform provides top-rated listings reviewed by experts and
                real users. You can use filters such as budget, location, and
                amenities to find your dream home quickly and easily.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="shadow-lg mt-4" eventKey="1">
              <Accordion.Header>
                <h6 className="mb-0"> Are the property reviews genuine?</h6>
              </Accordion.Header>
              <Accordion.Body>
                Yes, all reviews are verified and collected from real buyers,
                tenants, and real estate professionals to ensure transparency
                and reliability in your home search.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="shadow-lg mt-4" eventKey="2">
              <Accordion.Header>
                <h6 className="mb-0"> Can I schedule a property visit?</h6>
              </Accordion.Header>
              <Accordion.Body>
                Absolutely! Once you've shortlisted a property, you can request
                a visit directly through our platform. Our agents will assist
                you in scheduling the visit at your convenience.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="shadow-lg mt-4" eventKey="3">
              <Accordion.Header>
                <h6 className="mb-0">
                  {" "}
                  Is there any cost to search for properties?
                </h6>
              </Accordion.Header>
              <Accordion.Body>
                No, searching for properties and accessing reviews on our
                platform is completely free. We aim to simplify the process and
                help you make informed decisions without any hidden charges.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="shadow-lg mt-4" eventKey="4">
              <Accordion.Header>
                <h6 className="mb-0"> How often are listings updated?</h6>
              </Accordion.Header>
              <Accordion.Body>
                We update our listings daily to ensure you get access to the
                most recent and accurate information about available properties.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="shadow-lg mt-4" eventKey="5">
              <Accordion.Header>
                <h6 className="mb-0"> What if I need help with home loans?</h6>
              </Accordion.Header>
              <Accordion.Body>
                We have partnered with top banks and financial institutions. Our
                expert advisors can guide you through the home loan process and
                help you get the best rates.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="shadow-lg mt-4" eventKey="6">
              <Accordion.Header>
                <h6 className="mb-0"> Can I compare different properties?</h6>
              </Accordion.Header>
              <Accordion.Body>
                Yes! You can compare properties based on price, location,
                builder reputation, amenities, and user ratings to find the best
                match for your needs.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Row>
    </div>
  );
};

export default FAQs;
