import React from "react";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import "./Navbar.css";
import Button from "./Button/Button";

const Navbar = () => {
    return (
        <nav className="navBar">
            <Logo />
            <SearchBar />
            <Button text="Give Feedback" />
        </nav>
    );
};

export default Navbar;