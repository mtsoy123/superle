import React from 'react';

function Attempt({ openedTile }) {
  return (
    <p className="attempt">Attempt {openedTile.length}/9</p>
  );
}

export default Attempt;
