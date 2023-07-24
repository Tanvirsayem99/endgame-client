import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Collages = () => {

    const collages = useLoaderData()
    console.log(collages);

   


    return (
        <div className='px-20 font-serif'>
            <h2 className="text-2xl">All Collages</h2>

            <div className='grid grid-cols-1 gap-5'>
              {collages.map(collage => 
                <div className="card  lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-96' src={collage.college_image} alt="Album"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{collage.college_name}</h2>
                  <div>Admission : {collage.admission_dates.fall}</div>
                  <div>Rating: {collage.rating}</div>
                  <p>Number of Research: {collage.number_of_research}</p>
                  <div className="card-actions justify-end">
                   <Link to={`/singleCollage/${collage._id}`}>
                   <button className="btn btn-primary">Detiels</button>
                   </Link>
                  </div>
                </div>
              </div>
                
                )}
            </div>
            
        </div>
    );
};

export default Collages;