import bojackLogo from "../images/bojack-logo.svg";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  @media (max-width: 650px) {
    padding: 0.5rem 0;
  }

  img {
    height: 150px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src={bojackLogo} alt="BoJack Horseman TV Show Logo" />
    </StyledHeader>
  );
}

export default Header;
