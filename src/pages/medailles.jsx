import React from 'react';
import '../styles/medailles.css';
import Navbarmedailles from "../components/Navbarmedailles";

// Assuming you have URLs for your medal images
const medalImages = {
  gold: 'gold.png',
  silver: 'silver.png',
  bronze: 'bronze.png',
};

const medalsData = {
  EquipeMasculine: [
    { year: 2008, type: 'gold' },
    { year: 2012, type: 'gold' },
    { year: 2020, type: 'gold' },
    { year: 1992, type: 'bronze' },
    { year: 2016, type: 'silver' },
  ],
  EquipeFeminine: [
    { year: 2016, type: 'silver' },
    { year: 2020, type: 'gold' },
  ],
};

const Medailles = () => {
  return (
    <div className='boss'>
      <Navbarmedailles />

    <div className="medailles-container">
      
      <div className="team-section">

        <h2>Equipe Masculine</h2>

        <div className="medals-list">

          {medalsData.EquipeMasculine.map((medal, index) => (
            <div key={index} className={`medal ${medal.type}`}>
              <img src={medalImages[medal.type]} alt={`${medal.type} medal`} className='medal-img'/>
              <span className='year'>{medal.year}</span>
            </div>
          ))}
        </div>

      </div>
    
      <hr className="horizontal-separator" /> {/* Barre de séparation */}

      <div className="team-section">
        <h2>Equipe Féminine</h2>
        <div className="medals-list">
          {medalsData.EquipeFeminine.map((medal, index) => (
            <div key={index} className={`medal ${medal.type}`}>
              <img src={medalImages[medal.type]} alt={`${medal.type} medal`} />
              <span>{medal.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Medailles;
