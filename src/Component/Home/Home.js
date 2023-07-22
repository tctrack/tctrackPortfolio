import React from 'react';
import Banner from './Banner';
import About from './About';
import Service from './Service/Service';
import Counter from './Counter/Counter';
import Project from './Projects/Project';
import Resume from './Resume/Resume';
import Team from './Team/Team';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <>
            <Banner/>
            <About/>
            <Service/>
            <Counter/>
            <Project/>
            <Resume/>
            <Team/>
            <Blogs/>
            <Contact/>
        </>
    )
}

export default Home;
