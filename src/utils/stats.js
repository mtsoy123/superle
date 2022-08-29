import { loadAllGuesses } from './saveLocal';

function statsData() {
  const allGuesses = loadAllGuesses();

  const allGuessesEntries = Object.entries(allGuesses);
  const played = allGuessesEntries.length;
  const guessDistribution = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  let currentStreak = 0;
  let maxStreak = 0;

  allGuessesEntries.forEach((item) => {
    const result = item[1].result;
    if (result === 'win') {
      const winIndex = item[1].guesses.length;
      guessDistribution[winIndex] += 1;

      if (allGuessesEntries[allGuessesEntries.length - 1][1].result === 'win') {
        currentStreak += 1;
      } else {
        currentStreak = 1;
      }
    } else {
      currentStreak = 0;
    }
    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }
  });

  const winCount = Object.values(guessDistribution)
    .reduce((total, tries) => (total + tries));
  return {
    currentStreak,
    maxStreak,
    played,
    winRatio: Math.floor((winCount * 100) / (played || 1)),
    guessDistribution,
  };
}

export default statsData;
