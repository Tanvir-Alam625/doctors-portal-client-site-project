import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Spinner from "../../Spinner/Spinner";

const Signup = () => {
  const [displayName, setDisplayName] = useState("");
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let handleErrorMessage;

  if (error || googleError) {
    handleErrorMessage = error?.message;
  }

  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user || googleUser) {
      navigate(from, { replace: true });
    }
  }, [from, user, googleUser, navigate]);

  if (googleLoading) {
    return <Spinner />;
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: displayName });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="shadow-lg rounded-lg w-full text-accent  mx-2 p-[30px] lg:w-96 ">
        <h2 className="text-center text-[20px] mt-[15px]  mb-[30px]">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box mb-[10px]">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              onChange={(e) => setDisplayName(e.target.value)}
              {...register("name", {
                required: { value: true, message: "Name is required" },
                minLength: {
                  value: 3,
                  message: "Name length must be 3 character ",
                },
              })}
              id="name"
              className="input input-bordered w-full"
            />
            <label htmlFor="password" className="text-red-400 text-xs">
              {(errors.name?.type === "required" && errors.name?.message) ||
                (errors.name?.type === "minLength" && errors.name?.message)}
            </label>
          </div>
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
            <label htmlFor="email" className="text-red-400">
              {(errors.email?.type === "required" && errors.email?.message) ||
                (errors.email?.type === "pattern" && errors.email?.message)}
            </label>
          </div>
          <div className="input-box mb-[30px]">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", {
                required: { value: true, message: "Password is required" },
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message:
                    " Password should be  contain  6-16 character  and at least one lower case, upper case, number and special character ",
                },
              })}
              id="password"
            />
            <label htmlFor="password" className="text-red-400 text-xs">
              {(errors.password?.type === "required" &&
                errors.password?.message) ||
                (errors.password?.type === "pattern" &&
                  errors.password?.message)}
            </label>
          </div>
          <p className="text-red-400">{handleErrorMessage}</p>
          <button
            type="submit"
            disabled={loading || googleLoading ? true : false}
            className="uppercase text-base-100 mb-[15px] bg-accent w-full rounded-lg p-[15px]"
          >
            {loading ? <>Loading...</> : <>Sign Up</>}
          </button>
        </form>
        <p className="text- text-center mb-[16px]">
          Already SignUp?
          <Link to="/login" className="text-secondary ml-2">
            Login
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

export default Signup;
