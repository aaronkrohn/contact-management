import {ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from '../constants/ActionTypes';

// node
import path from 'path';
// vendors
import React from 'react';
// reducer
import contacts from './contacts';

describe('Test Reducers', () => {
  it('vendors import should work', () => {
    expect(React).not.toBe(null);
  });

  it('local import should exist', () => {
    expect(contacts).not.toBe(null);
  });

  it('Should have correct initial state', () => {
    const initialState = [{
      id: 0,
      person: {
        name: 'Aaron',
        surname: 'Krohn',
        email: 'aaronkrohn@hotmail.com'
      }
    }];
    const afterState = [{
      id: 0,
      person: {
        name: 'Aaron',
        surname: 'Krohn',
        email: 'aaronkrohn@hotmail.com'
      }
    }];
    expect(contacts(initialState, {})).toEqual(afterState);
  });

  it('Should ADD contact', () => {
    const state = [{
      id: 0,
      person: {
        name: 'Aaron',
        surname: 'Krohn',
        email: 'aaronkrohn@hotmail.com'
      }
    }];

    const personObject = {
      name: 'Jason',
      surname: 'Krohn',
      email: 'jasonkrohn@hotmail.com'
    }

    const afterState = [
      {
        id: 1,
        person: {
          name: 'Jason',
          surname: 'Krohn',
          email: 'jasonkrohn@hotmail.com'
        }
      },
      {
        id: 0,
        person: {
          name: 'Aaron',
          surname: 'Krohn',
          email: 'aaronkrohn@hotmail.com'
        }
      }
    ];

    expect(
      contacts(state, {type: ADD_CONTACT, personObject})
    ).toEqual(afterState);
  });
});