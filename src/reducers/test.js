import { TEST_ACTION } from '../actions/test';

const initialState = 0;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION: {
      return state + 1;
    }
    default: {
      return state;
    }
  }
}
