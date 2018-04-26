import { combineReducers } from 'redux';
import AuthenticationReducer from '../reducers/authentication';
import CategoryReducer from '../reducers/category';
import ErrorReducer from '../reducers/error';
import LoaderReducer from '../reducers/loader';
import SetupReducer from '../reducers/setup';
import CarReducer from '../reducers/car';

const reducers = {
  authentication: AuthenticationReducer,
  error: ErrorReducer,
  category: CategoryReducer,
  car: CarReducer,
  loader: LoaderReducer,
  setup: SetupReducer,
};

export default combineReducers(reducers);
