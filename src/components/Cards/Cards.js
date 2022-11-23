import { shuffledCards } from '../../constants/cards_images.js';
import React, { useState } from 'react';
import './Cards.css'
import Card from '../Card/Card.js'
//import { attemptsCount, setAttemptsCount } from '../Attempts/Attempts.js'

export default function Cards({ increaseAttemtsCount }) {

  const [cardsState, setCardsState] = useState(shuffledCards);
  //const [attemptsCount, setAttemptsCount] = useState(0);
  const [opendCards, setOpendCards] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  function flipCard(index) {
    if (isLocked) {
      return
    }
    if (opendCards.length === 0) {
      setOpendCards([index]);
    } else {
      increaseAttemtsCount()
      //setAttemptsCount(attemptsCount + 1);
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
  };

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

}