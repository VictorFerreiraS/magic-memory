import React from "react";
import "./MemoryGameView.css"

// Redux
import { useSelector } from "react-redux";

export default function MemoryGameView({
  shuffleCards,
  SingleCard,
  handleChoice,
  choiceOne,
  choiceTwo,
  disabled,
  turns,
}) {

  const card = useSelector((state => state.card.value))


  return (
    <div>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {card.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turnes: {turns}</p>
    </div>
  );
}
