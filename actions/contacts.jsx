import * as types from '../constants/ActionTypes';

export function addContactAction(text) {
  return { type: types.ADD_CONTACT, text };
}
