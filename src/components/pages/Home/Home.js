import React from "react";
import AppointmentHome from "./AppointmentHome";
import Banner from "./Banner";
import Info from "./Info/Info";
import Services from "./Services/Services";
import Testimonial from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <main>
      <section className="lg:px-12 px-2">
        <Banner />
        <Info />
        <Services />
      </section>
      <AppointmentHome />
      <section className="lg:px-12 px-2">
        <Testimonial />
      </section>
    </main>
  );
};

export default Home;
