import React from 'react';
import '../styles/medailles.css';

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
    <div className="medailles-container">
      <h1>MÉDAILLES</h1>
      <div className="team-section">
        <h2>Equipe Masculine</h2>
        <div className="medals-list">
          {medalsData.EquipeMasculine.map((medal, index) => (
            <div key={index} className={`medal ${medal.type}`}>
              <img src={medalImages[medal.type]} alt={`${medal.type} medal`} />
              <span>{medal.year}</span>
            </div>
          ))}
        </div>
      </div>
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
  );
};

export default Medailles;
