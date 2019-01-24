import React, { Component } from 'react';
import HeaderNav from './containers/headerNav/headerNav.jsx';
import SideBar from './containers/sideBar/sideBar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <SideBar />

      </div>
    );
  }
}

export default App;
