import React from "react";
import { useQuery } from "react-query";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`).then((res) => res.json())
  );

  if (isLoading) {
    return <h2 className="text-2xl text-center  my-12 ">Loading...</h2>;
  }

  return (
    <div className="pt-[40px]">
      <h2 className="text-2xl font-bold ">Total Users: {users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full mt-[20px]">
          <thead>
            <tr>
              <th>No:</th>
              <th>Email</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow key={user._id} user={user} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
