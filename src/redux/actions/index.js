import * as API from '../../services/api';
import * as TYPES from '../types';

const retrieveAllMeasures = (data) => ({
  type: TYPES.RETRIEVE_ALL,
  data,
});

export const fetchMeasures = () => async (dispatch) => {
  dispatch({ type: TYPES.LOADING });
  const response = await API.fetchData();
  dispatch(retrieveAllMeasures(response));
  dispatch({ type: TYPES.OK });
};
