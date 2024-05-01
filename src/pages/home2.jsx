import React from 'react';
import '../styles/home.css'; // CSS file for the grid layout

const Hexagon = ({ content, gridArea }) => {
  return (
    <div className={`hexagon`} style={{ gridArea }}>
      <div className="hexagon-content">{content}</div> {/* Content inside the hexagon */}
    </div>
  );
};

const Home = () => {
  return (
    <div className="hexagon-grid"> {/* Grid container with grid-template-areas */}
      <Hexagon content="Hexagon 1" gridArea="hex1" /> {/* Assign to grid area hex1 */}
      <Hexagon content="Hexagon 2" gridArea="hex2" /> {/* Assign to grid area hex2 */}
      <Hexagon content="Hexagon 3" gridArea="hex3" /> {/* Assign to grid area hex3 */}
    </div>
  );
};

export default Home;
