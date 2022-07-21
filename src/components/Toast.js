import React from 'react';

function Toast({
  characterName,
  result,
}) {
  function emoji() {
    console.log(result);
    if (result === 'win') {
      return `🎉 ${characterName} 🎉`;
    }
    return `😭 ${characterName} 😭`;
  }

  return (
    <div className={`toast ${result && 'toast_type_visible'}`}>
      <div className="toast__text">
        {emoji()}
      </div>
    </div>
  );
}

export default Toast;
