import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import CollageSlider from './CollageSlider';

const Collage = () => {

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
        <div>
            <h2 className="text-2xl text-center">
                Best Collages
                </h2>

                <Swiper
         cssMode={true}
         navigation={true}
         pagination={true}
         mousewheel={true}
         keyboard={true}
         modules={[Navigation, Pagination, Mousewheel, Keyboard]}
         className="mySwiper">
        
         {
                collages.slice(0, 3).map((collage, index) =>  
                 
                <SwiperSlide key={collage.id}>

                   <CollageSlider collage={collage}/>
                
                   </SwiperSlide>
                )
              }
      
         
            
        </Swiper>
              
             
        </div>
    );
};

export default Collage;