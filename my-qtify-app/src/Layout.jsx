import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import HeroSection from "./Component/HeroSection/HeroSection";
import Card from "./Component/Card/Card";
import "./Layout.css";


const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <HeroSection />
            <Card />
        </div>
    );
};

export default Layout;