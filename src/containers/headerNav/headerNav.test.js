import React from 'react';
import { shallow } from 'enzyme';
import HeaderNav from './headerNav.jsx';

describe('renders components correctly', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<HeaderNav />);
  });

  it('renders the logo', () => {
    expect(wrapped.find('.logo').length).toEqual(1);
  });

  it('renders 4 icons', () => {
    expect(wrapped.find('.header-icon').length).toEqual(4);
  });

  it('renders the logo', () => {
    expect(wrapped.find('.avatar').length).toEqual(1);
  });

});
