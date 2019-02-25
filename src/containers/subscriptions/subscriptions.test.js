import React from 'react';
import { shallow } from 'enzyme';
import Subscriptions from './subscriptions.jsx';
import Subscription from './subscription/subscription.jsx';
import subscriptionList from './subscriptionMockApi.js';

it('renders one instance of a subscription per actual subsctiption', () => {
    const wrapper = shallow(<Subscriptions />);
    let subs = subscriptionList.length;
    expect(wrapper.find(Subscription).length).toEqual(subs);
});
