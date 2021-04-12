import * as TYPES from '../types';

export const activeToggle = (bool) => ({
  type: TYPES.TOGGLE,
  payload: bool,
});

export const show = (bool, which) => ({
  type: TYPES.SHOW,
  payload: bool,
  which
});



