import React from 'react';
import { Link } from 'react-router-dom'; // Importation du composant Link pour les liens internes
import '../styles/home.css';
import NavbarHome from "../components/NavbarHome";

const Home = () => {
  return (
    <div className='home'>
      <NavbarHome />

      <div className="hexagon-page">
       
        <Link to="/frenchglory">
          <img src='https://i.postimg.cc/769P2WZ6/frenchglory.png' className='hfrenchglory' alt="French Glory" />
        </Link>

        
        <Link to="/medailles">
          <img src='https://i.postimg.cc/wxsyP6Mc/medailles.png' className='hlegendes' alt="Medals" />
        </Link>

        
        <Link to="/legendes">
          <img src='https://i.postimg.cc/9QcDrZpJ/legendes.png' className='hmedailles' alt="Legends" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
