import React from "react";
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import Service from "./Service";
import treatment from "../../../../assets/images/treatment.png";
import PrimaryBtn from "../../../shared/PrimaryBtn";

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
      <div className="service-banner flex justify-center lg:px-20 px-0 my-12">
        <div className="hero  bg-base-100">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={treatment}
              alt="treatment"
              className="lg:max-w-sm w-full rounded-lg shadow-2xl lg:mr-12 mr-0"
            />
            <div>
              <h1 className="text-5xl font-bold lg:text-[45px] text-[25px] text-accent">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
