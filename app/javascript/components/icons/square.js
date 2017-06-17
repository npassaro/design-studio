import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SquareIcon = ({ className }) =>
  <div>
    <svg width="30" height="30" className={classNames(className, 'squareIcon')}>
      <rect x="1" y="1" width="20" height="20" fill="none" strokeWidth="1" stroke="#000" />
    </svg>
  </div>;

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

export default SquareIcon;
