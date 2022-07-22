import React from 'react';

function PlayAgainButton({
  playAgain,
  result,
}) {
  return (
    <button className={`play-again-button ${result === null && 'play-again-button_hidden'}`}
            onClick={playAgain}>
      Play Again
    </button>
  );
}

export default PlayAgainButton;
