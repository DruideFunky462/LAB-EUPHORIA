import React from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Hexagon = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background-color: #004792;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  margin: 29px 0;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HexagonText = styled.div`
  color: white;
  white-space: nowrap;
`;

const HexagonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverlappingHexagon = styled(Hexagon)`
  position: relative;
  bottom: -60px;
  left: -60px;
  opacity: 0.9;
`;

const Category = () => {
  return (
    <Container>

      <HexagonContainer>
        {/* Hexagone 1 */}
        <Hexagon>
          <HexagonText>FRENCH GLORY</HexagonText>
        </Hexagon>
        {/* Hexagone 2 */}
        <OverlappingHexagon>
          <HexagonText>VIDEOS</HexagonText>
        </OverlappingHexagon>
      </HexagonContainer>

      <HexagonContainer>
        {/* Hexagone 3 */}
        <Hexagon>
          <HexagonText>LEGENDES</HexagonText>
        </Hexagon>
        {/* Hexagone 4 */}
        <OverlappingHexagon>
          <HexagonText>VIDEOS</HexagonText>
        </OverlappingHexagon>
      </HexagonContainer>

      <HexagonContainer>
        {/* Hexagone 5 */}
        <Hexagon>
          <HexagonText>MEDAILLES</HexagonText>
        </Hexagon>
        {/* Hexagone 6 */}
        <OverlappingHexagon>
          <HexagonText>VIDEOS</HexagonText>
        </OverlappingHexagon>
      </HexagonContainer>

    </Container>
  );
};

export default Category;
