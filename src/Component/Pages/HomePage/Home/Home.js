import React from 'react';
import Projects from '../../Projects/Projects';
import Service from '../../Service/Service';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../HomeBanner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Projects></Projects>
            <Service></Service>
            <Testimonial></Testimonial>
           
         
        </div>
    );
};

export default Home;