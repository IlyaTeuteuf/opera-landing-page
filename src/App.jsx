import Scroller from "./components/Scroller";
import GameLogo from "./components/GameLogo";
import Description from "./components/Description";
import { GamesProvider } from "./providers/gamesProvider";
import Footer from "./components/Footer";
import styled from "styled-components";

const InfoWrapper = styled.div`
  margin: 0 auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1366px){
    margin-top: 2rem;
  }

  @media screen and (max-width: 1080px){
    margin-top: 3rem;
  }

  @media screen and (max-width: 768px){
    margin-top: 4rem;
  }

  @media screen and (max-width: 600px){
    margin-top: 1rem;
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
  }
`;

function App() {
  return (
    <GamesProvider>
      <Scroller />
      <InfoWrapper>
        <GameLogo />
        <Description />
      </InfoWrapper>
      <Footer />
    </GamesProvider>
  );
}

export default App;
