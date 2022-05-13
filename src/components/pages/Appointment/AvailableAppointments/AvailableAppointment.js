import React from "react";

const AvailableAppointment = ({ data, setTreatment }) => {
  const { name, _id, slots } = data;
  return (
    <div className="card lg:max-w-lg hover:border  shadow-lg text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary font-semibold mb-[10px] p-0">
          {name}
        </h2>

        <p className="text-center text-sm text-accent mb-[10px] p-0">
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Day!</span>
          )}
        </p>
        <p className="text-sm mb-[15px] p-0 text-neutral">
          {slots.length} {slots.length < 1 ? "SPACE" : "SPACES"} AVAILABLE
        </p>
        <div className="card-actions justify-end">
          <label
            disabled={slots.length === 0}
            for="booked"
            onClick={() => setTreatment(data)}
            className="btn btn-primary  modal-button uppercase text-base-100 bg-gradient-to-r from-secondary to-primary"
          >
            book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
