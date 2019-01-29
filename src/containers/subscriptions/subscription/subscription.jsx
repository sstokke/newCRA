import React from 'react';
import {Menu, Icon, Image} from 'semantic-ui-react';
import './subscription.scss';
const Item = Menu.Item;

const Subscription = (props) => {
  let rightElement;
  const {broadcasting, amountOfNewVideos} = props;
  if(broadcasting){
    rightElement = <Icon name='signal' className="rightElement-icon" />;
  } else if(amountOfNewVideos){
    rightElement = <span className='new-videos-count'>{amountOfNewVideos}</span>;
  }


  return (
    <Item>
      <div className="subscription">
        <div>
          <Image src="http://via.placeholder.com/28x28" avatar/>
          <span>{props.label}</span>
        </div>
        {rightElement}
      </div>
    </Item>
  )
}

export default Subscription;
