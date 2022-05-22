import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import { signOut } from "firebase/auth";

const MyAppointment = () => {
  const [booked, setBooked] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user?.email;
    fetch(
      `https://shielded-sierra-98684.herokuapp.com/booking?email=${email}`,
      {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error("Oops! Forbidden Access 403, Please Login");
          navigate("/login");
          signOut(auth);
          localStorage.removeItem("access-token");
        } else if (res.status === 401) {
          toast.error("Oops! UnAuthorization Access 403, Please Login");
          navigate("/login");
          signOut(auth);
          localStorage.removeItem("access-token");
        }
        return res.json();
      })
      .then((data) => {
        setBooked(data);
      });
  }, [user, navigate]);
  console.log(booked);
  return (
    <div className="pt-[40px]">
      <h2 className="text-2xl font-bold ">My Appointment</h2>
      <div className="overflow-x-auto">
        <table className="table w-full mt-[20px]">
          {/* <!-- head --> */}
          <thead>
            <tr className="uppercase font-bold text-accent">
              <th>No:</th>
              <th>Name</th>
              <th>Date</th>
              <th>Service</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {booked.map((book, index) => (
              <tr className="text-xs md:text-sm " key={index}>
                <th>{index + 1}</th>
                <td className="capitalize">{book.patientName}</td>
                <td>{book.date}</td>
                <td className="capitalize">{book.treatment}</td>
                <td className="uppercase">{book.slot}</td>
                <td className="uppercase">
                  {book.price && !book.paid ? (
                    <button
                      className="btn btn-xs "
                      onClick={() => navigate(`/payment/${book._id}`)}
                    >
                      Pay
                    </button>
                  ) : (
                    <p>Paid</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
