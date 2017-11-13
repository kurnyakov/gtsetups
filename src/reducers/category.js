const initialState = {
  list: [],
  // isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_CATEGORY_ATTEMPT':
    case 'GET_CATEGORY_ATTEMPT':
    case 'SAVE_CATEGORY_ATTEMPT': {
      const newState = Object.assign({}, state);
      // newState.isLoading = true;
      return newState;
    }
    case 'GET_CATEGORY_SUCCESS': {
      const newState = {};
      newState.list = Array.prototype.slice.call(action.json);
      // newState.isLoading = false;
      return newState;
    }
    case 'DELETE_CATEGORY_SUCCESS': {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      const newState = {};
      newState.list = [...state.list];
      newState.list = newState.list.filter(item => (item._id !== action.json._id));
      // newState.isLoading = false;
      return newState;
    }
    case 'SAVE_CATEGORY_SUCCESS': {
      const newState = {};
      newState.list = state.list.concat(action.json);
      // newState.isLoading = false;
      return newState;
    }
    case 'DELETE_CATEGORY_FAILURE':
    case 'SAVE_CATEGORY_FAILURE': {
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
