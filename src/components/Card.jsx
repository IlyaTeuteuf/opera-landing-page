import styled from "styled-components";
import GameLogo from "./GameLogo";
import Arrow from "./Arrow";

const StyledCard = styled.div`
  overflow: hidden;
  flex-shrink: 0;
  width: auto;
  min-width: 626px;
  height: ${(props) => (props.$smol ? "85%" : "100%")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: height 1s ease;
  border-radius: 20px;
  position: relative;
  z-index: 0;

  .mobile,
  .emoji {
    display: none;
  }

  img {
    width: auto;
    height: 100%;
    transition: transform 0.5s ease;
  }

  ${(props) =>
    !props.$smol &&
    `
    img:hover {
      transform: scale(1.1);
    }

     &:hover p {
      opacity: 1;
    }
  `}

  &::after {
    content: "";
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.5s ease;
    opacity: 0;
    z-index: 1;
  }

  &:hover:after {
    opacity: 1;
  }

  p {
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    color: white;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
    animation: wobble infinite ease-in-out 2s;
    background-color: rgba(173, 216, 230, 0.5);
    padding: 6px 0;
  }

  p :not(span) {
    font-weight: bold;
  }

  p span {
    display: inline;
  }

  @keyframes wobble {
    0% {
      transform: scale(1) translateY(-50%);
    }
    50% {
      transform: scale(1.2) translateY(-50%);
    }
    100% {
      transform: scale(1) translateY(-50%);
    }
  }

  @media screen and (max-width: 1366px) {
    height: ${(props) => (props.$smol ? "85%" : "100%")};
    min-width: 521px;
  }

  @media screen and (max-width: 1080px) {
    ${(props) => (props.$smol ? "display: block" : "display: block")};

    p {
      font-size: 2rem;
    }

    min-width: 417px;
  }

  @media screen and (max-width: 768px) {
    min-width: 365px;
  }

  @media (max-width: 600px) {
    img:first-of-type {
      display: none;
    }

    .mobile {
      display: block;
    }

    p {
      font-size: 1.7rem;
    }

    p span:not(.emoji) {
      display: none;
    }

    min-width: 198px;
  }

  @media (max-width: 393px) {
    min-width: 181px;
  }
`;

function Card({
  index,
  gamesData,
  smol,
  right,
  onMouseEnter,
  onMouseLeave,
  onClick,
  shift,
}) {
  const href = gamesData[index].href;

  return (
    <StyledCard
      $smol={smol}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        onClick={(e) => {
          if (shift) e.preventDefault();
        }}
      >
        <img src={gamesData[index].screenshot} alt={`Game ${index + 1}`} />
        <img
          src={gamesData[index].screenshot_mobile}
          alt={`Game ${index + 1}`}
          className="mobile"
        />
        <p>
          Play {<GameLogo noFade={true} />} now!
          <span className="emoji">👆</span>
        </p>
      </a>
      {smol && <Arrow right={right} />}
    </StyledCard>
  );
}

export default Card;
