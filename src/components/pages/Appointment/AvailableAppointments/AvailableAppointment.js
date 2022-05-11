import React from "react";

const AvailableAppointment = ({ data }) => {
  const { name, _id, slots } = data;
  return (
    <div class="card lg:max-w-lg hover:border  shadow-lg text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary font-semibold my-6">{name}</h2>
        <p className="text-sm my-6 text-neutral">10 SPACES AVAILABLE</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary uppercase text-base-100 bg-gradient-to-r from-secondary to-primary">
            book appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
