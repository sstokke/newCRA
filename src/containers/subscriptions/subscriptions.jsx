import React, {Component, Fragment} from 'react';
import {Divider} from 'semantic-ui-react';
import Subscription from './subscription/subscription.jsx';
import SideBarHeader from '../sideBar/sideBarHeader/sideBarHeader.jsx';
import subscriptionList from './subscriptionMockApi.js';

import './subscriptions.scss';


export class Subscriptions extends Component {
  render(){
    return(
      <Fragment>
        <SideBarHeader title="Subscriptions" />
        {subscriptionList.map(sub => {
          return(
            <Subscription
              key={sub.label}
              label={sub.label}
              amountOfNewVideos={sub.amountOfNewVideos}
              broadcasting={sub.broadcasting} />
          )
        })}
        <Divider />
      </Fragment>
    )
  }
}

export default Subscriptions;
