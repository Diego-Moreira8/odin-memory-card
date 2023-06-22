import styled from "styled-components";

const StyledScore = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.yellow};
  text-align: center;
  margin: 1rem;
`;

function Score({ score }) {
  return <StyledScore>Score: {score}</StyledScore>;
}

export default Score;
