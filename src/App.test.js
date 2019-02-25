import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import SideBar from './containers/sideBar/sideBar.jsx';
import HeaderNav from './containers/headerNav/headerNav';
import Home from './containers/home/home.jsx';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('renders components correctly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders a header', () => {
    expect(wrapper.find(HeaderNav).length).toEqual(1);
  });

  it('renders a sidebar', () => {
    expect(wrapper.find(SideBar).length).toEqual(1);
  });

  it('renders the home container', () => {
    expect(wrapper.find(Home).length).toEqual(1);
  })
});
