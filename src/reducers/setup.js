const initialState = {
  traction: 9,
  brakes: 5,
  frontTires: 6,
  rearTires: 6,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SETUP_SAVED': {
      const newState = Object.assign({}, initialState);
      return newState;
    }
    default: {
      return state;
    }
  }
}
