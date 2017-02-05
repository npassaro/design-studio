import React, { PropTypes } from 'react';
import classNames from 'classnames';

export const SquareIcon = ({ className }) =>
  <svg width="30" height="30" className={classNames(className, 'squareIcon')}>
    <rect x="1" y="1" width="20" height="20" fill="none" strokeWidth="1" stroke="#000" />
  </svg>;

export const CrossIcon = () =>
  <svg height="30" width="30" viewBox="0 0 50 50">
    <line fill="none" stroke="#000000" x1="0" y1="20" x2="40" y2="20" />
    <line fill="none" stroke="#000000" x1="20" y1="0" x2="20" y2="40" />
  </svg>;

export const TriangleIcon = ({ className }) =>
  <svg height="30" width="30" className={classNames(className, 'triangleIcon')}>
    <polygon points="12,1 24,24 1,24" strokeWidth="1" fill="none" stroke="#000" />
  </svg>;

export const CircleIcon = ({ className }) =>
  <svg height="30" width="30" className={classNames(className, 'circleIcon')}>
    <circle cx="15" cy="15" r="11" stroke="#000" strokeWidth="1" fill="none" />
  </svg>;

SquareIcon.defaultProps = {
  className: [],
};

SquareIcon.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};

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
