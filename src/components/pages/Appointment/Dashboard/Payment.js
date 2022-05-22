import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  return (
    <div>
      <h2 className="text-2xl text-center my-6">
        Payment to Doctors Portal{id}
      </h2>
    </div>
  );
};

export default Payment;
