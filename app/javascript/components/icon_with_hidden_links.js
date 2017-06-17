import React, { PropTypes, Component, Children } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

class IconWithHiddenLinks extends Component {
  state = {
    isOver: false,
  }

  onMouseEnter = () =>
    this.setState({ isOver: true });

  onMouseLeave = () =>
    this.setState({ isOver: false });

  renderLinks = () =>
    this.props.links;

  renderIcon = () =>
    Children.map(this.props.icon, child =>
      React.cloneElement(child, {
        className: classnames({ 'svg-hover': this.state.isOver }),
      }),
    );

  render() {
    return (
      <div
        className={classnames(this.props.className)}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.renderIcon()}
        <ReactCSSTransitionGroup
          transitionName="iconBox"
          transitionEnter
          transitionLeave
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {this.state.isOver ? this.renderLinks() : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

IconWithHiddenLinks.propTypes = {
  icon: PropTypes.node.isRequired,
  links: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
};

IconWithHiddenLinks.defaultProps = {
  className: '',
};


export default IconWithHiddenLinks;
