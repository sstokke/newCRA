import React from 'react';
import { shallow } from 'enzyme';
import {Image} from 'semantic-ui-react';
import VideoPreview from './videoPreview.jsx';
import moment from 'moment';

const videoProps = {
  imageUrl: "http://via.placeholder.com/210x118",
  videoLength: "9:21",
  videoTitle: "Cool video everyone will watch",
  channel: "Channel Name",
  views: 2,
  datePosted: "Sunday, February 20th 2017, 3:45:50 pm"
}

describe('renders video preview components correctly', () => {
  const wrapper = shallow(<VideoPreview {...videoProps}/>);

  it('renders thumbnail preview of video', () => {
    expect(wrapper.find(Image).length).toEqual(1);
    expect(wrapper.find(Image).prop("src")).toEqual("http://via.placeholder.com/210x118");
  });

  it('renders duration of video over thumbnail', () => {
    expect(wrapper.find('.thumbnail-container').render().text()).toEqual("9.21");
  });

  it('renders video title, channel name, and attributes', () => {
    expect(wrapper.find('.video-title').render().text()).toEqual("Cool video everyone will watch");
    expect(wrapper.find('.channel-title').render().text()).toEqual("Channel Name");
    expect(wrapper.find('.video-views').render().text()).toEqual("1");
  });

  it('converts the date to show how long ago video was posted in minutes, hour, days, months or years', () => {
    const fakeNow = "Sunday, February 19th 2017, 3:25:50 pm";
    
  });

});
