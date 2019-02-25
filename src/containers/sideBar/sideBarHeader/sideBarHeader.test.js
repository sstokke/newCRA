import React from 'react';
import {shallow} from 'enzyme';
import {Menu} from 'semantic-ui-react';
import SideBarHeader from './sideBarHeader.jsx';

const {Item, Header} = Menu;

it('renders title if available and capitalizes it', () => {
  const wrapper = shallow(<SideBarHeader title="Sample Title"/>)
  expect(wrapper.find(Header).render().text()).toEqual("SAMPLE TITLE");
});
