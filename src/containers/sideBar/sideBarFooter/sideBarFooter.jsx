import React, {Fragment} from 'react';
import './sideBarFooter.scss';

const SideBarFooter = () => {
  return (
    <Fragment>
      <div className='footer-section'>
        <div>About Press Copyright</div>
        <div>Creators Advertise</div>
        <div>Developers +MyTube</div>
        <div>Legal</div>
      </div>
      <div className='footer-section'>
        <div>Terms Privacy</div>
        <div>Policy & Safety</div>
        <div>Test new features</div>
      </div>
      <div className='footer-section'>
        <div>A Youtube clone testing out new React features</div>
      </div>
    </Fragment>
  );
}

export default SideBarFooter;
