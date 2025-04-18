import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
    const [book, setBook] = useState([]);  // ✅ Fixed: Use array instead of object

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://192.168.43.196:3000/books");  // ✅ Fixed: Added res
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []); // ✅ Fixed: Added dependency array

    return (
        <>
            <div className="max-w-screen container md:px-20 px-1">
                <div className="pt-46 items-center justify-center text-center">
                    <h1 className="text-2xl font-bold md:text-3xl">
                        We're delighted to have you{" "}
                        <span className="text-pink-500">Here! :)</span>
                    </h1>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ullam eius, autem excepturi vero totam neque! Illo ab, magnam nesciunt sapiente nostrum ipsam, beatae commodi rerum sequi sit modi voluptatibus.
                    </p>
                    <Link to="/">
                        <button className="btn btn-secondary mt-3">Back</button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
                    {book.map((item) => (
                        <Cards key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Course;
