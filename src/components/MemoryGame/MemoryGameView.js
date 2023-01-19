import React from "react";
import "./MemoryGameView.css"

export default function MemoryGameView({
  shuffleCards,
  SingleCard,
  cards,
  handleChoice,
  choiceOne,
  choiceTwo,
  disabled,
  turns,
}) {
  return (
    <div>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
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
