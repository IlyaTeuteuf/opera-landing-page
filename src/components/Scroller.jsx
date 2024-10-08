import styled from "styled-components";
import { useGames } from "../providers/gamesProvider";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";

const StyledScroller = styled.div`
  margin-top: 40px;
  max-width: 1400px;
  height: 600px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;

  .container {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  /* &.animate .container {
    animation: ${(props) =>
    props.shift === "left" ? "shiftLeft" : "shiftRight"}
      1s ease;
  } */
  &.animate .container {
    animation: ${(props) => {
        if (props.swipe) {
          return props.shift === "left" ? "shiftLeftSwipe" : "shiftRightSwipe";
        } else {
          return props.shift === "left" ? "shiftLeft" : "shiftRight";
        }
      }}
      1s ease;
  }

  /* background: linear-gradient(to right, transparent, white, transparent); */

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0%;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      rgba(33, 34, 59, 1) 90%
    );
    width: 10%;
    height: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0%;
    right: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(33, 34, 59, 1) 90%
    );
    width: 10%;
    height: 100%;
  }

  @keyframes shiftRight {
    0% {
      transform: translateX(-641px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes shiftLeft {
    0% {
      transform: translateX(641px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 1366px) {
    max-width: 1150px;
    height: 500px;

    @keyframes shiftRight {
      0% {
        transform: translateX(-536px);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes shiftLeft {
      0% {
        transform: translateX(536px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
  @media screen and (max-height: 900px) {
    max-width: 1150px;
    height: 500px;

    @keyframes shiftRight {
      0% {
        transform: translateX(-536px);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes shiftLeft {
      0% {
        transform: translateX(536px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  @media screen and (max-width: 1080px) {
    margin-top: 70px;
    max-width: 900px;
    height: 400px;

    @keyframes shiftRight {
      0% {
        transform: translateX(-432px);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes shiftLeft {
      0% {
        transform: translateX(432px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
  @media screen and (max-height: 800px) {
    margin-top: 70px;
    max-width: 900px;
    height: 400px;

    @keyframes shiftRight {
      0% {
        transform: translateX(-432px);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes shiftLeft {
      0% {
        transform: translateX(432px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 720px;
    height: 350px;
  }

  @media screen and (max-width: 600px) {
    max-width: 83%;
    height: 480px;

    @keyframes shiftRight {
      0% {
        transform: translateX(-213.2px);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes shiftLeft {
      0% {
        transform: translateX(213.2px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  @media screen and (max-width: 393px) {
    margin-top: 30px;
    max-width: 90%;
    max-height: 440px;

    @keyframes shiftRight {
      0% {
        transform: translateX(-196.7px);
      }
      100% {
        transform: translateX(0);
      }
    }
    @keyframes shiftRightSwipe {
      0% {
        transform: translateX(calc(-196.7px + ${(props) => props.swipe}px));
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes shiftLeft {
      0% {
        transform: translateX(196.7px);
      }
      100% {
        transform: translateX(0);
      }
    }
    @keyframes shiftLeftSwipe {
      0% {
        transform: translateX(calc(196.7px + ${(props) => props.swipe}px));
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  @keyframes scaleUpDown {
    0% {
      height: 85%;
      top: 7.5%;
    }
    25% {
      height: 95%;
      top: 2.5%;
    }
    100% {
      height: 85%;
      top: 7.5%;
    }
  }
`;

const StyledArrow = styled.div`
  position: absolute;
  top: 50%;
  ${(props) => (props.right ? "right: 0" : "left: 0")};
  z-index: 1;
  width: 60px;
  height: 100%;
  color: white;
  pointer-events: none;
  display: none;
  animation: ${(props) => (props.right ? "moveRight" : "moveLeft")} 2s linear
      infinite,
    fade 2s linear infinite;

  ${(props) => props.right && "transform: scaleX(-100%)"};

  svg {
    transform: translateY(-50%);
  }

  @media (max-width: 393px) {
    display: block;
  }

  @keyframes moveRight {
    0% {
      right: 0;
    }
    15% {
      right: -4px;
    }
    100% {
      right: -50px;
    }
  }

  @keyframes moveLeft {
    0% {
      left: 0;
    }
    15% {
      left: -4px;
    }
    100% {
      left: -50px;
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

function Scroller() {
  const { activeIndex, setActiveIndex, gamesData } = useGames();
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const restartTimer = () => {
    clearInterval(timerRef.current); // Clear the current interval
    timerRef.current = setInterval(() => {
      handleIncrementIndex(); // Restart the interval
    }, 5000);
  };

  // Effect to handle the automatic looping of the activeIndex
  useEffect(() => {
    if (isPaused) return; // If paused, don't start the interval

    restartTimer();

    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  // pause scroll functions
  const handleMouseEnter = () => {
    setIsPaused(true);
  };
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleIncrementIndex = () => {
    setActiveIndex((index) => (index + 1) % gamesData.length);
    const newKey = keys.current.at(-1) + 1;
    keys.current.shift();
    keys.current.push(newKey);
    setShift("left");
    setTimeout(() => {
      setShift(null);
    }, 1000);

    restartTimer();
  };

  const handleDecrementIndex = () => {
    setActiveIndex(
      (index) => (index - 1 + gamesData.length) % gamesData.length
    );
    const newKey = keys.current.at(0) - 1;
    keys.current.pop();
    keys.current.unshift(newKey);
    setShift("right");
    setTimeout(() => {
      setShift(null);
    }, 1000);

    restartTimer();
  };

  const getIndices = () => {
    const prev2Index = (activeIndex - 2 + gamesData.length) % gamesData.length;
    const prev1Index = (activeIndex - 1 + gamesData.length) % gamesData.length;
    const next1Index = (activeIndex + 1) % gamesData.length;
    const next2Index = (activeIndex + 2) % gamesData.length;

    return [prev2Index, prev1Index, activeIndex, next1Index, next2Index];
  };

  const indices = getIndices();

  const keys = useRef([-2, -1, 0, 1, 2]);

  const [shift, setShift] = useState(null);

  // Touch events
  const [swipe, setSwipe] = useState(0);
  const startX = useRef(0);
  const containerRef = useRef(null);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!startX.current) return;
    const delta = e.touches[0].clientX - startX.current;
    setSwipe(delta);
    if (containerRef) {
      containerRef.current.style.transform = `translateX(${delta}px)`;
    }
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (swipe > 80) handleDecrementIndex();
    if (swipe < -80) handleIncrementIndex();

    startX.current = 0;
    if (containerRef) {
      containerRef.current.style.transform = `translateX(${0}px)`;
    }

    setTimeout(() => {
      setSwipe(0);
    }, 1000);
  };

  return (
    <StyledScroller
      shift={shift}
      swipe={swipe}
      className={` ${shift ? "animate" : ""}`}
    >
      <StyledArrow right={false}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </StyledArrow>
      <div className={`container`} ref={containerRef}>
        {indices.map((index, i) => (
          <Card
            key={keys.current[i]}
            index={index}
            gamesData={gamesData}
            smol={i !== 2}
            right={i === 3}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={
              shift
                ? null
                : i === 1
                ? handleDecrementIndex
                : i === 3
                ? handleIncrementIndex
                : null
            }
            shift={shift}
            // touch events
            onTouchStart={i === 2 ? handleTouchStart : null}
            onTouchMove={i === 2 ? handleTouchMove : null}
            onTouchEnd={i === 2 ? handleTouchEnd : null}
          />
        ))}
      </div>
      <StyledArrow right={true}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </StyledArrow>
    </StyledScroller>
  );
}

export default Scroller;
