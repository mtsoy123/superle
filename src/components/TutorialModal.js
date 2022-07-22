import React from 'react';
import Modal from './Modal';

function TutorialModal({
  tutorialModalActive,
  closeModal,
}) {
  return (
    <Modal
      active={tutorialModalActive}
      closeModal={closeModal}
    >
      <div className="modal__header-container">
        <h2 className="modal__header">
          Statistics
        </h2>
        <button onClick={closeModal} className="modal__button-close"/>
      </div>
      <p className="modal__body">Guess Marvel character in 9 guesses or less. With
        each attempt it will flip another tile revealing character. The game is easy, you'll learn
        quickly ;-)
      </p>
    </Modal>
  );
}

export default TutorialModal;
