import { combineReducers } from 'redux';
import toggle from './toggle';
import showChart from './showChart';

export default combineReducers({ toggle, showChart });
