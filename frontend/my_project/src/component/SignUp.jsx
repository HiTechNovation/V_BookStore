import React from 'react';
import { useForm } from 'react-hook-form'


export const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-slate-900 dark:text-white">
                <h2 className="text-2xl font-bold text-center text-pink-500">Sign Up</h2>
                <p className="text-sm text-gray-600 text-center dark:text-gray-400 border-b-2 p-2">
                    Create an account to get started
                </p>

                <form className="mt-4"  onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block font-bold">Username</label>
                        <input  {...register("Username", { required: true })}
                            type="text"
                            placeholder="Enter Your Username..."
                            className="w-full  text-sm p-1  border-gray-300 rounded-md  focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                        />
                        {errors.Username && <span className='text-red-600 text-xs '>This field is required*</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-bold">Email</label>
                        <input  {...register("Email", { required: true })}
                            type="email"
                            placeholder="Enter Your Email..."
                            className="w-full  text-sm  p-1  border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                        />
                        {errors.Username && <span className='text-red-600 text-xs '>This field is required*</span>}
                    </div>

                    <div className="mb-4">
                        <label className="block font-bold">Password</label>
                        <input  {...register("Password", { required: true })}
          
                            type="password"
                            placeholder="Create a Password..."
                            className="w-full p-1 text-sm  border-gray-300 rounded-md  focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                        />
                        {errors.Username && <span className='text-red-600 text-xs '>This field is required*</span>}
                    </div>

                    <button
                     
                        className="w-full px-4 py-2 btn btn-secondary font-extralight "
                    >
                        Sign Up
                    </button>
                </form>

                <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
                    Already have an account? <span className="text-blue-500 hover:underline cursor-pointer" onClick={() => { document.getElementById('my_modal').showModal()?.Close() }}>Log in</span>
                </p>

            </div>
        </div>
    );
};
