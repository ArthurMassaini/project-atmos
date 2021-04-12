import React, { useState } from 'react';
import * as ACTIONS from '../redux/actions/index';
import { useDispatch } from 'react-redux';
import { Navbar, NavbarToggler } from 'reactstrap';

const Toggler = () => {
  const [getFlag, setFlag] = useState(0);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (getFlag === 0) {
      dispatch(ACTIONS.activeToggle(true));
      setFlag(1);
    } else {
      dispatch(ACTIONS.activeToggle(false));
      setFlag(0);
    }
  };

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarToggler onClick={handleClick} className="mr-2" />
      </Navbar>
    </div>
  );
};

export default Toggler;
