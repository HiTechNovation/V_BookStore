import React from "react";

function Cards({ item }) {
  return (
    <div className="card bg-base-100 w-full md:w-80 shadow-md mt-4 p-3 dark:bg-slate-950 
     dark:text-white md:mx-5 rounded-lg">
      <figure className="overflow-hidden">
        <img 
          className="hover:scale-105 duration-200"
          src={item.image} 
          alt={item.name} 
        />
      </figure>
      <div className="card-body p-3"> {/* Reduced padding */}
        <h2 className="card-title text-lg font-semibold text-left">
          {item.name}
          <div className="badge badge-secondary text-xs">{item.category}</div>
        </h2>
        <p className="text-gray-600 text-sm text-left">{item.title}</p>

        <div className="card-actions flex justify-between items-center mt-2">
          <span className="bg-black text-white text-sm rounded-md p-1">
            {item.price}
          </span>
          <button className="bg-black text-white text-sm rounded-md p-1
           hover:bg-gray-800 transition active:translate-y-1 active:scale-95">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
