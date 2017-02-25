import {ADD_CONTACT} from '../constants/ActionTypes';

const initialState = 0;

export default function contacts(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_CONTACT:
      return state;

    default:
      return state;
  }
}
