import React from 'react';
import { mount, shallow } from 'enzyme';
import {Icon, Image} from 'semantic-ui-react';
import Subscription from './subscription.jsx';

const testCase1 = {
    label: "TestChannel",
    broadcasting: true,
    amountOfNewVideos: 3
}
const testCase2 = {
    label: "OtherTestChannel",
    broadcasting: false,
    amountOfNewVideos: 6
}

describe('subscription renders correctly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
        <Subscription {...testCase1}/>
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('renders subscription avatar', () => {
    expect(wrapper.find(Image).length).toEqual(1);
  });

  it('allows us to set props', () => {
    expect(wrapper.props().label).toEqual('TestChannel');
    wrapper.setProps({...testCase2});
    expect(wrapper.props().label).toEqual('OtherTestChannel');
  });

  it('renders the correct label', () => {
    expect(wrapper.find('.subscription-label').render().text()).toEqual('TestChannel');
  });

  it('renders the correct icon if brodcasting or video count if not', () => {
    expect(wrapper.find(Icon).length).toEqual(1);
    expect(wrapper.find('.new-videos-count').length).toEqual(0);
    wrapper.setProps({...testCase2});
    expect(wrapper.find(Icon).length).toEqual(0);
    expect(wrapper.find('.new-videos-count').render().text()).toEqual("6");
  });
});
