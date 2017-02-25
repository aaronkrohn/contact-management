import {ADD_CONTACT} from '../constants/ActionTypes';

const initialState = [{
  id: 0
}];

export default function contacts(state = initialState, action) {

  switch (action.type) {
    case ADD_CONTACT:
      return state + 1;

    default:
      return state;
  }
}
