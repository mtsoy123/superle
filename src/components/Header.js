import React from 'react';

function Header() {
  return (
    <div className="header">
      <button className="header__button header__button_type_help">
      </button>
      <img className="header__logo" alt="Logo"/>
      <button className="header__button header__button_type_settings">
      </button>
    </div>
  );
}

export default Header;
