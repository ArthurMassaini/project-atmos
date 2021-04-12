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
        <h4>kWh</h4>
      </button>
      <button type="button" className="button-nav" onClick={handleClick}>
        <h4>Corrente</h4>
      </button>
      <button type="button" className="button-nav" onClick={handleClick}>
        <h4>Tensão</h4>
      </button>
      <button type="button" className="button-nav" onClick={handleClick}>
        <h4>Fator de potência</h4>
      </button>
    </nav>
  );
}

export default Nav;
