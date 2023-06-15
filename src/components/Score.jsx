import styled from "styled-components";

const StyledScore = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.yellow};
  text-align: center;
  margin: 1rem;

  @media (max-width: 650px) {
    margin: 0.5rem;
  }
`;

function Score() {
  return <StyledScore>Score: 12</StyledScore>;
}

export default Score;
