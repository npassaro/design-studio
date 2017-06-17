import React, { PropTypes, Component, Children } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import IconWithHiddenLinks from '../components/icon_with_hidden_links';

import { CrossIcon } from '../components/icons';

const renderLinks = () =>
  <div className="side_menu">
    <a href="/works">
      <div className="link">
        <CrossIcon />
        Work
      </div>
    </a>
    <a href="/projects">
      <div className="link">
        <CrossIcon />
        Projects
      </div>
    </a>
    <a href="/brands">
      <div className="link">
        <CrossIcon />
        Brands
      </div>
    </a>
    <a href="/studio">
      <div className="link">
        <CrossIcon /> Studio
      </div>
    </a>
  </div>;

const LinksList = ({ className, icon, links }) =>
  <IconWithHiddenLinks
    className={classnames('link-list', className)}
    links={renderLinks()}
    icon={icon}
  />;

LinksList.propTypes = {
  icon: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
};

LinksList.defaultProps = {
  className: '',
};


export default LinksList;
