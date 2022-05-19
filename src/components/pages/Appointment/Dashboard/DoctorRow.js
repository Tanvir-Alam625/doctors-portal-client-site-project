import React from "react";

const DoctorRow = ({ data, index }) => {
  const { name, img, specialty } = data;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>Delete</td>
    </tr>
  );
};

export default DoctorRow;
