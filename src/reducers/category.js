const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORY_SUCCESS': {
      const newState = [...state];
      const keys = Object.keys(action.json);
      const values = Object.values(action.json);
      for (let i = 0; i < keys.length; i += 1) {
        newState.push(values[i]);
      }
      return newState;
    }
    case 'DELETE_CATEGORY_SUCCESS': {
      const newState = [...state];
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      for (let i = 0; i < newState.length; i += 1) {
        if (newState[i]._id === action.json._id) {
          newState.splice(i, 1);
        }
      }
      return newState;
    }
    case 'SAVE_CATEGORY_SUCCESS': {
      return [...state, action.json];
    }
    default: {
      return state;
    }
  }
}
