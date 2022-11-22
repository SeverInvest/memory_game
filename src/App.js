import { shuffledCards } from './constants/cards_images.js';
import React, { useState } from 'react';
import './App.css';
import Card from "./components/Card.js"



function App() {
  const [cardsState, setCardsState] = useState(shuffledCards);
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [opendCards, setOpendCards] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  function flipCard(index) {
    if (isLocked) {
      return
    }
    if (opendCards.length === 0) {
      setOpendCards([index]);
    } else {
      setAttemptsCount(attemptsCount + 1);
      if (opendCards[0] === index) {
        return
      } else if (cardsState[opendCards[0]].ind === cardsState[index].ind) {
        const nextCardsState = cardsState.map(card => ({ ...card }))
        nextCardsState[index].isFlipped = true
        nextCardsState[opendCards[0]].isFlipped = true
        setCardsState(nextCardsState)
        setOpendCards([])


      } else {
        setOpendCards([opendCards[0], index])
        setIsLocked(true)

        const lockedInterval = setInterval(() => {
          setOpendCards([])
          setIsLocked(false)
          clearInterval(lockedInterval)
        }, 500)

      }
    }
  }

  function Cards() {
    return (
      <section className="cards">
        {cardsState.map((cardData, index) => {
          return <Card
            key={index}
            image={cardData.image}
            isFlipped={cardData.isFlipped || opendCards.includes(index)}
            flipCard={() => { flipCard(index) }}
          />
        })}
      </section>
    );
  };

  return (
    <div className="app">
      <HeaderGame />
      <p>Attempts: {attemptsCount}</p>
      <Cards />
    </div>
  )
}

function HeaderGame() {
  const Logo192 = require('./images/logo192.png');
  return (
    <header className="app-header">
      <h1 className="app-header__name-game">Memory Game</h1>
      <img src={Logo192} className="app-header__logo" aria-label="медведь с поднятой лапой" />
    </header>
  );
}

export default App;
