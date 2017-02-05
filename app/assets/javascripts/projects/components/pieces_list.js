import React, { PropTypes } from 'react';

const PiecesList = ({ pieces }) => {
  const pieceList = pieces.map(p => <p key={p.id}>{p.name}</p>);
  return (<div>{pieceList}</div>);
};

PiecesList.defaultProps = {
  pieces: [],
};

PiecesList.propTypes = {
  pieces: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PiecesList;
