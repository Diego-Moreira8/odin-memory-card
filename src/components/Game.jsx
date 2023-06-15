import Score from "./Score";
import Cards from "./Cards";
import styled from "styled-components";

const StyledGame = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

function Game() {
  return (
    <StyledGame>
      <Score />
      <Cards />
    </StyledGame>
  );
}

export default Game;
