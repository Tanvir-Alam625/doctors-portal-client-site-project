import { format } from "date-fns";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const email = user.email;
    const phone = event.target.phone.value;
    const date = event.target.date.value;
    const bookedData = { name, email, date, phone, slot };
    fetch("http://localhost:5000/booked", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedData),
    })
      .then((res) => res.json())
      .then(async (result) => {
        toast.success("Successfully Booked!");
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booked" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booked"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-semibold text-accent mb-[50px]">
            {name}
          </h3>

          <form className="w-full" onSubmit={handleSubmitForm}>
            <input
              type="text"
              value={format(date, "PP")}
              readOnly
              name="date"
              disabled
              className="input w-full  my-[12px] bg-[#E6E6E6]"
            />
            <select
              name="slot"
              className="select w-full my-[12px]  bg-[#E6E6E6]"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input w-full input-bordered  my-[12px]"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input w-full input-bordered  my-[12px]"
              required
            />
            <input
              type="email"
              disabled
              readOnly
              value={user.email}
              name="email"
              className="input w-full input-bordered my-[12px]"
              required
            />
            <button
              type="submit"
              className="btn uppercase w-full btn-accent my-[12px] text-base-100"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
