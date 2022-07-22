import React from 'react';

function Toast({
  characterName,
  isToastActive,
  setIsToastActive,
  result,
}) {
  function setEmoji() {
    if (result === 'win') {
      return `🎉 ${characterName} 🎉`;
    }
    return `😭 ${characterName} 😭`;
  }

  function closeToast() {
    setIsToastActive(false);
  }

  return (
    <div className={`toast ${isToastActive && 'toast_type_visible'}`}>
      <div className="toast__text">
        {setEmoji()}
      </div>
      <div onClick={closeToast} className="toast__button-close"/>
    </div>
  );
}

export default Toast;
