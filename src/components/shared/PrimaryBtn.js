import React from "react";
import { useNavigate } from "react-router-dom";
const PrimaryBtn = ({ children }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/appointment")}
      class="btn btn-primary text-base-100 uppercase font-sans font-bold bg-gradient-to-r from-secondary to-primary"
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
