import { React } from 'react';

function Character({ src }) {
  return (
    <img src={src} className="character" alt="Marvel character"/>
  );
}

export default Character;
