import * as types from '../constants/ActionTypes';

export function addContact(text) {
  return { type: types.ADD_CONTACT, text };
}
