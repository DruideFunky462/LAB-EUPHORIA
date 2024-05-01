import React, { useState } from "react";
import "../styles/navbarhome.css";
import { Link, NavLink } from "react-router-dom";

const NavbarHome = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navhome">
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
            <p className="texto">Le Handball est un sport olympique introduit une première fois à l'occasion des Jeux
Olympiques de Berlin chez les hommes uniquement. Au fil des années, ce sport subit des
changements avec l'intégration des équipes féminines et la suppression du jeu sur gazon
pour la salle.

La France entre dans l'histoire également avec ce sport et multiplie les ascensions comme
les descentes, devenant l'un des pays ayant le plus grand palmarès de victoires dans 
l'histoire du Handball aux Jeux Olympiques.</p>
        </nav>
    );
};

export default NavbarHome;
