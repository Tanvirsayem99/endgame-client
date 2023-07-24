import { list } from 'postcss';
import React from 'react';
import { Link } from 'react-router-dom';



const CollageSlider = ({collage}) => {


const

{
 _id,
 college_image,
 college_name,
 events,
 admission_dates,
 sports ,
 research_history
} = collage;

    return (
        <div className="card card-side bg-black text-white shadow-xl mt-20 font-serif ">
        <figure><img src={college_image} className='rounded-md h-full' alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{college_name}</h2>
          <div  className='mt-1' >
            Admission Date: 
          <span className='ms-2'>
          {admission_dates.fall}
          </span>
            </div>

           <div  className='mt-2' >Research History :
            <span className='ms-2'>{research_history}</span>
            </div> 

            <div>
                <p> UpComing Events</p>

                <ul  className='mt-2'>
                   {events.slice(0,2).map((event, index) => 
                   <li> {index +1} .{event}</li> 
                   )}

                </ul>
            </div>

            <div>
             <p>Sports</p>

             <ul className='mt-2'>
                {sports.slice(0,2).map(
                    (sport, index)=>
                    
                    <li>{index + 1}. {sport}</li>
                )}
             </ul>
            </div>


          
          <div className="card-actions justify-end">
           <Link to={`/singleCollage/${_id}`}> <button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default CollageSlider;