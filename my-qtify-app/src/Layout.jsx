import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import HeroSection from "./Component/HeroSection/HeroSection";
import "./Layout.css";


const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <HeroSection />
        </div>
    );
};

export default Layout;