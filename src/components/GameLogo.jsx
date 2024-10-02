import styled from "styled-components";
import { useGames } from "../providers/gamesProvider";
import { useEffect, useRef, useState } from "react";

const StyledGameLogo = styled.span`
  padding-top: 8px;
  margin: 0 0 32px;
  color: white;
  text-align: center;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.fade ? "0" : "1")};
  transition: opacity 0.5s ease-in-out;

  img {
    max-height: 1em;
    margin-right: 8px;
    ${(props) => props.usedInCard && "position: relative; top: 4px;"}
  }

  @media screen and (max-width: 1080px) {
    ${(props) => props.usedInCard && "font-size: 2rem;"};
    margin: 0 0 24px;
  }

  @media screen and (max-width: 600px) {
    ${(props) => (props.usedInCard ? "font-size: 1.5rem;" : "font-size: 2rem")};
  }

  @media (max-width: 393px) {
    margin: 0 0 24px;
  }
`;

function GameLogo({ noFade = false }) {
  const { activeIndex, gamesData } = useGames();
  const [fade, setFade] = useState(false);
  const [logoData, setLogoData] = useState(gamesData[activeIndex].logoData);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (noFade) setLogoData(gamesData[activeIndex].logoData);
    if (isFirstRender.current || noFade) {
      isFirstRender.current = false;
      return;
    }
    setFade(true); // Start fade-out

    // After the fade-out is done (500ms), change the description and fade-in
    const timeout = setTimeout(() => {
      setLogoData(gamesData[activeIndex].logoData);
      setFade(false); // Start fade-in
    }, 500);

    // Cleanup timeout if the component unmounts or activeIndex changes too quickly
    return () => clearTimeout(timeout);
  }, [gamesData, activeIndex, noFade]);

  return (
    <StyledGameLogo
      style={logoData.bold ? { fontWeight: "bold" } : {}}
      fade={fade}
      usedInCard={noFade}
    >
      {logoData.logo.startsWith("/") || logoData.logo.startsWith("\\") ? (
        <img src={logoData.logo} />
      ) : (
        <span>{logoData.logo}</span>
      )}

      {logoData.name.map((namePart) => {
        if (namePart.style)
          return (
            <span style={namePart.style} key={namePart.text}>
              {namePart.text}
            </span>
          );
        else return namePart.text;
      })}
    </StyledGameLogo>
  );
}

export default GameLogo;
