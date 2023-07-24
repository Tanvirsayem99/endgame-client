import React from 'react';
import img1 from "../../assets/Image/18434.jpg"
import img2 from "../../assets/Image/28466.jpg"
import img3 from "../../assets/Image/28470.jpg"
import img4 from "../../assets/Image/7012123.jpg"
import img5 from "../../assets/Image/7043192.jpg"
import img6 from "../../assets/Image/boys-girls-graduation.jpg"
import img7 from "../../assets/Image/celebration-education-graduation-student-success-learning-concept.jpg"
import img8 from "../../assets/Image/graduate-students-wearing-cap-gown.jpg"
import img9 from "../../assets/Image/medium-shot-colleagues-posing-together.jpg"

const ImageGallery = () => {
    return (
        <div className='p-10'>
            <h2
             className="text-2xl font-seif text-center mt-10 mb-10">
                Graduate Gallery
             </h2>

             <div className='grid grid-cols-3 gap-2'>
            
 
              <img src={img5} className='rounded w-full h-80 hover:scale-110 duration-700' alt="" />
                <img src={img6} className='rounded w-full h-80 hover:scale-110 duration-700' alt="" />
                <img src={img7} className='rounded w-full h-80 hover:scale-110 duration-700' alt="" />
                <img src={img8} className='rounded w-full h-80 hover:scale-110 duration-700' alt="" />
                <img src={img1} className='rounded w-full h-80 hover:scale-110 duration-700' alt="" />
                <img src={img2} className='rounded w-full h-80 hover:scale-110 duration-700' alt="" />
                <img src={img3} className='rounded w-full h-80 hover:scale-110 duration-700' alt="" />
                <img src={img4} className='rounded w-full h-80 hover:scale-110 duration-700' alt="" />
                <img src={img9} className='rounded w-full h-80 hover:scale-110 duration-700' alt="" />
                
             </div>
            
        </div>
    );
};

export default ImageGallery;