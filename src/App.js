import React, { useState } from 'react';

import './App.css';
import Cards from "./components/Cards/Cards.js"
import Header from "./components/Header/Header.js"
import Attempts from "./components/Attempts/Attempts.js"

export default function App() {
  const [attemptsCount, setAttemptsCount] = useState(0);
  function increaseAttemtsCount() {
    setAttemptsCount(attemptsCount + 1);
  }
  return (
    <div className="app">
      <Header />
      <Attempts attemptsCount={attemptsCount}/>
      <Cards increaseAttemtsCount={increaseAttemtsCount}/>
    </div>
  )
}
