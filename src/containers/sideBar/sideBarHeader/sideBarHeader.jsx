import React from 'react';
import {Menu} from 'semantic-ui-react';
import './sideBarHeader.scss';
const {Item, Header} = Menu;


const SideBarHeader = (props) => {
  const heading = props.title ? props.title.toUpperCase() : '';
  return (
    <Item >
      <Header className='side-bar-header'>{heading}</Header>
    </Item>
  )
}

export default SideBarHeader;
