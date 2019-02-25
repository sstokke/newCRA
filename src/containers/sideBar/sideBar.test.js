import React from 'react';
import { shallow } from 'enzyme';
import SideBar from './sideBar.jsx';
import SideBarHeader from './sideBarHeader/sideBarHeader.jsx';
import SideBarItem from './sideBarItem/sideBarItem.jsx';
import SideBarFooter from './sideBarFooter/sideBarFooter.jsx';
import Subscriptions from '../subscriptions/subscriptions.jsx';

describe('renders components correctly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SideBar />);
  });

  it('renders the correct amount of items', () => {
    expect(wrapper.find(SideBarItem).length).toEqual(11);
  });

  it('renders subscriptions', () => {
    expect(wrapper.find(Subscriptions).length).toEqual(1);
  });

  it('renders the footer', () => {
    expect(wrapper.find(SideBarFooter).length).toEqual(1);
  });

  it('renders the correct amount of sideBarHeaders', () => {
    expect(wrapper.find(SideBarHeader).length).toEqual(3);
  })
});


// it('highlights the correct sideBarItem', () => {
//
// });
