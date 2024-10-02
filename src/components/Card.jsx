import styled from "styled-components";
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
  user-select: none;

  .mobile {
    display: none;
  }

  img {
    width: auto;
    height: 100%;
    transition: transform 0.5s ease;
    object-fit: cover;
    object-position: center;
    user-select: none;

  }
  
  &:hover img{
    filter: blur(3px);
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
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    text-align: center;
    color: white;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
    /* animation: wobble infinite ease-in-out 2s; */
    text-transform: uppercase;
    font-weight: bold;
    padding: 5%;
  }

  p:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(83, 83, 172, 1);
    width: 100%;
    height: 100%;
    border-radius: 999px;
    z-index: -1;
    filter: blur(32px);
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
  @media screen and (max-height: 900px) {
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
  @media screen and (max-height: 800px) {
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
  // touch events
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}) {
  const href = gamesData[index].href;

  return (
    <StyledCard
      $smol={smol}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <a
        href={href}
        draggable={false} 
        target="_blank"
        rel="noreferrer noopener"
        onClick={(e) => {
          if (shift) e.preventDefault();
        }}
      >
        <img src={gamesData[index].screenshot} alt={`Game ${index + 1}`} draggable={false} />
        <img
          src={gamesData[index].screenshot_mobile}
          alt={`Game ${index + 1}`}
          className="mobile"
        />
        <p>
          Play now
        </p>
      </a>
      {smol && <Arrow right={right} />}
    </StyledCard>
  );
}

export default Card;
