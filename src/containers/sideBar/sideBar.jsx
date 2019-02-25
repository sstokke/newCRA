import React, {Component} from 'react';
import {Menu, Divider} from 'semantic-ui-react';
import SideBarItem from './sideBarItem/sideBarItem.jsx';
import SideBarHeader from './sideBarHeader/sideBarHeader.jsx';
import Subscriptions from '../subscriptions/subscriptions.jsx';
import SideBarFooter from './sideBarFooter/sideBarFooter.jsx';
import './sideBar.scss';

const dividerList = [
  "Followers", "Liked videos", "Movies and Shows", "Report history"
];

export class SideBar extends Component {
  constructor(props){
  super(props)
    this.state = {
      highlighted: "Home"
    }
  }
  render(){
    return(
      <Menu borderless vertical stackable fixed="left" className='side-nav'>
        <SideBarItem
          label={"Home"}
          icon={"home"}
          highlight={false}/>
        <SideBarItem
          label={"Trending"}
          icon={"fire"}
          highlight={false}/>
        <SideBarItem
          label={"Followers"}
          icon={"spy"}
          highlight={false}/>
          <Divider />
          <SideBarHeader title={"Library"} />
        <SideBarItem
          label={"History"}
          icon={"history"}
          highlight={false}/>
        <SideBarItem
          label={"Watch later"}
          icon={"clock"}
          highlight={false}/>
        <SideBarItem
          label={"Liked videos"}
          icon={"thumbs up"}
          highlight={false}/>
        <Divider />
        <SideBarHeader title={"Subscriptions"} />
        <Subscriptions />
        <Divider />
        <SideBarHeader title={"More from Youtube"} />
        <SideBarItem
          label={"Movies and Shows"}
          icon={"film"}
          highlight={false}/>
        <Divider />
        <SideBarItem
          label={"Settings"}
          icon={"cog"}
          highlight={false}/>
        <SideBarItem
          label={"Report history"}
          icon={"flag"}
          highlight={false}/>
        <SideBarItem
          label={"Help"}
          icon={"help"}
          highlight={false}/>
        <SideBarItem
          label={"Send feedback"}
          icon={"comment"}
          highlight={false}/>
        <Divider />
        <SideBarFooter />
      </Menu>
    )
  }
}

export default SideBar;
