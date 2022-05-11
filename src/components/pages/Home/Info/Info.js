import React from "react";
import InfoCard from "./InfoCard";
import Clock from "../../../../assets/icons/clock.svg";
import Phone from "../../../../assets/icons/phone.svg";
import Marker from "../../../../assets/icons/marker.svg";

const Info = () => {
  const infoData = [
    {
      id: 1,
      title: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      bg: "bg-gradient-to-r from-secondary to-primary",
      img: Clock,
    },
    {
      id: 2,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      bg: "bg-accent",
      img: Marker,
    },
    {
      id: 3,
      title: "Contact us now",
      description: "+000 123 456789",
      bg: "bg-gradient-to-r from-secondary to-primary",
      img: Phone,
    },
  ];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {infoData.map((data) => (
        <InfoCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Info;
