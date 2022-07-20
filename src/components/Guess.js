import React from 'react';

function Guess({
  guess,
  characterName,
}) {
  return (
    <ul className="guess-container">
      {guess.map((item, i) => (
        <li className="guess-container__guess" key={i}>
          <div
            className={`guess-container__guess guess-container__guess_type_${item === characterName ? 'correct' : 'incorrect'}`}/>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Guess;
