import React from "react";
import quote from "../../../../assets/icons/quote.svg";
import people1 from "../../../../assets/images/people1.png";
import people2 from "../../../../assets/images/people2.png";
import people3 from "../../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      id: 2,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      id: 3,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];
  return (
    <section className="lg:my-28 my-12">
      <div className="flex justify-between my-6">
        <div className="title">
          <h2 className="text-primary font-bold capitalize">Testimonials</h2>
          <h1 className="text-[36px] font-semibold text-accent">
            What Our Patients Says
          </h1>
        </div>
        <img src={quote} className="lg:h-[192px] h-[80px]" alt="" />
      </div>
      <div className="testimonialItems grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} data={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
