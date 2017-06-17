import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CircleIcon = ({ className }) =>
  <svg height="30" width="30" className={classNames(className, 'circleIcon')}>
    <circle cx="15" cy="15" r="11" stroke="#000" strokeWidth="1" fill="none" />
  </svg>;

CircleIcon.defaultProps = {
  className: [],
};
CircleIcon.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};

export default CircleIcon;
