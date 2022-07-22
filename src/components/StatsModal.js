import React from 'react';
import Modal from './Modal';
import statsData from '../utils/stats';

function StatsModal({
  statsModalActive,
  closeModal,
}) {
  const {
    currentStreak,
    maxStreak,
    played,
    winRatio,
    guessDistribution,
  } = statsData();

  const maxDistribution = Math.max(...Object.values(guessDistribution));

  function renderGraph(distribution) {
    return Object.entries(distribution)
      .map(([index, count]) => (
        <div className="stats-modal__guess-container" key={index}>
          <div className="stats-modal__guesses">
            {index}
          </div>
          <div className="stats-modal__guesses-amount">
            {count}
          </div>
          <div className="stats-modal__guess-graph"
               style={{
                 flex: `0 1 ${(Math.round((count / maxDistribution) * 100))}%`,
               }}/>
        </div>
      ));
  }

  return (
    <Modal
      active={statsModalActive}
      closeModal={closeModal}
    >
      <div className="stats-modal">
        <div className="modal__header-container">
          <h2 className="modal__header">
            Statistics
          </h2>
          <button onClick={closeModal} className="modal__button-close"/>
        </div>
        <ul className="stats-modal__statistics-container">
          <li className="modal__body">
            <div className="stats-modal__result">
              {winRatio}
            </div>
            Win %
          </li>
          <li className="modal__body">
            <div className="stats-modal__result">
              {played}
            </div>
            Played
          </li>
          <li className="modal__body">
            <div className="stats-modal__result">
              {currentStreak}
            </div>
            Streak
          </li>
          <li className="modal__body">
            <div className="stats-modal__result">
              {maxStreak}
            </div>
            Max streak
          </li>
        </ul>
        <div className="modal__header-container">
          <h2 className="modal__header">
            Guess Distribution
          </h2>
        </div>
        {renderGraph(guessDistribution)}
        <button className="stats-modal__button">
          Play Again
        </button>
      </div>
    </Modal>
  );
}

export default StatsModal;
