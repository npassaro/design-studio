import React, { PropTypes } from 'react';
import { CrossIcon } from './icons';

const LinksList = ({ actions }) =>
  <div className="link-list">
    <div
      className="link"
      onMouseEnter={() => actions.linkListMouseEnter('List of Works will be here shortly')}
      onMouseLeave={actions.linkListMouseLeave}
    >
      <CrossIcon />
      <a href="/works">Work</a>
    </div>
    <div
      className="link"
      onMouseEnter={() => actions.linkListMouseEnter('List of Projects will be here shortly')}
      onMouseLeave={actions.linkListMouseLeave}
    >
      <CrossIcon />
      <a href="/projects">Projects</a>
    </div>
    <div
      className="link"
      onMouseEnter={() => actions.linkListMouseEnter('List of Brands will be here shortly')}
      onMouseLeave={actions.linkListMouseLeave}
    >
      <CrossIcon />
      <a href="/brands">Brands</a>
    </div>
    <div
      className="link"
      onMouseEnter={() => actions.linkListMouseEnter('Studio presentation will be here shortly')}
      onMouseLeave={actions.linkListMouseLeave}
    >
      <CrossIcon />
      <a href="/studio">Studio</a>
    </div>
  </div>;

LinksList.propTypes = {
  actions: PropTypes.shape({
    linkListMouseLeave: PropTypes.func.isRequired,
    linkListMouseEnter: PropTypes.func.isRequired,
  }).isRequired,
};

export default LinksList;
