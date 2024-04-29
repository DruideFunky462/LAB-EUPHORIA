import React from "react";
import "../styles/legendes.css";


const imageList = [
  "https://picsum.photos/400/500?image=1",
  "https://picsum.photos/400/500?image=2",
  "https://picsum.photos/400/500?image=3",
  "https://picsum.photos/400/500?image=4",
  "https://picsum.photos/400/500?image=5",
  "https://picsum.photos/400/500?image=6",
  "https://picsum.photos/400/500?image=7",
  "https://picsum.photos/400/500?image=8",
  "https://picsum.photos/400/500?image=9",
  "https://picsum.photos/400/500?image=10",
  "https://picsum.photos/400/500?image=11",
  "https://picsum.photos/400/500?image=12",

  // Add more image URLs here
];

const Legendes = () => {
  return (
    <div className="l-container">
      {imageList.map((url, index) => (
        <div key={index} className="l-card">
          <h1 className="l-name">Legend Name {index}</h1>
          <img src={url} alt={`Legend ${index}`} className="l-img" />         
        </div>
      ))}
    </div>
  );
};

export default Legendes;