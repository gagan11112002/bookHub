import React from 'react';
import list from "../../public/list.json";
import Cards from "./Cards"
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className='mt-28 items-center justify-center text-center '>
            <h1 className='text-2xl md:text-4xl'>
            We're thrilled to welcome you into our{" "} <span className='text-green-500'>community!</span>
            </h1>
        
       <p className='mt-12 justify-center text-center '>
       Welcome to bookHub, your one-stop destination for an enriching literary journey! Explore our vast collection of book courses, each designed to ignite your imagination and expand your horizons. Immerse yourself in a world of knowledge, adventure, and inspiration as you discover the wonders of literature.
       </p>
        <Link to="/">
        <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-300 mt-6'>
            Back
        </button>
        </Link>

        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
           {list.map((item) => (
            <Cards key={item.id} item={item} />
           ))}
        </div>
    </div>
    </>
  );
}

export default Course;