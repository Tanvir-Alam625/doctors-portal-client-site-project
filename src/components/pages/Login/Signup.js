import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div class="shadow-lg rounded-lg w-full text-accent  mx-2 p-[30px] lg:w-96 ">
        <h2 class="text-center text-[20px] mt-[15px]  mb-[30px]">Login</h2>
        <form>
          <div className="input-box mb-[10px]">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              class="input input-bordered w-full"
            />
          </div>
          <div className="input-box mb-[10px]">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="input input-bordered w-full"
            />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              class="input input-bordered w-full mb-[30px]"
              name="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            className="uppercase text-base-100 mb-[15px] bg-accent w-full rounded-lg p-[15px]"
          >
            login
          </button>
        </form>
        <p className="text- text-center mb-[16px]">
          Already SignUp?
          <Link to="/login" className="text-secondary ml-2">
            Login
          </Link>
        </p>
        <div class="divider mb-[25px]">OR</div>
        <button className="uppercase border w-full border-accent text-xl p-[15px] rounded-lg">
          continue with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
