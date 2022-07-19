import '../index.css';

import { useState } from 'react';
import Header from './Header';
import Grid from './Grid';
import Input from './Input';
import Attempt from './Attempt';
import Toast from './Toast';
import Guess from './Guess';
import characterArray from '../utils/charactersArray';
// import characterIdArray from '../utils/characterIdsArray';
// import { api } from '../utils/Api';

function App() {
  const randomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

  // eslint-disable-next-line max-len
  const [characterId] = useState(() => characterArray[randomNumber(1, characterArray.length)].id);
  // const [win, setWin] = useState(false);
  const [tiles] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [openedTile, setOpenedTile] = useState([]);

  /*   function win() {
      flipTile(all);
    } */

  function flipOneTile() {
    const tile = randomNumber(1, tiles.length);
    // eslint-disable-next-line max-len
    return (openedTile.includes(tile) ? flipOneTile(tile) : setOpenedTile([...openedTile, tile]));
  }

  function handleGuess(guess) {
    console.log(characterId);
    if (guess === characterId) {
      setOpenedTile([tiles]);
    } else {
      flipOneTile();
    }
  }

  return (
    <div className="app">
      <Toast/>
      <Header/>
      <Grid
        characterId={characterId}
        // fliptile={fliptile}
        // win={win}
        tiles={tiles}
        openedTile={openedTile}
      />
      <Input
        handleGuess={handleGuess}
      />
      <Guess/>
      <Attempt/>
    </div>
  );
}

export default App;
