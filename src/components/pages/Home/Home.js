import React from "react";
import Footer from "../../shared/Footer";
import Contact from "../Contact/Contact";
import AppointmentHome from "./AppointmentHome";
import Banner from "./Banner";
import Info from "./Info/Info";
import Services from "./Services/Services";
import Testimonial from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <main>
      <section
        className="
        lg:px-12 px-2
        max-w-7xl
        mx-auto
      "
      >
        <Banner />
        <Info />
        <Services />
      </section>
      <AppointmentHome />
      <section
        className="lg:px-12 px-2
      max-w-7xl
        mx-auto
      "
      >
        <Testimonial />
      </section>
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
