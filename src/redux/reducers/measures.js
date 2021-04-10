import * as TYPES from '../types';

const INITIAL_STATE = {
  loading: false,
  data: [],
};

const measures = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.LOADING:
      return { ...state, loading: true };
    case TYPES.OK:
      return { ...state, loading: false };
    case TYPES.RETRIEVE_ALL:
      return { ...state, data: [...action.data] };
    default:
      return state;
  }
};

export default measures;
