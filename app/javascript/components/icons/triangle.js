import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TriangleIcon = ({ className }) =>
  <svg height="30" width="30" className={classNames(className, 'triangleIcon')}>
    <polygon points="13,3 26,26 3,26" strokeWidth="1" fill="none" stroke="#000" />
  </svg>;

TriangleIcon.defaultProps = {
  className: [],
};

TriangleIcon.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};

export default TriangleIcon;
