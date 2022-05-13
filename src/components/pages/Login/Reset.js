import React from "react";

const Reset = () => {
  return (
    <div className="form-control ">
      <div className=" min-h-screen reset w-full  mx-2  flex justify-center items-center">
        <div className=" lg:w-96 w-full  md:w-4/5 lg:px-4 px-2 py-6  shadow-md rounded-md">
          <form>
            <input
              type="Email"
              placeholder="Your Email"
              required
              className="input shadow-md input-bordered w-full mb-[25px]"
            />{" "}
            <br />
            <button className="btn shadow-md text-base-100 bg-accent px-2 w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
