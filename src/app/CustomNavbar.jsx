"use client";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../public/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CustomNavbar = () => {
  const pathname = usePathname();

  return (
    <Navbar
      expand="lg"
      className="custom-navbar py-2 border-bottom"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/" className="fw-bold ">
          <Image height={60} width={153} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-lg-5 gap-3 text-center ">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "theme_clr fw-semibold text-decoration-none"
                  : "text-decoration-none text-black"
              }
            >
              Home
            </Link>
            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? "theme_clr fw-semibold text-decoration-none"
                  : "text-decoration-none text-black"
              }
            >
              About Us
            </Link>
            {/* <Link
              href="/faqs"
              className={
                pathname === "/faqs"
                  ? "theme_clr fw-semibold text-decoration-none"
                  : "text-decoration-none text-black"
              }
            >
              FAQs
            </Link> */}
            <Link
              href="/contact"
              className={
                pathname === "/contact"
                  ? "theme_clr fw-semibold text-decoration-none"
                  : "text-decoration-none text-black"
              }
            >
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
