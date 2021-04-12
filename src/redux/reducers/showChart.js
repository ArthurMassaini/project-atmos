import * as TYPES from '../types';

const INITIAL_STATE = {
  showKw: true,
  showA: false,
  showV: false,
  showFP: false,
};

const showChart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SHOW:
      if (action.which === 'kWh') {
        return { ...state, showKw: action.payload };
      } else if (action.which === 'Corrente') {
        return { ...state, showA: action.payload };
      } else if (action.which === 'Tensão') {
        return { ...state, showV: action.payload };
      } else {
        return { ...state, showFP: action.payload };
      }
    default:
      return state;
  }
};

export default showChart;
