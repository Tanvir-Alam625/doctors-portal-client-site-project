import React, { useState } from "react";
import Footer from "../../shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <section>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointments date={date} />
      <Footer />
    </section>
  );
};

export default Appointment;
