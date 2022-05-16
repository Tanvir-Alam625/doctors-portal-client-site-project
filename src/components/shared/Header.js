import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { MenuAlt1Icon, MenuIcon } from "@heroicons/react/solid";
const Header = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);

  const link = (
    <>
      <li>
        <Link
          className={`${
            location.pathname === "/"
              ? "bg-accent text-base-100 hover:bg-accent"
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
              ? "bg-accent text-base-100 hover:bg-accent"
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
              ? "bg-accent text-base-100 hover:bg-accent"
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
              ? "bg-accent text-base-100 hover:bg-accent"
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
              ? "bg-accent text-base-100 hover:bg-accent"
              : " text-accent"
          }`}
          to="/contact"
        >
          Contact Us
        </Link>
      </li>
      {user && (
        <li>
          <Link
            className={`${
              location.pathname === "/dashboard" ||
              location.pathname === "/dashboard/myReviews"
                ? "bg-accent text-base-100 hover:bg-accent"
                : " text-accent"
            }`}
            to="/dashboard"
          >
            Dashboard
          </Link>
        </li>
      )}
      {user ? (
        <button
          onClick={() => signOut(auth)}
          className="btn  uppercase bg-base-100 hover:text-base-100 lg:ml-4  ml-0 text-accent"
        >
          Sign Out
        </button>
      ) : (
        <li>
          <Link
            className={`${
              location.pathname === "/login"
                ? "bg-accent text-base-100 hover:bg-accent"
                : " text-accent"
            }`}
            to="/login"
          >
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="mx-[0px] lg:mx-[100px] text-accent">
      <div className="navbar bg-base-100 ">
        <div className="navbar">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <MenuAlt1Icon className="h-5 w-5 text-accent" />
            </label>
            <ul
              tabIndex="0"
              className="menu font-semibold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <Link to="/">
            <h2 className="font-semibold text-accent text-xl">
              Doctors Portal
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex justify-end">
          <ul className="menu menu-horizontal p-0 font-semibold">{link}</ul>
        </div>
        <div className="absolute right-[20px] top-[20px]">
          <label for="dashboard-menu" class=" bg-white   lg:hidden">
            <MenuIcon className="h-6 w-6 text-accent" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
