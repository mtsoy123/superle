import React from 'react';

function Toast({
  win,
  characterName,
  guesses,
}) {
  function emoji() {
    return (win && (guesses <= 10) ? `🎉 ${characterName} 🎉` : `😭 ${characterName} 😭`);
  }

  return (
    <div className={`toast ${(win || guesses === 9) && 'toast_type_visible'}`}>
      <div className="toast__text">
        {emoji()}
      </div>
    </div>
  );
}

export default Toast;
