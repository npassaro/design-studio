import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { CircleIcon, TriangleIcon } from '../components/icons';
import IconWithHiddenLinks from '../components/icon_with_hidden_links';

const Footer = () =>
  <div className="footer-element footer-container">
      <IconWithHiddenLinks
        className="footer-element footer-contacts"
        icon={<CircleIcon />}
        links={<a href="/" className="link--circleBox">Contact & Newsletter</a>}
      />
      <IconWithHiddenLinks
        className="footer-element footer-shop"
        icon={<TriangleIcon />}
        links={<a href="/" className="link--triangleBox">Shop</a>}
      />

  </div>;

export default Footer;
