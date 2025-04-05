import React from "react";
import Footer from "../Footer";
import AboutHero from "../../components/AboutPage/AboutHero";
import CustomNavbar from "../CustomNavbar";
import ContactHero from "../../components/ContactUsPage/ContactHero";

const page = () => {
  return (
    <div>
      <CustomNavbar />
      <AboutHero title="Contact Us" breadcrumb="Contact Us" />
      <ContactHero />
      <Footer />
    </div>
  );
};

export default page;
