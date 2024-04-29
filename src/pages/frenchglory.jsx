import React from 'react';
import '../styles/frenchglory.css'; 

const FrenchGlory = () => {
  // You can replace these with your actual data and image URLs
  const date = 'Some Date';
  const information = 'Some Information';
  const imageUrl = 'https://picsum.photos/400/500';

  return (
    <div className="page-container">
      <div className="illustrations-section">
        <h2>Date</h2>
        <p>{date}</p>
        <h2>Informations</h2>
        <p>{information}</p>
      </div>
      <div className="image-section">
        <img src={imageUrl} alt="Descriptive Alt Text" />
      </div>
      <div className="interactivity-section">
        {/* Add your interactive elements here */}
      </div>
    </div>
  );
};

export default FrenchGlory;
