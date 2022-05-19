import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../../Spinner/Spinner";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctors", {
      authorization: `bearer ${localStorage.getItem("access-token")}`,
    })
      .then((res) => res.json())
      .catch()
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h2 className="text-2xl  my-4 font-semibold">
        Mange Doctors{doctors?.length}
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>NO:</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                data={doctor}
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

export default ManageDoctors;
