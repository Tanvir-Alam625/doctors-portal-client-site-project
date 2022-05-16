import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const handleMakeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully made an admin");
        refetch();
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        <button
          disabled={role && true}
          onClick={handleMakeAdmin}
          className="btn btn-xs"
        >
          {role ? "Already Admin" : "Make Admin"}
        </button>
      </td>
      <td>
        <button className="btn btn-xs">Remove</button>
      </td>
    </tr>
  );
};

export default UserRow;
