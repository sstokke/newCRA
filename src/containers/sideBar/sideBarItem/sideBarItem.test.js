import React from 'react';
import {shallow} from 'enzyme';
import {Menu, Icon} from 'semantic-ui-react';
import SideBarItem from './sideBarItem.jsx';

const {Item} = Menu;

const itemProps = {
    label: "Home",
    icon: "home",
    highlight: false,
}

describe('SideBarItem', () => {
  const wrapper = shallow(<SideBarItem {...itemProps} />)

  it('renders icon and label', () => {
    expect(wrapper.find(Icon).length).toEqual(1);
    expect(wrapper.find('.sideBar-span').length).toEqual(2);
  });

  it('highlights item appropriately', () => {
    expect(wrapper.find('.sideBar-item').length).toEqual(1);
    expect(wrapper.find('.highlight-item').length).toEqual(0);
    wrapper.setProps({highlight: true});
    expect(wrapper.find('.sideBar-item').length).toEqual(0);
    expect(wrapper.find('.highlight-item').length).toEqual(1);
  });
});
