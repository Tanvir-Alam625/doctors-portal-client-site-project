import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ data, index, refetch }) => {
  const { name, img, specialty, _id } = data;
  const handleDelete = (id) => {
    const confirmation = window.confirm(`Are You Sure ${name} was delete `);
    if (confirmation) {
      const url = `https://shielded-sierra-98684.herokuapp.com/doctor/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            toast.success(`${name} doctor successfully deleted`);
            refetch();
          }
        });
    }
  };
  return (
    <tr className="font">
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="md:w-16 w-8  rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="text-base-100 btn btn-xs btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
