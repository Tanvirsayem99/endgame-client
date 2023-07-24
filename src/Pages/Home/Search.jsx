import React from 'react';
import { BsSearch } from "react-icons/bs";

const Search = () => {
    return (
        <div className='w-full flex justify-end px-10 py-10'>
            <input type="text" className='bg-red-200 w-64 h-10 border-0 outline-none rounded-md relative'  placeholder='  Search Your Dream Collage' /> 
            <p className="absolute bg-red-400 h-10 w-10 rounded-md flex justify-center items-center"> <BsSearch/> </p>
        </div>
    );
};

export default Search;