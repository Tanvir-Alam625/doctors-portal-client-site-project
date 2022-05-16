import { data } from "autoprefixer";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvailableAppointment from "./AvailableAppointment";
import BookingModal from "./BookingModal";
import Spinner from "../../../Spinner/Spinner";
import { useQuery } from "react-query";

const AvailableAppointments = ({ date }) => {
  // const [appointments, setAppointments] = useState([]);
  const [treatment, setTreatment] = useState(null);
  // const [spinner, setSpinner] = useState(false);
  const formatedDate = format(date, "PP");

  const {
    data: appointments,
    isLoading,
    error,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(`http://localhost:5000/available?date=${formatedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <h2 className="text-2xl text-center ">Loading...</h2>;
  }
  if (error) {
    console.log(error);
  }
  return (
    <section className="lg:px-12 px-2 max-w-7xl  mx-auto lg:mb-28 mb-12">
      <h5 className="text-xl lg:my-[100px] my-[50px] text-secondary font-semibold text-center">
        Available Appointments on {format(date, "PP")}
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {appointments?.map((appointment) => (
          <AvailableAppointment
            key={appointment._id}
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
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
