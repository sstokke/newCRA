import React from 'react';
import { Image } from 'semantic-ui-react';
import './videoPreview.scss';
import moment from 'moment';

const fakeProps = {
  imageUrl: "http://via.placeholder.com/210x118",
  videoLength: "9:21",
  videoTitle: "Cool video everyone will watch",
  channel: "Channel Name",
  views: "2.1M",
  datePosted: "1/3/19"
}

const VideoPreview = props => {
  const {imageUrl, videoLength, videoTitle, channel, views, datePosted} = fakeProps;

  return (
    <div className='video-preview'>
      <div className='thumbnail-container'>
        <Image src={imageUrl}/>
        <div className='time-label'>
          <span>{videoLength}</span>
        </div>
      </div>

      <div className='video-info'>
        <div className='semi-bold show-max-two-lines'>{videoTitle}</div>
        <div className='video-preview-metadata-container'>
          <div className='channel-title'>{channel}</div>
          <div>
            <span className="video-views">{views} views</span>
            <span> • </span>
            <span className="video-posted-date">2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPreview;
