import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Admission = () => {
    const collages = useLoaderData()
    console.log(collages);
    return (
        <div className='font-serif'>
            <h2 className="text-2xl text-center">Available Admission</h2>
            <div>

            <div className="overflow-x-auto p-20">
  <table className="table">
    {/* head */}
    <thead>
    {
            collages.map((collage, index) => <tr>
                <th>{index + 1}</th>
                <td><Link to={`/takeAdmission/${collage._id}`}>
                {collage.college_name}
                </Link></td>
                <td><Link>
               <button 
               className='btn'
               >
               Admission
               </button>
                </Link></td>
              </tr> )
         }
    </thead>
    <tbody>
      {/* row 1 */}
      
    </tbody>
  </table>
</div>
        
       

            </div>
        </div>
    );
};

export default Admission;