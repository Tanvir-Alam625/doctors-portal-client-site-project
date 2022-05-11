import React from "react";

const Service = ({ data }) => {
  const { name, img, description } = data;
  return (
    <div class="card w-96 bg-base-100 shadow-xl font-sans">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl h-[115px] " />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title text-accent text-[20px] ">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
