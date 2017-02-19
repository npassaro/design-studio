import React, { PropTypes, Component, Children } from 'react';
import classnames from 'classnames';

import { CrossIcon } from './icons';


class LinksList extends Component {
  state = {
    isOver: false,
  }

  onMouseEnter = () =>
    this.setState({ isOver: true });

  onMouseLeave = () =>
    this.setState({ isOver: false });

  renderLinks = () =>
    <div>
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

  renderIcon = () =>
    Children.map(this.props.icon, child =>
      React.cloneElement(child, {
        className: classnames({ 'svg-hover': this.state.isOver }),
      }),
    );

  render() {
    return (
      <div
        className={classnames('link-list', this.props.className)}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.renderIcon()}
        {this.state.isOver ? this.renderLinks() : null}
      </div>
    );
  }
}

LinksList.propTypes = {
  icon: PropTypes.node.isRequired,
};


export default LinksList;
