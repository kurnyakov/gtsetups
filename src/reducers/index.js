import { combineReducers } from 'redux';
import AuthenticationReducer from '../reducers/authentication';
import CategoryReducer from '../reducers/category';
import ErrorReducer from '../reducers/error';
import LoaderReducer from '../reducers/loader';

const reducers = {
  authentication: AuthenticationReducer,
  error: ErrorReducer,
  category: CategoryReducer,
  loader: LoaderReducer,
};

export default combineReducers(reducers);
