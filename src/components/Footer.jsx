import styled from "styled-components";
import Logo from "./Logo";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 1400px;

  @media screen and (max-width: 1366px) {
    width: 1150px;
  }

  @media screen and (max-width: 1198px) {
    width: 100%;
    padding: 0 1rem;
    flex-direction: row-reverse;
    justify-content: flex-start;

    p{
      display: none;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <p>&copy; {new Date().getFullYear().toString()} Teuteuf Games</p>
      <Logo />
    </StyledFooter>
  );
}

export default Footer;
