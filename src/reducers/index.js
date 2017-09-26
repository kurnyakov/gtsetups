import { combineReducers } from 'redux';
import TestReducer from '../reducers/test';

const reducers = {
  test: TestReducer,
};

export default combineReducers(reducers);
