import React, { PropTypes } from 'react';
import Piece from './piece';

const Pieces = ({ pieces }) =>
  <div className="row small-up-2 medium-up-3">
    {pieces.map(p => <Piece key={p.id} piece={p} />)}
  </div>;

Pieces.defaultProps = {
  pieces: [],
};

Pieces.propTypes = {
  pieces: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Pieces;
