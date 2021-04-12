import * as TYPES from '../types';

export const activeToggle = (bool) => ({
  type: TYPES.TOGGLE,
  payload: bool,
});
