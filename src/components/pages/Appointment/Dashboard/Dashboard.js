import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useLocation } from "react-router-dom";
import auth from "../../../../firebase.init";
import useAdmin from "../../../hooks/UseAdmin";

const Dashboard = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-[#F1F5F9] lg:px-[30px] px-2">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-menu" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link
              to="/dashboard"
              className={` text-accent font-semibold ${
                location.pathname === "/dashboard"
                  ? "bg-accent text-white"
                  : "bg-white text-accent"
              }`}
            >
              My Appointment
            </Link>
          </li>
          <li>
            <Link
              className={` text-accent font-semibold ${
                location.pathname === "/dashboard/myReviews"
                  ? "bg-accent text-white"
                  : "bg-white text-accent"
              }`}
              to="/dashboard/myReviews"
            >
              {" "}
              My Reviews
            </Link>
          </li>
          <li>
            <Link
              className={` text-accent font-semibold ${
                location.pathname === "/dashboard/history"
                  ? "bg-accent text-white"
                  : "bg-white text-accent"
              }`}
              to="/dashboard/history"
            >
              {" "}
              My History
            </Link>
          </li>
          {admin && (
            <>
              <li>
                <Link
                  className={` text-accent font-semibold ${
                    location.pathname === "/dashboard/users"
                      ? "bg-accent text-white"
                      : "bg-white text-accent"
                  }`}
                  to="/dashboard/users"
                >
                  {" "}
                  All Users
                </Link>
              </li>
              <li>
                <Link
                  className={` text-accent font-semibold ${
                    location.pathname === "/dashboard/addDoctor"
                      ? "bg-accent text-white"
                      : "bg-white text-accent"
                  }`}
                  to="/dashboard/addDoctor"
                >
                  {" "}
                  Add Doctors
                </Link>
              </li>
              <li>
                <Link
                  className={` text-accent font-semibold ${
                    location.pathname === "/dashboard/manageDoctors"
                      ? "bg-accent text-white"
                      : "bg-white text-accent"
                  }`}
                  to="/dashboard/manageDoctors"
                >
                  {" "}
                  Manage Doctors
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
