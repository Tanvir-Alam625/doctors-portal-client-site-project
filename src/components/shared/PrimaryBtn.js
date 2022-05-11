import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <button class="btn btn-primary text-base-100 uppercase font-sans font-bold">
      {children}
    </button>
  );
};

export default PrimaryBtn;
