import React, { Component } from 'react';
import './home.scss';
import VideoPreview from '../../components/videoPreview/videoPreview.jsx';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <VideoPreview />
      </div>
    );
  }
}

export default Home;
