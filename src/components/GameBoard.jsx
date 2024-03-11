import React, { useState, useEffect } from 'react';
import Card from './Card'; 
import './gameboard.css'; 

function GameBoard() {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [time, setTime] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    initializeCards();
  }, []);

  useEffect(() => {
    let timer;
    if (gameStarted && !gameWon) {
      timer = setTimeout(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [time, gameStarted, gameWon]);

  function initializeCards() {
    let initializedCards = [...Array(16).keys()].map((i) => ({
      id: i,
      value: Math.floor(i / 2), 
      isFlipped: false,
      isMatched: false,
    }));

    for (let i = initializedCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initializedCards[i], initializedCards[j]] = [initializedCards[j], initializedCards[i]];
    }

    setCards(initializedCards);
    setFlippedIndices([]);
    setMatchedPairs(0);
    setTime(0);
    setGameWon(false);
    setGameStarted(false);
  }

  const handleCardClick = (index) => {
    if (!gameStarted) {
      setGameStarted(true);
    }
    if (gameWon || flippedIndices.length === 2 || cards[index].isFlipped) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      const firstIndex = newFlippedIndices[0];
      const secondIndex = newFlippedIndices[1];
      if (newCards[firstIndex].value === newCards[secondIndex].value) {
        newCards[firstIndex].isMatched = true;
        newCards[secondIndex].isMatched = true;
        setMatchedPairs((prev) => prev + 1);
        setFlippedIndices([]);
        if (matchedPairs + 1 === cards.length / 2) {
          setGameWon(true);
        }
      } else {
        setTimeout(() => {
          newCards[firstIndex].isFlipped = false;
          newCards[secondIndex].isFlipped = false;
          setFlippedIndices([]);
          setCards(newCards);
        }, 1000);
      }
    }
  };

  return (
    <div className="game-board">
      {cards.map((card, index) => (
        <Card key={index} value={card.value} isFlipped={card.isFlipped} onClick={() => handleCardClick(index)} />
      ))}
      <button className="new-game-btn" onClick={initializeCards}>
        <i className="fas fa-undo"></i> New Game
      </button>

      {gameWon && (
        <>
          <div className="celebration-container" style={{ display: 'flex' }}>
            {Array.from({ length: 100 }).map((_, index) => (
              <div key={index} className="confetti-piece" style={{ animationDelay: `${index * 0.05}s` }}></div>
            ))}
          </div>
          <div className="celebration-message" style={{ display: 'block' }}>
            Congratulations! You won in {time} seconds!
          </div>
        </>
      )}

      <p>Time: {time} seconds</p>
    </div>
  );
}

export default GameBoard;
