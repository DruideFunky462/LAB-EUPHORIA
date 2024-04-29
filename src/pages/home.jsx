import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Category from "../components/Category"; // Importez le composant Category

const fadeInFromBottomRight = keyframes`
  from {
    opacity: 0;
    transform: translate(100%, 100%);
  }
  to {
    opacity: 1;
    transform: translate(-330%, -75%);
  }
`;

const fadeInFromTopLeft = keyframes`
  from {
    opacity: 0;
    transform: translate(-700%, -300%);
  }
  to {
    opacity: 1;
    transform: translate(-330%, -75%);
  }
`;

const fadeOutToTopLeft = keyframes`
  from {
    opacity: 1;
    transform: translate(-330%, -75%);
  }
  to {
    opacity: 0;
    transform: translate(-700%, -300%);
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ initialLoad, isVisible }) =>
      initialLoad
        ? fadeInFromBottomRight
        : isVisible
        ? fadeInFromTopLeft
        : fadeOutToTopLeft}
    1s forwards;
  transition: opacity 0.5s ease-in-out;
  z-index: 999; /* Assurez-vous que l'image apparaît au-dessus de tout le reste */
`;

const Image = styled.img`
  width: 200px; /* Ajustez la taille de l'image selon vos besoins */
  height: auto;
`;

const CircleCursor = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
  opacity: 50%;
  pointer-events: none;
  z-index: 1000; /* Assurez-vous que le cercle est au-dessus de tout le reste */
  transform: translate(
    -50%,
    -50%
  ); /* Centrer le cercle par rapport au curseur */
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100%; /* Positionnez la catégorie en dessous de l'image */
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 1000; /* Assurez-vous que la catégorie est au-dessus de l'image */
`;

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const circleCursorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop < 100); // Modifier la valeur pour ajuster la condition de déclenchement de la disparition de l'image
      setInitialLoad(false); // Marquer que le chargement initial est terminé après le premier scroll
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });

      // Mettre à jour la position du cercle de suivi du curseur
      if (circleCursorRef.current) {
        circleCursorRef.current.style.left = `${clientX}px`;
        circleCursorRef.current.style.top = `${clientY}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
  
      <div>
        {isVisible && <CircleCursor ref={circleCursorRef} />}
        <ImageContainer isVisible={isVisible} initialLoad={initialLoad}>
          <Image src="ff.png" alt="Votre image" />
        </ImageContainer>
      </div>
      {/* Placer la catégorie sous l'image */}
      <CategoryContainer>
        <Category />
      </CategoryContainer>
    </div>
  );
};

export default Home;
