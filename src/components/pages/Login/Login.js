import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../hooks/useToken";
import Spinner from "../../Spinner/Spinner";
// import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [token] = useToken(user || googleUser);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, token, navigate]);

  if (googleLoading) {
    return <Spinner />;
  }

  let handleErrorMessage;
  if (error || googleError) {
    handleErrorMessage = error?.message;
    console.log(error);
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="shadow-lg rounded-lg w-full text-accent  mx-2 p-[30px] lg:w-96 ">
        <h2 className="text-center text-[20px] mt-[15px]  mb-[30px]">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box mb-[10px]">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Please Enter the valid Email",
                },
              })}
              id="email"
              className="input input-bordered w-full"
            />
            <label htmlFor="email" className="text-red-400 text-xs">
              {(errors.email?.type === "required" && errors.email?.message) ||
                (errors.email?.type === "pattern" && errors.email?.message)}
            </label>
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 6,
                  message: "Password length must be 6 character ",
                },
              })}
              id="password"
            />
            <label htmlFor="password" className="text-red-400 text-xs">
              {(errors.password?.type === "required" &&
                errors.password?.message) ||
                (errors.password?.type === "minLength" &&
                  errors.password?.message)}
            </label>
          </div>
          <div className="reset mb-[20px]">
            <Link
              to="/reset"
              className="text-sm hover:text-secondary duration-200 ease-in-out "
            >
              Forget Password?
            </Link>
          </div>
          <p className="text-red-500">{handleErrorMessage}</p>
          <button
            type="submit"
            disabled={loading || googleLoading ? true : false}
            className="uppercase text-base-100 mb-[15px] bg-accent w-full rounded-lg p-[15px]"
          >
            {loading ? <>Loading...</> : <>login</>}
          </button>
        </form>
        <p className="text- text-center mb-[16px]">
          New to Doctors Portal?
          <Link to="/signup" className="text-secondary ml-2">
            Create New Account
          </Link>
        </p>
        <div className="divider mb-[25px]">OR</div>
        <button
          className="uppercase border w-full border-accent text-xl p-[15px] rounded-lg"
          onClick={() => signInWithGoogle()}
        >
          continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
