import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctorSmall from "../../../assets/images/doctor-small.png";
import PrimaryBtn from "../../shared/PrimaryBtn";
const AppointmentHome = () => {
  return (
    <section
      className="border-2 flex flex-col lg:flex-row  font-sans lg:px-32 px-2 lg:my-28 my-12"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div
        className="lg:w-[50%] w-full hidden lg:flex justify-center max-w-7xl
        mx-auto"
      >
        <img
          src={doctorSmall}
          alt="doctorSmall"
          className="h-[636px] mt-[-100px]"
        />
      </div>
      <div className="lg:ml-12 ml-0 my-[100px] lg:w-[50%] w-full p-4 lg:p-0">
        <h2 className="text-primary font-bold  mb-6">Appointment</h2>
        <h1 className="text-[36px] text-base-100 mb-6">
          Make an appointment Today
        </h1>
        <p className="mb-6 text-base-100">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryBtn>Get Started</PrimaryBtn>
      </div>
      <div></div>
    </section>
  );
};

export default AppointmentHome;
