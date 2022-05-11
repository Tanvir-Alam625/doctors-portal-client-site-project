import React from "react";
import chair from "../../../assets/images/chair.png";
import background from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      className=" mx-[0px]  lg:mx-[100px] lg:py-[100px] py-4 my-4"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={chair}
          className=" lg:w-[50%] w-full rounded-lg shadow-2xl  "
          alt="banner-img"
        />
        <div className="banner-info lg:mr-12 mr-0 ">
          {/* this is date picker  calender */}
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            className="border-2 shadow-xl rounded-xl my-4 p-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
