import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <button class="btn btn-primary text-base-100 uppercase font-sans font-bold bg-gradient-to-r from-secondary to-primary">
      {children}
    </button>
  );
};

export default PrimaryBtn;
