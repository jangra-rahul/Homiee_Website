"use client";
import Link from "next/link";
import React from "react";
import msg_icon from "../../public/assets/image/svg/msgIcon.svg";
import logo from "../../public/assets/image/svg/msgIcon.svg";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black pt-md-5 pt-4">
      <div className="container">
        <Image height={70} width={180} src={logo} alt="logo" />

        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-0">
            {/* <h4 className=" fs_18 ff_s fw-bold text-white mb-0">Contact Us</h4> */}
            <p className=" fs_n ff_n fs_14 text_gray mt-3 mb-3">
              Building no. 464, Kadipur Enclave, Sector 10,
              <br className="d-lg-block d-none"></br> Opp. City Bus Depot,
              Gurugram, 122001
            </p>
            {/* <h5 className="fs_16 mb-0 mt-3 fw-bold ff_n text-white">
              <span className=" clr_theme">Call : </span> +1 587 785 4578
            </h5> */}
            <a
              href="mailTo:support@hkimedia.com"
              className="fs_16 mb-0  fw-bold mt-3 text-decoration-none ff_n text_gray"
            >
              <span className=" clr_theme">Mail :</span> support@hkimedia.com
            </a>
          </div>
          <div className="col-lg-4 col-md-6  col-sm-6 mt-lg-0 mt-4">
            <h4 className=" fs_18 ff_s fw-bold text-white mb-0">
              Important Links
            </h4>
            <ul className="ps-0 mt-2">
              <Link href="/about" className="text-decoration-none">
                <li className="fs_14 mt-3 fw-normal text-decoration-none list-unstyled ff_n text_gray">
                  About
                </li>
              </Link>
              <Link href={"/"} className="text-decoration-none">
                <li className="fs_14 mt-3 fw-normal text-decoration-none list-unstyled ff_n text_gray">
                  Home
                </li>
              </Link>

              <Link href={"/contact"} className="text-decoration-none">
                <li className="fs_14 mt-3 fw-normal text-decoration-none list-unstyled ff_n text_gray">
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <h4 className=" fs_18 ff_s fw-bold text-white mb-0">Newsletter</h4>
            <p className=" fs_n ff_n fs_14 text_gray mt-3 mb-0">
              Subscribe to HKI Magazine to stay on top of Media Scenes
            </p>
            <div className="d-flex mt-3 align-items-center">
              <input
                className="w-100 text-white border-0"
                style={{ padding: "12px 20px" }}
                type="text"
                placeholder="Enter Your Email"
              />
              <button
                style={{ padding: "10px 20px 14px 20px" }}
                className="bg-theme_clr border-0"
              >
                <Image width={20} height={20} src={msg_icon} alt="msg_icon" />
              </button>
            </div>
            <p
              style={{ cursor: "pointer" }}
              className=" fs_14 ff_s fw-bold mt-3 mb-0 theme_clr"
            >
              Subscribe Now &nbsp; &rarr;
            </p>
          </div>
        </div>
        <div
          className=" mt-5 mb-3"
          style={{ border: "0.83px solid #292929" }}
        ></div>
        <div className="d-md-flex text-center text-md-start pb-3 justify-content-between align-items-center">
          <p className="fs_14 mb-0  fw-bolder text_gray ff_n">
            © Copyright 2025 <span className="theme_clr">HOMIEE </span>- All
            Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
