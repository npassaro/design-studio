import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
// import ReactPerf from 'react-dom/lib/ReactPerf';
// import ReactTestUtils from 'react-dom/lib/ReactTestUtils';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class IconBox extends Component {
  state = {
    link: null,
    onHover: '',
  }

  handleMouseOver = () => {
    this.setState({
      link: this.props.link,
      onHover: 'hover',
    });
  }

  handleMouseLeave = () => {
    this.setState({
      link: null,
      onHover: '',
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        className: this.state.onHover,
      }),
    );

    return (
      <div
        className={classNames(this.props.className)}
        onMouseEnter={this.handleMouseOver}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        {childrenWithProps}
        <ReactCSSTransitionGroup
          transitionName="iconBox"
          transitionAppear
          transitionEnter
          transitionLeave
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {this.state.link}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

IconBox.defaultProps = {
  className: [],
};

IconBox.propTypes = {
  link: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};

export default IconBox;
