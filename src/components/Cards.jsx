import { useState } from "react";
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

function Cards() {
  const [characters, setCharacters] = useState([
    { id: uuid(), name: "Becca", imgSrc: becca },
    { id: uuid(), name: "BoJack Horseman", imgSrc: bojack },
    { id: uuid(), name: "Charlotte Carson", imgSrc: charlotte },
    { id: uuid(), name: "Diane Nguyen", imgSrc: diane },
    { id: uuid(), name: "Hollyhock", imgSrc: hollyhock },
    { id: uuid(), name: "Kelsey Jannings", imgSrc: kelsey },
    { id: uuid(), name: "Kevin", imgSrc: kevin },
    { id: uuid(), name: "Margo Martindale", imgSrc: margo },
    { id: uuid(), name: "Meow Meow Fuzzyface", imgSrc: fuzzyface },
    { id: uuid(), name: "Mr. Peanutbutter", imgSrc: peanutbutter },
    { id: uuid(), name: "Princess Carolyn", imgSrc: princess },
    { id: uuid(), name: "Todd Chavez", imgSrc: todd },
  ]);

  const shuffleCards = () => setCharacters([...shuffleArray(characters)]);

  return (
    <StyledCards>
      {characters.map((char) => (
        <Card
          key={char.id}
          charName={char.name}
          imgSrc={char.imgSrc}
          shuffleCards={shuffleCards}
        />
      ))}
    </StyledCards>
  );
}

export default Cards;
