import React from "react";
import CustomNavbar from "../CustomNavbar";
import Footer from "../Footer";
import AboutHero from "../../components/AboutPage/AboutHero";
import AboutSection from "../..//components/AboutPage/AboutSection";

const page = () => {
  return (
    <div>
      <CustomNavbar />
      {/* <AboutHero /> */}
      <AboutHero title="About Us" breadcrumb="About" />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default page;
