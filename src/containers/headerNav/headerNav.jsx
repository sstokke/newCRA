import React, {Component} from 'react';
import {Image, Menu, Form, Icon} from 'semantic-ui-react';
import './headerNav.scss';
import logo from '../../assets/images/logo.jpg';

const { Item } = Menu;
const { Field, Input } = Form;

export class HeaderNav extends Component {
  render(){
    return(
      <Menu borderless className='top-menu' fixed='top'>
        <Item header className='logo'>
            <Image src={logo} size='tiny'/>
        </Item>
        <Menu.Menu className='nav-container'>
        <Item className='search-input'>
          <Form className="nav-search">
            <Field>
              <Input placeholder='Search'
                     size='small'
                     action='Go'
              />
            </Field>
          </Form>
          </Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Item>
            <Icon className='header-icon' name="video camera" size='large'/>
          </Item>
          <Item>
            <Icon className='header-icon' name="grid layout" size='large'/>
          </Item>
          <Item>
            <Icon className='header-icon' name="chat" size='large'/>
          </Item>
          <Item>
            <Icon className='header-icon' name="alarm" size='large'/>
          </Item>
          <Item name="avatar">
            <Image src="https://scontent-dfw5-1.cdninstagram.com/vp/4aac49d1781fb961a6f0f215009fd6ad/5CBB6DC0/t51.2885-19/10358370_756716074379034_775093134_a.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com" avatar />
          </Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default HeaderNav;
