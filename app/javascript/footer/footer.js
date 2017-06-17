import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { CircleIcon, TriangleIcon } from '../components/icons';
import IconWithHiddenLinks from '../components/icon_with_hidden_links';

const Footer = () =>
  <div className="row medium-unstack align-bottom expanded content-footer">
    <div className="columns">
      <IconWithHiddenLinks
        icon={<CircleIcon />}
        links={<a href="/" className="link--circleBox">Contact & Newsletter</a>}
      />
    </div>
    <div className="columns align-right">
      <IconWithHiddenLinks
        icon={<TriangleIcon />}
        links={<a href="/" className="link--triangleBox">Shop</a>}
      />
    </div>
  </div>;

export default Footer;
