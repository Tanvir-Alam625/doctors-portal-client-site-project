import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png";
const Footer = () => {
  return (
    <footer
      className="pt-[70px] font-sans "
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "100% 100% ",
      }}
    >
      <div
        className="lg:px-12 px-2 max-w-7xl 
      mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-8 lg:ml-0 ">
          <div className="service">
            <h2 className="uppercase font-bold mb-[20px]  text-accent text-2xl ">
              services
            </h2>
            <Link
              to="/"
              className="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Emergency Checkup
            </Link>{" "}
            <br />
            <Link
              to="/"
              className="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Monthly Checkup
            </Link>{" "}
            <br />
            <Link
              to="/"
              className="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Weekly Checkup
            </Link>{" "}
            <br />
            <Link
              to="/"
              className="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Deep Checkup
            </Link>{" "}
            <br />
          </div>
          <div className="oral-health">
            <h2 className="uppercase font-bold mb-[20px]  text-accent text-2xl ">
              oral health
            </h2>
            <Link
              to="/"
              className="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Fluoride Treatment
            </Link>{" "}
            <br />
            <Link
              to="/"
              className="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Cavity Filling
            </Link>{" "}
            <br />
            <Link
              to="/"
              className="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Teath Whitening
            </Link>{" "}
          </div>
          <div className="our-address">
            <h2 className="uppercase font-bold mb-[20px]  text-accent text-2xl ">
              our address
            </h2>
            <Link
              to="/"
              className="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              New York - 101010 Hudson
            </Link>{" "}
          </div>
        </div>
        <div className="flex justify-center">
          <small className="text-accent text-sm  font-semibold my-[50px]">
            Copyright 2022 All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
