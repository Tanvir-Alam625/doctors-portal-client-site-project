import React from "react";
import Banner from "./Banner";
import Info from "./Info/Info";
import Services from "./Services/Services";

const Home = () => {
  return (
    <main>
      <section className="lg:px-12 px-2">
        <Banner />
        <Info />
        <Services />
      </section>
    </main>
  );
};

export default Home;
