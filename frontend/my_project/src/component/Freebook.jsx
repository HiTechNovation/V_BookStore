import React from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards"; 
import { useState,useEffect } from "react";

export const Freebook = () => {
   const [book, setBook] = useState([]); 
  useEffect(() => {
    const getBook = async () => {
        try {
            const res = await axios.get("http://192.168.43.196:3000/books");  // ✅ Fixed: Added res
            console.log(res.data.filter((data) => data.category === "Free"));
            setBook(res.data.filter((data) => data.category === "Free"));
        } catch (error) {
            console.log(error);
        }
    };
    getBook();
}, []);
  

  const settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-6 md:px-9 max-w-screen-2xl justify-center text-center p-3">
        <div className="">
      <h1 className="text-2xl font-bold pb-3">Free Offered Courses</h1>
      <p className="max-w-full text-gray-600 mb-4">
        Explore our collection of free courses to enhance your knowledge.
        Designed to help you get started in various fields, these courses are 
        carefully curated for beginners and professionals alike.
      </p>
      </div>

      <div className="slider-container w-full overflow-hidden">
        <Slider {...settings}>
          {book.map((item) => (
            <div key={item.id}> 
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
