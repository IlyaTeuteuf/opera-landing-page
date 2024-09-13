import styled from "styled-components";

const StyledLogo = styled.a`
  padding: 20px 20px;
  width: fit-content;

  font-size: 30px;
  display: flex;
  align-items: center;

  img {
    width: auto;
    height: 1em;
  }

  @media screen and (max-width: 1198px) {
    font-size: 25px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

function Logo() {
  return (
    <StyledLogo
      href="https://teuteuf.fr/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img src="/src/assets/teuteuf.svg" alt="Teuteuf Logo" />
    </StyledLogo>
  );
}

export default Logo;
