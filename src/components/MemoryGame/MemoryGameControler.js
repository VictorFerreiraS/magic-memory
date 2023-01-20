import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from "../SingleCard./SingleCard";
import MemoryGameView from "./MemoryGameView";
import { setCardsRedux } from "../../features/cards";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

export default function MemoryGameControler() {
  const cardsRedux = useSelector((state) => state.cardsRedux.value);
  
  
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    dispatch(setCardsRedux(shuffledCards));

    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
  };

  // Handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  const compareTwoCards = () => {
    if (choiceOne.src === choiceTwo.src) {
          dispatch(setCardsRedux(cardsRedux.map((card) => {
          if (card.src === choiceOne.src) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        })));
      setTimeout(() => resetTurn(), 1000);
    } else {
      setTimeout(() => resetTurn(), 1000);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo != null) {
      setDisabled(true);
      compareTwoCards();
    }
  }, [choiceOne, choiceTwo]);

  // reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //Start the game automaticaly
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div>
      <MemoryGameView
        shuffleCards={shuffleCards}
        SingleCard={SingleCard}
        handleChoice={handleChoice}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
        disabled={disabled}
        turns={turns}
      />
    </div>
  );
}
