import { combineReducers } from 'redux';
import AuthenticationReducer from '../reducers/authentication';
import CategoryReducer from '../reducers/category';
import ErrorReducer from '../reducers/error';

const reducers = {
  authentication: AuthenticationReducer,
  error: ErrorReducer,
  categorylist: CategoryReducer,
};

export default combineReducers(reducers);
