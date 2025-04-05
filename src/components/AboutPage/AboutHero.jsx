import React from "react";
import Link from "next/link";

const AboutHero = ({ title, breadcrumb }) => {
  return (
    <div
      className="py-5"
      style={{
        backgroundColor: "#12a89d",
      }}
    >
      <div className="py-5">
        <h1 className="text-center fw-bold text-white mb-0">{title}</h1>
        <div className="d-flex justify-content-center gap-3 mt-2">
          <Link className=" text-decoration-none " href="/">
            <span className="text-white subHeading">Home </span>
          </Link>
          <span className="text-white subHeading">/</span>
          <span className=" theme_clr subHeading fw-bold">{breadcrumb}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
