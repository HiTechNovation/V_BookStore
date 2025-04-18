import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const [, setAuthUser] = useAuth(); // get context updater

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://192.168.43.196:3000/user/login", userInfo);

      toast.success('Logged In Successfully !!');

      // ✅ Set user in context
      setAuthUser(res.data.user);

      // ✅ Persist in localStorage under correct key
      localStorage.setItem("auth", JSON.stringify(res.data.user));

      reset();
      document.getElementById("my_modal")?.close();

      // ✅ Optional: redirect to home or previous page
      // navigate(location.state?.from || "/");
      setTimeout(() => {
        navigate("/")
      }, 1000);     
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong. Try again later.");
      }
    }
  };

  return (
    <>
      <dialog id="my_modal" className="modal">
        <div className="modal-box max-w-2/3 md:max-w-1/3 dark:bg-slate-900 dark:text-white">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById('my_modal')?.close()}
          >
            ✕
          </button>

          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-pink-500 border-b-2 text-center p-2">
              Login :)
            </h3>

            {/* Email */}
            <div className="grid grid-cols-1 gap-1 pt-2.5">
              <label className="block font-bold">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter Your Email..."
                className="w-full text-sm p-2 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600"
              />
              {errors.email && (
                <span className="text-red-600 text-xs">This field is required*</span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4">
              <label className="block font-bold">Password</label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter Your Password..."
                className="w-full text-sm p-2 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600"
              />
              {errors.password && (
                <span className="text-red-600 text-xs">This field is required*</span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-secondary font-extralight p-3 mt-5 w-full"
            >
              Login
            </button>

            <div className="pt-5 text-sm text-center">
              <p>Press ESC key or click on ✕ to close</p>
              <p>
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-blue-600 cursor-pointer"
                  onClick={() => {
                    if (location.pathname === "/signup") {
                      document.getElementById("my_modal")?.close();
                    } else {
                      navigate("/signup");
                    }
                  }}
                >
                  Sign Up
                </button>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
