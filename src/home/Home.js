import React from 'react';
import "./Home.css";
import Banner from "../banner/Banner.js";
import About from "../about/About.js";

function Home () {
    return  (
        <div className="home">
        <Banner />
        <About />
        </div>
    )
} 

export default Home;
