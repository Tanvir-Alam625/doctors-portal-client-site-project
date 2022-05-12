import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booked" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="booked"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-semibold text-secondary mb-[50px]">{name}</h3>

          <form className="w-full">
            <input
              type="text"
              value={format(date, "PP")}
              readOnly
              disabled
              class="input w-full  my-[12px]"
            />
            <input
              type="text"
              value={slots[0]}
              readOnly
              disabled
              class="input w-full   my-[12px]"
            />
            <input
              type="text"
              placeholder="Full Name"
              class="input w-full input-bordered  my-[12px]"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              class="input w-full input-bordered  my-[12px]"
              required
            />
            <input
              type="text"
              placeholder="Email"
              class="input w-full input-bordered my-[12px]"
              required
            />
            <label
              for="booked"
              type="submit"
              class="btn uppercase w-full btn-accent my-[12px] text-base-100"
            >
              submit
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
