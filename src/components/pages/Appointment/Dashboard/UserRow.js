import React from "react";

const UserRow = ({ user, index }) => {
  const { email } = user;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>Button</td>
    </tr>
  );
};

export default UserRow;
