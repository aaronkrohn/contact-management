import * as types from '../constants/ActionTypes';

export function addContactAction(personObject) {
  return { type: types.ADD_CONTACT, personObject };
}
