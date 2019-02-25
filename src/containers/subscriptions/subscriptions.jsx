import React, {Component, Fragment} from 'react';
import {Divider} from 'semantic-ui-react';
import Subscription from './subscription/subscription.jsx';
import subscriptionList from './subscriptionMockApi.js';

import './subscriptions.scss';


export class Subscriptions extends Component {
  render(){
    return(
      <Fragment>
        {subscriptionList.map(sub => {
          return(
            <Subscription
              key={sub.label}
              label={sub.label}
              amountOfNewVideos={sub.amountOfNewVideos}
              broadcasting={sub.broadcasting} />
          )
        })}
      </Fragment>
    )
  }
}

export default Subscriptions;
