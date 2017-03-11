// node
import path from 'path';
// vendors
import React from 'react';
// project
//import Header from 'components/Header';
//import contacts from '../reducers/contacts';

describe('Testing', () => {
  it('node import should work', () => {
    expect(path).not.toBe(null);
  });
  it('vendors import should work', () => {
    expect(React).not.toBe(null);
  });
  //it('local import should exist', () => {
  //  expect(Header).not.toBe(null);
  //});
  it('should be 2', () => {
    let sum = 1 + 1;
    expect(sum).toBe(2);
  });
});