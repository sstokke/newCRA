import React, { Component } from 'react';
import HeaderNav from './containers/headerNav/headerNav.jsx';
import SideBar from './containers/sideBar/sideBar.jsx';
import Home from './containers/home/home.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <SideBar />
        <Home />
      </div>
    );
  }
}

export default App;
