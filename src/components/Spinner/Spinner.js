import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="min-h-screen Spinner-loader fixed top-0 left-0 bottom-0 right-0 overflow-hidden flex justify-center items-center  ">
      <div className="loader-container  rounded-lg shadow-lg md:w-96 w-80   md:py-8 py-4  bg-accent">
        <div className="loader">Loading...</div>
      </div>
    </div>
  );
};

export default Spinner;
