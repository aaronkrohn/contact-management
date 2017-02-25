import {ADD_CONTACT} from '../constants/ActionTypes';

const initialState = [{
  id: 0,
  person: {
    name: 'Aaron',
    surname: 'Krohn',
    email: 'aaronkrohn@hotmail.com'
  }
}];

export default function contacts(state = initialState, action) {
  console.log('reducer ', action);
  switch (action.type) {
    case ADD_CONTACT:
      return [{
        id: state.reduce((maxId, contact) => Math.max(contact.id, maxId), -1) + 1,
        person: action.personObject
      }, ...state];

    default:
      return state;
  }
}
