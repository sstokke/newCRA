import React, {Component} from 'react';
import {Menu, Divider} from 'semantic-ui-react';
import SideBarItem from './sideBarItem/sideBarItem.jsx';
import SideBarItems from './sideBarItemsList.js';
import SideBarHeader from './sideBarHeader/sideBarHeader.jsx';

import './sideBar.scss';

const dividerList = [
  "Followers", "Liked videos", "Movies and Shows", "Report history"
];

const headers = [
  "Library", "More from Youtube",
];


export class SideBar extends Component {
  render(){
    return(
      <Menu borderless vertical stackable fixed="left" className='side-nav'>
        {SideBarItems.reduce((prev, item, index) => {
          let divider = dividerList.includes(item.label);
          prev.push(
            <SideBarItem label={item.label} icon={item.icon} highlight={index === 0} key={item.label}/>
          );
          if(divider){
            prev.push(<Divider key={index} />);
          }
          if(item.label === "Followers"){
            prev.push(
              <SideBarHeader title={"Library"} />
            )
          }
          if(item.label === "Liked videos"){
            prev.push(
              <SideBarHeader title={"More from Youtube"} />
            )
          }
          return prev;
        }, [])}
      </Menu>
    )
  }
}

export default SideBar;
