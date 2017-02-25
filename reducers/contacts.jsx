import {ADD_CONTACT} from '../constants/ActionTypes';

const initialState = [{
  id: 0,
  person: {
    name: 'Aaron',
    surname: 'Krohn',
    email: 'aaronkrohn@hotmail.com'
  }
}];

// return [{
//   id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
//   completed: false,
//   text: action.text
// }, ...state];

export default function contacts(state = initialState, action) {
  console.log('action ', action);

  switch (action.type) {

    case ADD_CONTACT:
      return [{
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        person: action.person
      }, ...state];

    default:
      return state;
  }
}
