export function loadAllGuesses() {
  const storedGuesses = localStorage.getItem('guesses');
  return storedGuesses != null ? JSON.parse(storedGuesses) : {};
}

export function saveGuesses(dayString, guesses, result) {
  const allGuesses = loadAllGuesses();
  localStorage.setItem(
    'guesses',
    JSON.stringify({
      ...allGuesses,
      [dayString]: {
        guesses,
        result,
      },
    }),
  );
}
