import React from "react";

const Testimonial = ({ data }) => {
  const { name, img, description, location } = data;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{description}</p>
        <div class="card-actions flex justify-start my-[36px] items-center">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="people" className="h-[64px]" />
            </div>
          </div>
          <div className="ml-[14px] people-info">
            <h2 className="text-xl font-semibold text-accent my-2">{name}</h2>
            <h4 className="text-xl">{location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
