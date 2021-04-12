import React from 'react';
import { Link } from 'react-router-dom';
import Toggler from '../components/Toggler';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <Toggler />
      <h1>
        <img src={logo} alt="atmos" className="logo-header" />
      </h1>
      <h1>
        <Link to="/" className="link">
          Logout
        </Link>
      </h1>
    </header>
  );
}

export default Header;
