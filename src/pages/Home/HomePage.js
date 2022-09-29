import React, { Component, useEffect } from "react";
import BannerSlideSingle from "../../components/BannerSlideSingle";
import MostPopuler from "../../components/MostPopuler";
import TopRate from "../../components/TopRate";
import './Home.css';

const HomePage = () => {
    useEffect(()=>{
        document.title = 'Home - nontonKuy';
    });
    return(
        <div className="home">
            <BannerSlideSingle />
            <MostPopuler />
            <TopRate />
        </div>
    );
}
 
export default HomePage;