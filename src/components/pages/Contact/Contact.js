import React from "react";
import background from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      className="lg:my-28 my-12 py-[65px]  "
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="text-primary text-center font-bold capitalize">
        Contact Us
      </h2>
      <h1 className="text-4xl text-base-100 my-[10px] text-center">
        Stay Connected with us
      </h1>
      <form className="lg:w-2/5 md:w-2/3 w-full px-2  mt-[20px] mx-auto flex flex-col items-center">
        <input
          type="text"
          placeholder="Email Address"
          class=" rounded-lg outline-none  text-xl my-[20px] p-[14px] w-full"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Subject"
          class="rounded-lg outline-none text-xl my-[20px] p-[14px]  w-full"
        />{" "}
        <br />
        <textarea
          class="textarea text-xl my-[20px] p-[14px]  w-full h-[136px]"
          placeholder="Message"
        ></textarea>
        <br />
        <button class=" my-[15px] rounded-lg py-[15px] px-[35px] bg-primary text-base-100 text-center  text-xl">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
