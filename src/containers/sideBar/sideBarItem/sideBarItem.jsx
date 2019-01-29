import React from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import './sideBarItem.scss';
const Item = Menu.Item;

const SideBarItem = (props) => {
  const highlight = props.highlight ? 'highlight-item' : 'sideBar-item';
  return (
    <Item className={highlight}>
      <div className='sideBar-item-alignment-container'>
        <span className='sideBar-span'>
          <Icon size="large" name={props.icon} className='sideBar-icon'/>
        </span>
        <span className='sideBar-span'>
          {props.label}
        </span>
      </div>
    </Item>
  )
}

export default SideBarItem;
