import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import HeroSection from "./Component/HeroSection/HeroSection";
import Card from "./Component/Card/Card";
import TopAlbum from "./Component/topAlbum/TopAlbum";
import "./Layout.css";


const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <HeroSection />
            <Card />
            <TopAlbum />
        </div>
    );
};

export default Layout;