import { React } from 'react';

// import { api } from '../utils/Api';

function Character({ src }) {
  return (
    <img src={src} className="character" alt="Marvel character"/>
  );
}

export default Character;
