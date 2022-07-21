import { loadAllGuesses } from './saveLocal';
import currentDate from './date';

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
  let previousDate = null;
  for (const [dayString, guesses] of allGuessesEntries) {
    // const trueDayString = dayString.substr(0, dayString.length - 2);
    // const currentDate = DateTime.fromFormat(trueDayString, "yyyy-MM-dd");
    // currentDate
    const winIndex = guesses.findIndex((guess) => guess.result === 'win');
    const won = winIndex >= 0;

    if (won) {
      const tryCount = winIndex + 1;
      guessDistribution[tryCount]++;
// refactor following
      if (
        allGuesses[allGuesses.length + 1].result === 'win'
      ) {
        currentStreak++;
      } else {
        currentStreak = 1;
      }
    } else {
      currentStreak = 0;
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }
    previousDate = currentDate;
  }

  const winCount = Object.values(guessDistribution)
    .reduce(
      (total, tries) => total + tries
    );

  return {
    currentStreak: currentStreak,
    maxStreak: maxStreak,
    played,
    winRatio: winCount / (played || 1),
    guessDistribution: guessDistribution,
  };

}

export default statsData();
