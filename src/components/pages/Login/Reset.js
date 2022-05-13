import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Reset = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const [sendEmail, setSendEmail] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    await sendPasswordResetEmail(data.email);
    toast.success("Email Verification send!");
    await setSendEmail(true);
  };
  return (
    <div className="form-control ">
      <div className=" min-h-screen reset w-full  mx-2  flex justify-center items-center">
        {sendEmail ? (
          <>
            <div className="send-message bg-accent rounded-md shadow-lg  lg:px-20 md:px-12 px-4 lg:py-16 md:py-12 py-4   ">
              <h1 className="text-base-100 text-xl text-center font-bold">
                Email Verification send
              </h1>
              <h2 className="text-base-100 text-xl text-center font-bold">
                Check Your Email
              </h2>
            </div>
          </>
        ) : (
          <div className=" lg:w-96 w-full  md:w-4/5 lg:px-4 px-2 py-6  shadow-md rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="Email"
                placeholder="Your Email"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please Enter the valid Email",
                  },
                })}
                className="input shadow-md input-bordered w-full mb-[25px]"
              />{" "}
              <label htmlFor="email" className="text-red-400 text-xs">
                {(errors.email?.type === "required" && errors.email?.message) ||
                  (errors.email?.type === "pattern" && errors.email?.message)}
              </label>
              <br />
              <button className="btn shadow-md text-base-100 bg-accent px-2 w-full">
                {sending ? <>Sending..</> : <>Submit</>}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reset;
