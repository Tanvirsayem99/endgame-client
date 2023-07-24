import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Rating from 'react-rating';


const StudentRating = () => {

   const[feedback, setFeedback]=useState([])
   console.log(feedback);
    

    useEffect(()=>{
        fetch("feedback.json")
        .then(res => res.json())
        .then(data => {
            
            console.log(data);
            setFeedback(data)
        })
       
    },[])
    return (
        <div>
            <h2
            className='text-center text-2xl mt-10 mb-10'
            >Student Rating</h2>

            <div>
            <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
      {
        feedback.map(feed => <SwiperSlide>
            <div>
           <div className='text-center'>
           <Rating
  placeholderRating={feed.rating}
  emptySymbol={<FaStarHalfAlt className='text-4xl text-yellow-400'/>}
  placeholderSymbol={<FaStar className='text-4xl text-yellow-400'/>}
  fullSymbol={<FaStar className='text-4xl text-yellow-400'/>}
  readonly
/>
           </div>
           <p className='text-2xl text-center text-[#CD9003]' >{feed.collegeName}</p>
           <p className='text-center '>{feed.feedback}</p>
           <p className='text-2xl text-center text-[#CD9003]'>{feed.studentName}</p>
            </div>
        </SwiperSlide>)
      }
       
      </Swiper>
            </div>
        </div>
    );
};

export default StudentRating;