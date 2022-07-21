import React from 'react';

function Attempt({ guess }) {
  return (
    <p className="attempt">Attempt {guess.length}/9</p>
  );
}

export default Attempt;
