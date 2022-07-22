import React from 'react';
import logo from '../images/logo.svg';

function Header({
  setStatsModalActive,
  setTutorialModalActive,
}) {
  return (
    <div className="header">
      <button onClick={() => setTutorialModalActive(true)}
              className="header__button header__button_type_help">
      </button>
      {/* <img className="header__logo" src="<%=require('../images/logo.svg')%>" alt="Logo"/> */}
      <img className="header__logo" src={logo} alt="Logo"/>
      <button
        className="header__button header__button_type_settings"
        onClick={() => setStatsModalActive(true)}>
      </button>
    </div>
  );
}

export default Header;
