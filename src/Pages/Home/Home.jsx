import React from 'react';
import Search from './Search';
import Collage from './Collage';
import ImageGallery from './ImageGallery';
import Research from './Research';
import StudentRating from './StudentRating';

const Home = () => {
    return (
        <div>
            <Search/>
            <Collage/>
            <ImageGallery/>
            <Research/>
            <StudentRating/>
        </div>
    );
};

export default Home;