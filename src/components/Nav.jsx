import React from 'react';

function Nav() {
  return (
    <nav className="nav">
      <button type="button" className="button-nav">
        <h4>kWh</h4>
      </button>
      <button type="button" className="button-nav">
        <h4>Corrente</h4>
      </button>
      <button type="button" className="button-nav">
        <h4>Tensão</h4>
      </button>
    </nav>
  );
}

export default Nav;
