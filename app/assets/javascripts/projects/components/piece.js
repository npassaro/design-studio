import React, { PropTypes } from 'react';

const Piece = ({ piece }) =>
  <div key={piece.id}>
    <div>{piece.name}</div>
    <div>{piece.description}</div>
    <div><span>{piece.price}</span><span>{piece.currency}</span></div>
    <img alt={piece.name} src={piece.image_url} />
  </div>;

Piece.defaultProps = {
  piece: [],
};

Piece.propTypes = {
  piece: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    type: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Piece;
