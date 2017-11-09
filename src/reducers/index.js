import { combineReducers } from 'redux';
import AuthenticationReducer from '../reducers/authentication';
import CategoryReducer from '../reducers/category';

const reducers = {
  authentication: AuthenticationReducer,
  categorylist: CategoryReducer,
};

export default combineReducers(reducers);
