import * as TYPES from '../types';

const INITIAL_STATE = {
  active: false,
};

const toggle = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.TOGGLE:
      return { ...state, active: action.payload };
    default:
      return state;
  }
};

export default toggle;
