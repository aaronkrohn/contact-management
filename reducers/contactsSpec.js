// import {ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from '../constants/ActionTypes';
// import {deepFreeze} from 'deep-freeze'
// import {contact } from 'contacts';
import {expect, should} from 'chai';

// https://github.com/Automattic/expect.js

const foo = 'bar';
const beverages = {tea: ['chai', 'matcha', 'oolong']};

describe('Array', function () {
  expect(foo).to.be.a('string');
  expect(foo).to.equal('bar');
  expect(foo).to.have.lengthOf(3);
  expect(beverages).to.have.property('tea').with.lengthOf(3);
});
