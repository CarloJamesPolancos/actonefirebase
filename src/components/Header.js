import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/"){
            setActiveTab("Home"); }
        else if (location.pathname === "/add"){
            setActiveTab("AddSupporter"); }
        else if (location.pathname === "/Services"){
            setActiveTab("Services"); }
        else if (location.pathname === "/about"){
            setActiveTab("About"); }}, [location]);

    return(
        <div className="header">
            <p className="bago">Supporters of Champion.GG</p>
            <div className="header-right align-items-center">
                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active" : ""}`}
                        onClick={() => setActiveTab("Home")}>
                            Home
                    </p>
                    <p></p>
                </Link>
                <Link to="/add">
                    <p className={`${activeTab === "AddSupporter" ? "active" : ""}`}
                        onClick={() => setActiveTab("AddSupporter")}>
                            Add Supporter
                    </p><p></p>
                </Link>
                <Link to="/services">
                    <p className={`${activeTab === "Services" ? "active" : ""}`}
                        onClick={() => setActiveTab("Services")}>
                            Services
                    </p><p></p>
                </Link>
                <Link to="/about">
                    <p className={`${activeTab === "About" ? "active" : ""}`}
                        onClick={() => setActiveTab("About")}>
                            About
                    </p><p></p>
                </Link>
                
            </div>
        </div>
    )
}

export default Header;