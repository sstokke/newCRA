import React from 'react';
import {shallow} from 'enzyme';
import {Menu} from 'semantic-ui-react';
import SideBarFooter from './sideBarFooter.jsx';

const {Item, Header} = Menu;

it('renders 3 sections', () => {
  const wrapper = shallow(<SideBarFooter />);
  expect(wrapper.find('.footer-section').length).toEqual(3);
});
