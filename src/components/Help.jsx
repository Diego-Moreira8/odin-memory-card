import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 1rem;

  width: 2rem;
  height: 2rem;
  border: 4px solid ${(props) => props.theme.black};
  border-radius: 50%;
  padding: 0;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.black};
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  @media (min-width: 900px) {
    right: 50%;
    transform: translate(300px, -50%);
  }
`;

const CloseButton = styled(StyledButton)`
  background-color: #ff7777;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;

const StyledHelpTooltip = styled.div`
  position: fixed;
  top: 2rem;

  max-width: 500px;
  margin: 0 1rem;
  border-radius: 1rem;
  border: 4px solid ${(props) => props.theme.black};
  padding: 1rem;
  
  background-color: ${(props) => props.theme.yellow};
  box-shadow: 0px 0px 100px 20px ${(props) => props.theme.blue};
  text-align: center;

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

function Help() {
  const [isOpen, setIsOpen] = useState(false);

  const openTooltip = () => setIsOpen(true);
  const closeTooltip = () => setIsOpen(false);

  return (
    <>
      <StyledButton onClick={openTooltip}>?</StyledButton>
      {isOpen && (
        <StyledHelpTooltip>
          <CloseButton onClick={closeTooltip}>X</CloseButton>
          <h2>How to play:</h2>
          <p>
            To win the game you must click on each character only once! The game
            ends when you've clicked on all of the 12 characters. If you click 
            on a character more than once, you lose and the score resets.
            <br></br>Good luck!
          </p>
        </StyledHelpTooltip>
      )}
    </>
  );
}

export default Help;
