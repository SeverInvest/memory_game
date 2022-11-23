import './Header.css';

export default function Header() {
  const Logo192 = require('../../images/logo192.png');
  return (
    <header className="app-header">
      <h1 className="app-header__name-game">Memory Game</h1>
      <img src={Logo192} className="app-header__logo" alt="медведь с поднятой лапой" />
    </header>
  );
}