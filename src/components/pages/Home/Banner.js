import React from "react";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className=" mx-[0px]  lg:mx-[100px] lg:my-[100px] my-4">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={chair}
          className=" lg:w-[50%] w-full rounded-lg shadow-2xl  "
          alt="banner-img"
        />
        <div className="banner-info lg:mr-12 mr-0 ">
          <h1 className="text-5xl font-bold text-accent ">
            Your New Smile Starts Here
          </h1>
          <p className="py-6 text-accent">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary font-bold  bg-gradient-to-r from-secondary to-primary text-base-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
