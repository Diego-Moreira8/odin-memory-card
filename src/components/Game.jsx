import { useState } from "react";
import Score from "./Score";
import Cards from "./Cards";
import styled from "styled-components";

const StyledGame = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

function Game() {
  const [score, setScore] = useState(0);

  const updateScore = (newValue) => setScore(newValue);

  return (
    <StyledGame>
      <Score score={score} />
      <Cards updateScore={updateScore} />
    </StyledGame>
  );
}

export default Game;
