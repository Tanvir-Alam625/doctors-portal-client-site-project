import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Spinner from "../../../Spinner/Spinner";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageApiKey = "be60a862641e549cc4f82067a1232062";
  const {
    data: services,
    isLoading,
    error,
    refetch,
  } = useQuery("service", () =>
    fetch(`http://localhost:5000/service`).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner />;
  }
  const onSubmit = async (data) => {
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success("successfully doctor added!");
        } else {
          toast.error("Failed to add doctor");
        }
        console.log(result);
      });
    // const
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="shadow-lg rounded-lg w-full text-accent  mx-2 p-[30px] lg:w-96 ">
        <h2 className="text-center text-[20px] mt-[15px]  mb-[30px]">
          Add New Doctor
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box mb-[10px]">
            <label htmlFor="name">Name</label>
            <input
              type="text"
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
          <div className="input-box mb-[10px]">
            <label htmlFor="specialty" className="mb-2">
              Specialty
            </label>
            <select
              {...register("specialty", {
                required: { value: true, message: "specialty is required" },
              })}
              id="specialty"
              className="select select-bordered w-full max-w-xs"
            >
              {services.map((service) => (
                <option key={service._id} value={service.name} defaultValue>
                  {service.name}
                </option>
              ))}
            </select>
            <label htmlFor="specialty" className="text-red-400 text-xs">
              {errors.specialty?.type === "required" &&
                errors.specialty?.message}
            </label>
          </div>
          <div className="input-box mb-[20px]">
            <label htmlFor="name">Name</label>
            <input
              type="file"
              {...register("photo", {
                required: { value: true, message: "photo is required" },
              })}
              id="file"
              className="input input-bordered w-full flex items-center justify-center py-2"
            />
            <label htmlFor="photo" className="text-red-400 text-xs">
              {errors.photo?.type === "required" && errors.photo?.message}
            </label>
          </div>
          <button
            type="submit"
            className="uppercase text-base-100 mb-[15px] bg-accent w-full rounded-lg p-[15px]"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
