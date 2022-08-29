import '../index.css';

import { useEffect, useState } from 'react';
import Header from './Header';
import Grid from './Grid';
import Attempt from './Attempt';
import Input from './Input';
import Toast from './Toast';
import Guess from './Guess';
import characterArray from '../utils/charactersArray';
import { saveGuesses } from '../utils/saveLocal';
import getCurrentDate from '../utils/date';
import StatsModal from './StatsModal';
import TutorialModal from './TutorialModal';
import { api } from '../utils/Api';
import PlayAgainButton from './PlayAgainButton';
import { specialChars } from '@testing-library/user-event';

function App() {
  const randomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);
  const [characterId, setCharacterId] = useState(() => characterArray[randomNumber(1, characterArray.length)].id);
  const [tiles] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [openedTile, setOpenedTile] = useState([]);
  const [characterName, setCharacterName] = useState(() => characterArray.find((item) => (item.id === characterId)).name);
  const [guess, setGuess] = useState([]);
  const [result, setResult] = useState(null);
  const [statsModalActive, setStatsModalActive] = useState(false);
  const [isToastActive, setIsToastActive] = useState(false);
  const [tutorialModalActive, setTutorialModalActive] = useState(false);
  const [src, setSrc] = useState(null);
  const [currentGuess, setCurrentGuess] = useState('');

  useEffect(() => {
    setCharacterName(() => characterArray.find((item) => (item.id === characterId)).name);
    callApi();
  }, [characterId]);

  useEffect(() => {
    if (result === 'win') {
      endGame();
      return;
    }

    if (openedTile.length === tiles.length) {
      setResult('lose');
      endGame();
    }
  }, [openedTile]);

  function callApi() {
    return api.getCharacter(characterId)
      .then((res) => {
        setSrc(`${res.data.results[0].thumbnail.path}.${res.data.results[0].thumbnail.extension}`);
      });
  }

  function playAgain() {
    setOpenedTile([]);
    setGuess([]);
    setResult(null);
    setStatsModalActive(false);
    setIsToastActive(false);
    setCurrentGuess('');
    setCharacterId(() => characterArray[randomNumber(1, characterArray.length)].id);
  }

  function endGame() {
    saveGuesses(getCurrentDate(), guess, result);
    setIsToastActive(true);
    setTimeout(() => {
      setStatsModalActive(true);
    }, 2500);
  }

  function flipOneTile() {
    const tile = randomNumber(1, tiles.length);
    return openedTile.includes(tile) ? flipOneTile() : setOpenedTile([...openedTile, tile]);
  }

  function handleGuess(characterGuess) {
    setCurrentGuess({
      'label': characterGuess,
      'value': characterGuess
    });
    setGuess([...guess, characterGuess]);
    if (characterGuess === characterName) {
      setResult('win');
      setOpenedTile(tiles);
    } else {
      flipOneTile();
      if ((openedTile.length + 1) === tiles.length) {
        setResult('lose');
      }
    }
  }

  function closeModal() {
    setStatsModalActive(false);
    setTutorialModalActive(false);
  }

  return (
    <div className={`app ${(statsModalActive || tutorialModalActive) && 'app_type_menu-opened'}`}>
      <StatsModal
        statsModalActive={statsModalActive}
        closeModal={closeModal}
        playAgain={playAgain}
      />
      <TutorialModal
        tutorialModalActive={tutorialModalActive}
        closeModal={closeModal}
      />
      <Toast
        isToastActive={isToastActive}
        setIsToastActive={setIsToastActive}
        characterName={characterName}
        result={result}
      />
      <Header
        setStatsModalActive={setStatsModalActive}
        setTutorialModalActive={setTutorialModalActive}
      />
      <Grid
        characterId={characterId}
        tiles={tiles}
        openedTile={openedTile}
        src={src}
      />
      <Input
        handleGuess={handleGuess}
        result={result}
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
      />
      <Guess
        guess={guess}
        characterName={characterName}
      />
      <Attempt
        guess={guess}
      />
      <PlayAgainButton
        playAgain={playAgain}
        result={result}
      />
    </div>
  );
}

export default App;
