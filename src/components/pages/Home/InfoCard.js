import React from "react";

const InfoCard = ({ data }) => {
  const { img, bg, title, description } = data;
  return (
    <div class={`card lg:p-4 p-2 lg:card-side  shadow-xl ${bg} text-base-100`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body py-8   ">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
