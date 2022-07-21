import '../index.css';

import { useEffect, useState } from 'react';
import Header from './Header';
import Grid from './Grid';
import Attempt from './Attempt';
import Input from './Input';
import Toast from './Toast';
import Guess from './Guess';
import characterArray from '../utils/charactersArray';
import { saveGuesses } from './saveLocal';
import currentDate from './date';

function App() {
  const randomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

  // eslint-disable-next-line max-len
  const [characterId] = useState(() => characterArray[randomNumber(1, characterArray.length)].id);
  const [tiles] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [openedTile, setOpenedTile] = useState([]);
  const characterName = characterArray.find((item) => (item.id === characterId)).name;
  const [guess, setGuess] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (result === 'win') {
      saveGuesses(currentDate, guess, result);
      return;
    }

    if (openedTile.length === tiles.length) {
      setResult('lose');
      saveGuesses(currentDate, guess, result);
    }
  }, [openedTile]);

  function flipOneTile() {
    const tile = randomNumber(1, tiles.length);
    // eslint-disable-next-line max-len
    if (openedTile.includes(tile)) {
      console.log(12);
      flipOneTile();
    } else {
      setOpenedTile([...openedTile, tile]);
    }
  }

  function handleGuess(characterGuess) {
    setGuess([...guess, characterGuess]);
    if (characterGuess === characterName) {
      setResult('win');
      setOpenedTile(tiles);
      // saveGuesses(currentDate, guess);
    } else {
      flipOneTile();
    }
  }

  /*
      function final() {

      }
    */

  return (
    <div className="app">
      <Toast
        result={result}
        characterName={characterName}
        guess={guess}
      />
      <Header/>
      <Grid
        characterId={characterId}
        tiles={tiles}
        openedTile={openedTile}
      />
      <Input
        handleGuess={handleGuess}
        result={result}
        openedTile={openedTile}
      />
      <Guess
        guess={guess}
        characterName={characterName}
      />
      <Attempt
        guess={guess}
      />
    </div>
  );
}

export default App;
