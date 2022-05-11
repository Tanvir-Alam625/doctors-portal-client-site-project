import React from "react";
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicesItems = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening ",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <section className="my-12 lg:my-28">
      <div className="text-center">
        <h2 className="text-xl  text-primary uppercase font-semibold">
          Our Services
        </h2>
        <h3 className="lg:text-[36px]  text-1xl font-semibold capitalize text-accent">
          Services we provide
        </h3>
      </div>
      <div className="lg:my-12 my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
        {servicesItems.map((serviceItem) => (
          <Service key={serviceItem.id} data={serviceItem} />
        ))}
      </div>
    </section>
  );
};

export default Services;
