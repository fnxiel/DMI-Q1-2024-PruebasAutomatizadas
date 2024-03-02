import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';
import { Calculadora } from '../src/compontents/Calculadora';


describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

describe('<Calculadora />', () => {
    it('has 1 child', () => {
      const tree = renderer.create(<Calculadora />).toJSON();
      expect(tree.children.length).toBe(2);
    });
  });