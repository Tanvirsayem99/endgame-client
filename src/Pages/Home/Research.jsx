import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Research = () => {

    const[collages, setCollages]=useState([])

     useEffect(()=>{
        fetch("http://localhost:5000/collage")
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setCollages(data)
        })
     },[])

    return (
        <div className='font-serif'>
            <h2 
            className='text-2xl text-center mt-10 mb-10'
            >Research</h2>
            
            <div>
            <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

            {
                collages.map((collage, index) =>  
                 
                <SwiperSlide key={collage.id}>
                
                <div className="card w-96 h-72 bg-base-100 shadow-xl image-full">
          <figure><img src={collage.college_image}
         
          alt="Shoes" /></figure>
        <div className="card-body">
        <h2 className="card-title">{collage.college_name}</h2>
       <p>{collage.research_history}...</p>
       <div className="card-actions justify-start">
      <button className="btn btn-link">Research Link</button>
      </div>
     </div>
     </div>
                
                   </SwiperSlide>
                )
              }

      </Swiper>
            </div>
        </div>
    );
};

export default Research;