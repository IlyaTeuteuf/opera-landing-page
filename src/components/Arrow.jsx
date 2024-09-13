import styled from "styled-components";

const StyledArrow = styled.div`
  cursor: pointer;
  background: transparent;
  width: 316px;
  height: 100%;
  position: absolute;
  top: 0;
  ${(props) => (props.$right ? "left: 0;" : "right: 0;")}
  z-index: 2;
  opacity: 0;
  transition: opacity 0.5s ease;
  text-align: center;


  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 80%;
    height: 100%;
    transform: ${(props) =>
      !props.$right ? "rotate(0deg)" : "rotate(180deg)"};
    animation: ${(props) =>
        !props.$right ? "moveArrowLeft" : "moveArrowRight"}
      1.5s ease-in-out infinite;
  }

  @keyframes moveArrowLeft {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-40px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes moveArrowRight {
    0% {
      transform: translateX(0) rotate(180deg);
    }
    50% {
      transform: translateX(40px) rotate(180deg);
    }
    100% {
      transform: translateX(0) rotate(180deg);
    }
  }

  @media screen and (max-width: 1366px) {
    width: 253px;
  }

  @media screen and (max-width: 1080px) {
    width: 200px;
    ${props=>props.$right ? 'left: -16px' : 'right: -16px'}
  }

  @media screen and (max-width: 768px) {
    width: 150px;
    ${props=>props.$right ? 'left: -32px' : 'right: -32px'}
  }

  @media (max-width: 600px) {
    width: 135px;
  }

  @media (max-width: 393px) {
    svg{
      display: none;
    }
  }
`;

function Arrow({ right, onClick }) {
  return (
    <StyledArrow $right={right} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="butt" // Changed to make the arrow not rounded
        strokeLinejoin="miter" // Changed to make sharp corners
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </StyledArrow>
  );
}

export default Arrow;
