import React from "react";
import { useQuery } from "react-query";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery("users", () =>
    fetch(`https://doctors-portal-server-project-tanvir.onrender.com/users`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <h2 className="text-2xl text-center  my-12 ">Loading...</h2>;
  }

  return (
    <div className="pt-[40px]">
      <h2 className="text-2xl font-bold ">Total Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full mt-[20px]">
          <thead>
            <tr>
              <th>No:</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove Users</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
