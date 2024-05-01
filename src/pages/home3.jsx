import React from 'react';
import '../styles/home.css'; // Fichier CSS pour les styles des hexagones
import NavbarHome from "../components/NavbarHome";

const Hexagon = ({ className, content }) => {
  return (
    <div className={`hexagon ${className}`}>
      <div className="hexagon-content">{content}</div> {/* Contenu de l'hexagone */}
    </div>
  );
};

const Home = () => {
  return (
    <div className='home'>
    <NavbarHome />

    <div className="hexagon-page"> {/* Conteneur parent pour le positionnement */}
      <Hexagon content="French Glory" className="frenchglory" /> {/* Haut gauche */}
      <Hexagon content="Médailles" className="medailles" /> {/* Milieu droite */}
      <Hexagon content="Légendes" className="legendes" /> {/* Bas gauche */}
    </div>
    
    </div>
  );
};

export default Home;
