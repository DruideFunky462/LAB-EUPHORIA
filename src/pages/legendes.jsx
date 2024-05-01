import React from "react";
import "../styles/legendes.css";
import Navbarlegendes from "../components/Navbarlegendes";

const imageList = [
  "https://i.postimg.cc/Nf6nq25T/guigou2.jpg",
  "https://i.postimg.cc/rwbZ51HB/karabatic.jpg",
  "https://i.postimg.cc/WzkH4XTp/abalo.jpg",
  "https://i.postimg.cc/SQYZpTgH/narcisse.jpg",
  "https://i.postimg.cc/przFrn7M/omeyer.webp",
  "https://i.postimg.cc/6qCL4PS3/pineau.webp",
  "https://i.postimg.cc/3R5k0wHX/fernandez.webp",
  "https://i.postimg.cc/Qt8rzLgL/bgilles.jpg",
  "https://i.postimg.cc/KcTd58hK/ggilles.jpg",
  "https://i.postimg.cc/02WdM7X7/karaboue.jpg",
  "https://i.postimg.cc/NGP5RbYG/dembele.jpg",
  "https://i.postimg.cc/Z5QGcBnd/edwige.jpg",
];

const nameList = [
  "Michael Guigou",
  "Nikola Karabatic",
  "Luc Abalo",
  "Daniel Narcisse",
  "Thierry Omeyer",
  "Allison Pineau",
  "Jerôme Fernandez",
  "Bertrand Gilles",
  "Guillaume Gilles",
  "Daouda Karaboué",
  "Siraba Dembélé",
  "Béatrice Edwige",
];

const Legendes = () => {
  return (
    <div>

    <Navbarlegendes />

    <div className="l-container">
      {imageList.map((url, index) => (
        <div key={index} className="l-card">
          <h1 className="l-name">{nameList[index]}</h1> {/* Use nameList to get the corresponding name */}
          <img src={url} alt={`Legend ${index}`} className="l-img" />
        </div>
      ))}
    </div>

    </div>
  );
};

export default Legendes;
