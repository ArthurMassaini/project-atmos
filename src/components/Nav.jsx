import React from 'react';
import { useDispatch } from 'react-redux';

import * as ACTIONS from '../redux/actions';

function Nav() {
  const dispatch = useDispatch();

  const handleClick = ({ target }) => {
    const { innerText } = target;
    if (innerText === 'kWh') {
      dispatch(ACTIONS.show(true, innerText));
      dispatch(ACTIONS.show(false, 'Corrente'));
      dispatch(ACTIONS.show(false, 'Tensão'));
      dispatch(ACTIONS.show(false, 'Fator de potência'));
    } else if (innerText === 'Corrente') {
      dispatch(ACTIONS.show(true, innerText));
      dispatch(ACTIONS.show(false, 'Tensão'));
      dispatch(ACTIONS.show(false, 'Fator de potência'));
      dispatch(ACTIONS.show(false, 'kWh'));
    } else if (innerText === 'Tensão') {
      dispatch(ACTIONS.show(true, innerText));
      dispatch(ACTIONS.show(false, 'Corrente'));
      dispatch(ACTIONS.show(false, 'Fator de potência'));
      dispatch(ACTIONS.show(false, 'kWh'));
    } else {
      dispatch(ACTIONS.show(true, innerText));
      dispatch(ACTIONS.show(false, 'kWh'));
      dispatch(ACTIONS.show(false, 'Corrente'));
      dispatch(ACTIONS.show(false, 'Tensão'));
    }
  };

  return (
    <nav className="nav">
      <button type="button" className="button-nav" onClick={handleClick}>
        <h5>kWh</h5>
      </button>
      <button type="button" className="button-nav" onClick={handleClick}>
        <h5>Corrente</h5>
      </button>
      <button type="button" className="button-nav" onClick={handleClick}>
        <h5>Tensão</h5>
      </button>
      <button type="button" className="button-nav" onClick={handleClick}>
        <h5>Fator de potência</h5>
      </button>
    </nav>
  );
}

export default Nav;
