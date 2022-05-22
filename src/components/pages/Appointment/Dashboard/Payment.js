import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../../Spinner/Spinner";

const Payment = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({});
  const [spinner, setSpinner] = useState(true);
  const url = `http://localhost:5000/payment/${id}`;
  fetch(url, {
    headers: {
      authorization: `bearer ${localStorage.getItem("access-token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setAppointment(data);
      setSpinner(false);
    });
  if (spinner) {
    return <Spinner />;
  }
  const { treatment, patientEmail, patientName, date, slot, price } =
    appointment;
  return (
    <div className="flex flex-col justify-center lg:max-w-[1100px] px-2 w-full mx-auto ">
      <h2 className="text-2xl text-center my-6">Payment to Doctors Portal</h2>
      <div className="payment-container grid grid-cols-1 gap-4 lg:grid-cols-2 justify-items-center">
        {/* appointment info */}
        <div class="card card-compact w-full md:my-6 my-4 lg:w-50 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-primary font-bold">{treatment}</h2>
            <p className="text-xl">
              Hello,<span className="text-secondary">{patientName}</span>
            </p>
            <p>{patientEmail}</p>
            <p>
              <small>
                {date}, at {slot}
              </small>
            </p>
            <p className="text-xl">
              Price: <span className="text-primary">${price}</span>
            </p>
          </div>
        </div>
        {/* payment  */}
        <div class="card bg-base-100 md:my-6 my-4 w-full lg:w-50 shadow-xl">
          <div class="card-body items-center text-center">
            <h2 className="text-4lx">Payment</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
