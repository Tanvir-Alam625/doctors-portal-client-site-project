import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const link = (
    <>
      <li>
        <Link
          className={`${
            location.pathname === "/"
              ? "bg-accent text-base-100"
              : " text-accent"
          }`}
          to="/"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          className={`${
            location.pathname === "/about"
              ? "bg-accent text-base-100"
              : " text-accent"
          }`}
          to="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={`${
            location.pathname === "/appointment"
              ? "bg-accent text-base-100"
              : " text-accent"
          }`}
          to="/appointment"
        >
          Appointment
        </Link>
      </li>
      <li>
        <Link
          className={`${
            location.pathname === "/reviews"
              ? "bg-accent text-base-100"
              : " text-accent"
          }`}
          to="/reviews"
        >
          Reviews
        </Link>
      </li>
      <li>
        <Link
          className={`${
            location.pathname === "/contact"
              ? "bg-accent text-base-100"
              : " text-accent"
          }`}
          to="/contact"
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          className={`${
            location.pathname === "/login"
              ? "bg-accent text-base-100"
              : " text-accent"
          }`}
          to="/login"
        >
          Login
        </Link>
      </li>
    </>
  );
  return (
    <div className="mx-[0px] lg:mx-[100px] text-accent">
      <div className="navbar bg-base-100 ">
        <div className="navbar">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu font-semibold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <h2 className="btn btn-ghost normal-case text-xl">Doctors Portal</h2>
        </div>
        <div className="navbar-center hidden lg:flex justify-end">
          <ul className="menu menu-horizontal p-0 font-semibold">{link}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
