import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-menu" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-[#F1F5F9] lg:px-[30px] px-2">
        {/* <!-- Page content here --> */}
        <h1 className="text-4xl text-center ">Dashboard</h1>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboard-menu" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
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
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
