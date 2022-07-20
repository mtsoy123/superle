import '../index.css';

import { useState } from 'react';
import Header from './Header';
import Grid from './Grid';
import Attempt from './Attempt';
import Input from './Input';
import Toast from './Toast';
import Guess from './Guess';
import characterArray from '../utils/charactersArray';

function App() {
  const randomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

  // eslint-disable-next-line max-len
  const [characterId] = useState(() => characterArray[randomNumber(1, characterArray.length)].id);
  const [tiles] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [openedTile, setOpenedTile] = useState([]);
  const characterName = characterArray.find((item) => (item.id === characterId)).name;
  const [guess, setGuess] = useState([]);
  const [win, setWin] = useState(false);
  const [guesses, setGuesses] = useState(0);

  function flipOneTile() {
    const tile = randomNumber(1, tiles.length);
    // eslint-disable-next-line max-len
    return (openedTile.includes(tile) ? flipOneTile(tile) : setOpenedTile([...openedTile, tile]));
  }

  function handleGuess(characterGuess) {
    setGuess([...guess, characterGuess]);
    setGuesses(guesses + 1);
    if (characterGuess === characterName) {
      setWin(true);
      setOpenedTile(tiles);
    } else {
      flipOneTile();
    }
  }

  return (
    <div className="app">
      <Toast
        win={win}
        characterName={characterName}
        guesses={guesses}
      />
      <Header/>
      <Grid
        characterId={characterId}
        tiles={tiles}
        openedTile={openedTile}
      />
      <Input
        handleGuess={handleGuess}
        win={win}
        openedTile={openedTile}
      />
      <Guess
        guess={guess}
        characterName={characterName}
      />
      <Attempt
        guesses={guesses}
      />
    </div>
  );
}

export default App;
