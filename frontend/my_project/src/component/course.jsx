import React from 'react'
import Cards from './Cards'
import list from '../list.json'
import { Link } from 'react-router-dom'
function Course() {
    return (
        <>
            <div className='max-w-screen  container  md:px-20 px-1 '>
                <div className='pt-46 items-center justify-center text-center'>
                    <h1 className='text-2xl font-bold md:text-3xl'>
                        We're delighted to have you <span className='text-pink-500'>Here!:) </span>
                    </h1>
                    <p className='mt-4  '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ullam eius, autem excepturi vero totam neque! Illo ab, magnam nesciunt sapiente nostrum ipsam, beatae commodi rerum sequi sit modi voluptatibus.
                    </p>
                    <Link to='/'>
                        <button className="btn btn-secondary mt-3">Back</button> </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3 '>
                    {
                        list.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course