import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import HeroSection from "./Component/HeroSection/HeroSection";
import Card from "./Component/Card/Card";
import TopAlbum from "./Component/topAlbum/TopAlbum";
import NewAlbum from "./Component/newAlbum/NewAlbum";
import Songs from "./Component/SongNFilter/Songs"
import "./Layout.css";


const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <HeroSection />
            <Card />
            <TopAlbum />
            <NewAlbum />
            <Songs />
        </div>
    );
};

export default Layout;