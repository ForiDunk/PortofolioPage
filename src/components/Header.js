import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>Szabolcs Forreiter</h1>
        </Link>
        <button className="button button--link" href="#">Contact</button>
      </div>
    </div>
  </header>
);

export default Header;
