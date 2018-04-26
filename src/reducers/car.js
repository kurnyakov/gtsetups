const initialState = {
  list: [],
  // isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_CAR_ATTEMPT':
    case 'GET_CAR_ATTEMPT':
    case 'SAVE_CAR_ATTEMPT': {
      const newState = Object.assign({}, state);
      // newState.isLoading = true;
      return newState;
    }
    case 'GET_CAR_SUCCESS': {
      const newState = {};
      newState.list = Array.prototype.slice.call(action.json);
      // newState.isLoading = false;
      return newState;
    }
    case 'DELETE_CAR_SUCCESS': {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      const newState = {};
      newState.list = [...state.list];
      newState.list = newState.list.filter(item => (item._id !== action.json._id));
      // newState.isLoading = false;
      return newState;
    }
    case 'SAVE_CAR_SUCCESS': {
      const newState = {};
      newState.list = state.list.concat(action.json);
      // newState.isLoading = false;
      return newState;
    }
    case 'DELETE_CAR_FAILURE':
    case 'SAVE_CAR_FAILURE': {
      const newState = {};
      newState.list = [...state.list];
      // newState.isLoading = false;
      return newState;
    }
    default: {
      return state;
    }
  }
}
