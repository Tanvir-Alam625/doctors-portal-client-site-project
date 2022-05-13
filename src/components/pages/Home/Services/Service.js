import React from "react";

const Service = ({ data }) => {
  const { name, img, description } = data;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl font-sans">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-[115px] " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-accent text-[20px] ">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
