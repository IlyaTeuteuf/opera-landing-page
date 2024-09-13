import styled from "styled-components";
import { useGames } from "../providers/gamesProvider";
import { useState, useEffect, useRef } from "react";

const StyledDescription = styled.div`
  color: white;
  width: 100%;
  max-width: 700px;
  
  text-align: center;
  line-height: 1.5;
  opacity: ${(props) => (props.fade ? 0 : 1)};
  transition: opacity 0.5s ease-in-out; /* Smooth fade effect */

  h3 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  @media screen and (max-width: 787px) {
  }

  @media screen and (max-width: 600px) {
    h3{
      font-size: 1.05rem;
    }
  }

  @media screen and (max-width: 393px) {
    width: 90%;
  }
`;

function Description() {
  const { activeIndex, gamesData } = useGames();
  const [fade, setFade] = useState(false);
  const [description, setDescription] = useState(gamesData[activeIndex].descriptionData);
  const isFirstRender = useRef(true);

  // Effect to handle fade-out and fade-in on activeIndex change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setFade(true); // Start fade-out

    // After the fade-out is done (500ms), change the description and fade-in
    const timeout = setTimeout(() => {
      setDescription(gamesData[activeIndex].descriptionData);
      setFade(false); // Start fade-in
    }, 500);

    // Cleanup timeout if the component unmounts or activeIndex changes too quickly
    return () => clearTimeout(timeout);
  }, [activeIndex, gamesData]);

  return (
    <StyledDescription fade={fade}>
      <h3>{description.heading}</h3>
      <p>{description.info}</p>
    </StyledDescription>
  );
}

export default Description;
