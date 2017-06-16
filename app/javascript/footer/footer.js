import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { CircleIcon, TriangleIcon } from '../components/icons';

const Footer = () =>
  <div className="row medium-unstack align-bottom expanded content-footer">
    <div className="columns">
      <CircleIcon />
      <ReactCSSTransitionGroup
        transitionName="iconBox"
        transitionEnter
        transitionLeave
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
      >
        <a href="/" className="link--circleBox">Contact & Newsletter</a>
      </ReactCSSTransitionGroup>
    </div>
    <div className="columns align-right">
      <a href="/" className="link--triangleBox">Shop</a>
      <TriangleIcon />
    </div>
  </div>;

export default Footer;
