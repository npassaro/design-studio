import React, { PropTypes } from 'react';

// TODO - http://foundation.zurb.com/sites/docs/card.html
const Piece = ({ piece }) => {
  const id = `${piece.type}-${piece.id}`;
  return (
    <div className="column">
      <div className="card" id={id}>
        <div className="card-divider">
          <div>{piece.name}</div>
        </div>
        <div className="card-section">
          <div>{piece.description}</div>
          <div><span>{piece.price}</span><span>{piece.currency}</span></div>
          <img alt={piece.name} src={piece.image_url} />
        </div>
      </div>
    </div>
  );
};

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
