import { createStore } from 'redux';

const initialState = {};

const INCREMENT = { type: 'increment' };

const rootReducer = (state = initialState, action = INCREMENT) => {
  switch (action.type) {
    case 'increment':
      return state;

    default:
      return state;
  }
};

const store = createStore(rootReducer);
