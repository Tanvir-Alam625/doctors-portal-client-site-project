import React from "react";
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
            <a
              href="#"
              class="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Emergency Checkup
            </a>{" "}
            <br />
            <a
              href="#"
              class="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Monthly Checkup
            </a>{" "}
            <br />
            <a
              href="#"
              class="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Weekly Checkup
            </a>{" "}
            <br />
            <a
              href="#"
              class="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Deep Checkup
            </a>{" "}
            <br />
          </div>
          <div className="oral-health">
            <h2 className="uppercase font-bold mb-[20px]  text-accent text-2xl ">
              oral health
            </h2>
            <a
              href="#"
              class="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Fluoride Treatment
            </a>{" "}
            <br />
            <a
              href="#"
              class="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Cavity Filling
            </a>{" "}
            <br />
            <a
              href="#"
              class="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              Teath Whitening
            </a>{" "}
          </div>
          <div className="our-address">
            <h2 className="uppercase font-bold mb-[20px]  text-accent text-2xl ">
              our address
            </h2>
            <a
              href="#"
              class="link link-hover text-accent hover:link-primary mb-[14px]"
            >
              New York - 101010 Hudson
            </a>{" "}
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
