import React from "react";

export const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center
     my-16 md:my-16 px-4 md:px-8 gap-8">

      
      {/* Left Side (Text Content) */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight  ">
          Hello User, Welcome Here To Learn Something  
          <span className="text-pink-500"> New Everyday!</span>
        </h1>

        <p className=" text-md text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit 
          doloribus blanditiis ipsum aliquid corrupti non maiores magni fugiat 
          facere, minima quam ratione quia perferendis tempore sint laboriosam 
          reiciendis cum minus?
        </p>

        <button className="btn btn-secondary">Get Started</button>
      </div>

      {/* Right Side (Image) */}
      <div className="w-full md:w-1/2 flex  scale-90  justify-center">
        <img 
          src="/bannerpic.jpg" 
          alt="Books IMG" 
          className="w-full max-w-md md:max-w-lg rounded-2xl"
        />
      </div>

    </div>
  );
};
