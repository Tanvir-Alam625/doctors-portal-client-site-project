import React, { useEffect, useState } from "react";

const MyAppointment = () => {
  const [booked, setBooked] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold ">My Appointment</h2>
      <div class="overflow-x-auto">
        <table class="table w-full mt-[20px]">
          {/* <!-- head --> */}
          <thead>
            <tr className="uppercase font-bold text-accent">
              <th>No:</th>
              <th>Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {booked.map((book, index) => (
              <tr className="text-xs md:text-sm ">
                <th>{index + 1}</th>
                <td className="capitalize">{book.patientName}</td>
                <td>{book.patientEmail}</td>
                <td className="capitalize">{book.treatment}</td>
                <td className="uppercase">{book.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
