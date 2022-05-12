import { data } from "autoprefixer";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvailableAppointment from "./AvailableAppointment";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date }) => {
  const [appointments, setAppointments] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <section className="lg:px-12 px-2 max-w-7xl  mx-auto lg:mb-28 mb-12">
      <h5 className="text-xl lg:my-[100px] my-[50px] text-secondary font-semibold text-center">
        Available Appointments on {format(date, "PP")}
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {appointments.map((appointment) => (
          <AvailableAppointment
            key={data._id}
            data={appointment}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
