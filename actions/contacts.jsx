import * as types from '../constants/ActionTypes';

export function addContactAction(personObject) {
  return { type: types.ADD_CONTACT, personObject };
}

export function deleteContactAction(id) {
  return { type: types.DELETE_CONTACT, id };
}

export function editContactAction(id, personObject) {
  return { type: types.EDIT_CONTACT, id, personObject };
}
