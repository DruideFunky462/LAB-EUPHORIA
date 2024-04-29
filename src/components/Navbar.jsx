import React, {useState} from "react";
import "../styles/navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
return (
  <nav >
    <li className="title"><Link to="/home">Home</Link></li>
    <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen)
    }}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
    <ul className= {menuOpen ? "open" : ""}>
        
        <li><NavLink to="/frenchglory">frenchglory</NavLink></li>
        <li><NavLink to="/medailles">medailles</NavLink></li>
        <li><NavLink to="/legendes">legendes</NavLink></li>
        <li><NavLink to="/videos">videos</NavLink></li>
    </ul>
  </nav>
);

}

export default Navbar;
