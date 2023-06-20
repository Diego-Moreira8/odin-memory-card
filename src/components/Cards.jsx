import { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Card from "./Card";
import shuffleArray from "../utils/shuffle";

import becca from "../images/characters/becca.jpg";
import bojack from "../images/characters/bojack-horseman.jpg";
import charlotte from "../images/characters/charlotte-carson.jpg";
import diane from "../images/characters/diane-nguyen.jpg";
import hollyhock from "../images/characters/hollyhock.jpg";
import kelsey from "../images/characters/kelsey-jannings.jpg";
import kevin from "../images/characters/kevin.jpg";
import margo from "../images/characters/margo-martindale.jpg";
import fuzzyface from "../images/characters/meow-meow-fuzzyface.jpg";
import peanutbutter from "../images/characters/mr-peanutbutter.jpg";
import princess from "../images/characters/princess-carolyn.jpg";
import todd from "../images/characters/todd-chavez.jpg";

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  width: fit-content;
  height: fit-content;
  margin-bottom: 1rem;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
`;

function Cards({ updateScore }) {
  const resetCharacters = [
    { id: uuid(), clicked: false, name: "Becca", imgSrc: becca },
    { id: uuid(), clicked: false, name: "BoJack Horseman", imgSrc: bojack },
    { id: uuid(), clicked: false, name: "Charlotte Carson", imgSrc: charlotte },
    { id: uuid(), clicked: false, name: "Diane Nguyen", imgSrc: diane },
    { id: uuid(), clicked: false, name: "Hollyhock", imgSrc: hollyhock },
    { id: uuid(), clicked: false, name: "Kelsey Jannings", imgSrc: kelsey },
    { id: uuid(), clicked: false, name: "Kevin", imgSrc: kevin },
    { id: uuid(), clicked: false, name: "Margo Martindale", imgSrc: margo },
    {
      id: uuid(),
      clicked: false,
      name: "Meow Meow Fuzzyface",
      imgSrc: fuzzyface,
    },
    {
      id: uuid(),
      clicked: false,
      name: "Mr. Peanutbutter",
      imgSrc: peanutbutter,
    },
    { id: uuid(), clicked: false, name: "Princess Carolyn", imgSrc: princess },
    { id: uuid(), clicked: false, name: "Todd Chavez", imgSrc: todd },
  ];

  const [characters, setCharacters] = useState(
    structuredClone(resetCharacters)
  );

  const handleClick = (id) => {
    let newArray = structuredClone(characters);

    // Finds the clicked character
    for (let char of newArray) {
      if (char.id === id) {
        if (char.clicked) {
          alert("Already clicked 😢\nThe game will restart now.");
          setCharacters(structuredClone(resetCharacters));
        } else {
          char.clicked = true;
          newArray = structuredClone(shuffleArray(newArray));
          setCharacters(structuredClone(newArray));
        }
      }
    }
  };

  useEffect(() => {
    let clickedCards = 0;
    for (let char of characters) {
      char.clicked && clickedCards++;
    }

    if (clickedCards === 12) {
      alert("You win!!!\n🎉🎉🎉\nThe game will restart now.");
      setCharacters(structuredClone(resetCharacters));
    }

    updateScore(clickedCards);
  }, [characters]);

  return (
    <StyledCards>
      {characters.map((char) => (
        <Card key={char.id} character={char} handleClick={handleClick} />
      ))}
    </StyledCards>
  );
}

export default Cards;
