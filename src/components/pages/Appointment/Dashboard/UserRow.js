import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const handleMakeAdmin = () => {
    const confirm = window.confirm("Are You Sure?");
    if (confirm) {
      fetch(`https://shielded-sierra-98684.herokuapp.com/user/admin/${email}`, {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      })
        .then((res) => {
          if (res.status === 403) {
            toast.error("Failed Make Admin ");
          }
          return res.json();
        })
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Successfully made an admin");
            refetch();
          }
        });
    }
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
