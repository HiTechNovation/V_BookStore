import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    axios.post("http://192.168.43.196:3000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        toast.success("Signup successful!");
        reset(); // Clear the form after success
        localStorage.setItem("Users", JSON.stringify(res.data.user))
      })
      .catch((err) => {
        if (err.response) {
          console.error("❌ Error:", err.response.data);
          toast.error( err.response.data.message);
        } else {
          console.error("❌ Unexpected error:", err);
          alert("Something went wrong. Try again later.");
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-slate-900 dark:text-white">
        <h2 className="text-2xl font-bold text-center text-pink-500">Sign Up</h2>
        <p className="text-sm text-gray-600 text-center dark:text-gray-400 border-b-2 p-2">
          Create an account to get started
        </p>

        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block font-bold">Username</label>
            <input
              {...register("fullname", { required: true })}
              type="text"
              placeholder="Enter Your Username..."
              className="w-full text-sm p-2 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.fullname && <span className="text-red-600 text-xs">This field is required*</span>}
          </div>

          <div className="mb-4">
            <label className="block font-bold">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter Your Email..."
              className="w-full text-sm p-2 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.email && <span className="text-red-600 text-xs">This field is required*</span>}
          </div>

          <div className="mb-4">
            <label className="block font-bold">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Create a Password..."
              className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600"
            />
            {errors.password && <span className="text-red-600 text-xs">This field is required*</span>}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => {
                document.getElementById("my_modal")?.showModal(); // 
            }}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};
