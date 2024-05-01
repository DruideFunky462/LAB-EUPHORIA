import React, { useState } from "react";
import "../styles/navbarlegendes.css";
import { Link, NavLink } from "react-router-dom";

const Navbarlegendes = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="legendes">
            <h1 className="title">EUPHORIA</h1>
            <div
                className={`menu ${menuOpen ? "active" : ""}`}
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className= {menuOpen ? "open" : ""}>
        
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/frenchglory">French Glory</NavLink></li>
        <li><NavLink to="/medailles">Médailles</NavLink></li>
        <li><NavLink to="/legendes">Légendes</NavLink></li>
        <li><NavLink to="/videos">Videos</NavLink></li>
    </ul>
        </nav>
    );
};

export default Navbarlegendes;
