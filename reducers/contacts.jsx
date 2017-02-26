import {ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from '../constants/ActionTypes';

const initialState = [{
  id: 0,
  person: {
    name: 'Aaron',
    surname: 'Krohn',
    email: 'aaronkrohn@hotmail.com'
  }
}];

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return [{
        id: state.reduce((maxId, contact) => Math.max(contact.id, maxId), -1) + 1,
        person: action.personObject
      }, ...state];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.id);

    case EDIT_CONTACT:
      return state.map(contact =>
        contact.id === action.id ?
          Object.assign({}, contact, { person: action.personObject }) :
          contact
      );

    default:
      return state;
  }
}
