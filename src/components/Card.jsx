import styled from "styled-components";

const StyledCard = styled.div`
  cursor: pointer;
  background-color: ${(props) => props.theme.yellow};
  width: 180px;
  height: fit-content;
  border-radius: 1rem;
  border: 4px solid ${(props) => props.theme.black};

  @media (max-width: 650px) {
    width: 130px;
    border-radius: 0.5rem;
    border: 2px solid ${(props) => props.theme.black};
  }

  @media (max-width: 450px) {
    width: 100px;
  }

  img {
    width: calc(100% - 2rem);
    margin: 1rem 1rem 0 1rem;
    border-radius: 0.5rem;
    border: 4px solid ${(props) => props.theme.black};

    @media (max-width: 650px) {
      width: calc(100% - 1rem);
      margin: 0.5rem 0.5rem 0 0.5rem;
      border-radius: 0.25rem;
      border: 2px solid ${(props) => props.theme.black};
    }
  }

  div {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0.5rem 1rem 0.5rem;
    height: 2rem;
    @media (max-width: 650px) {
      margin: 0.25rem 0.25rem 0.5rem 0.25rem;
    }
  }
`;

function Card({ imgSrc, charName }) {
  return (
    <StyledCard>
      <img src={imgSrc} alt={charName} />
      <div>{charName}</div>
    </StyledCard>
  );
}

export default Card;
