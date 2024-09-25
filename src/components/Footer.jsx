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
    /* position: absolute;
    bottom: 0;
    right: 0;
    flex-direction: row-reverse;
    justify-content: flex-start; */
    width: 100vw;
    justify-content: flex-end;
    padding-top: 10px;

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
