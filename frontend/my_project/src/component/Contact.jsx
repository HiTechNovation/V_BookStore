import React from 'react';
import { useForm } from 'react-hook-form';
import { Navbar } from './Navbar';
import { Footer } from './footer';

export const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log("Form Data:", data);
    };

    return (
        <>
        <Navbar/>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-slate-900 dark:text-white">
                    <h2 className="text-2xl font-bold text-center text-pink-500">Contact Us</h2>
                    <p className="text-sm text-gray-600 text-center dark:text-gray-400 border-b-2 p-2">
                        Fill out the form below to get in touch
                    </p>

                    {/* Form */}
                    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Field */}
                        <div className="mb-4">
                            <label className="block font-bold">Name</label>
                            <input
                                {...register("Name", { required: true })}
                                type="text"
                                placeholder="Enter Your Name..."
                                className="w-full text-sm p-1 mt-1 border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                            />
                            {errors.Name && <span className="text-red-600 text-xs">This field is required*</span>}
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label className="block font-bold">Email</label>
                            <input
                                {...register("Email", { required: true })}
                                type="email"
                                placeholder="Enter Your Email..."
                                className="w-full text-sm p-1 mt-1 border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                            />
                            {errors.Email && <span className="text-red-600 text-xs">This field is required*</span>}
                        </div>

                        {/* Message Field */}
                        <div className="mb-4">
                            <label className="block font-bold">Message</label>
                            <textarea
                                {...register("Message", { required: true })}
                                placeholder="Type your message here..."
                                className="w-full p-1 mt-1 text-sm border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:border-gray-600"
                            />
                            {errors.Message && <span className="text-red-600 text-xs">This field is required*</span>}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full px-4 py-2 btn btn-secondary font-extralight">
                            Contact Us
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
};
