// import React from 'react';
import { React, useEffect, useState } from 'react';
// import characterArray from '../utils/charactersArray';
import { api } from '../utils/Api';

function Character({ characterId }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    api.getCharacter(characterId)
      .then((res) => {
        setSrc(`${res.data.results[0].thumbnail.path}.${res.data.results[0].thumbnail.extension}`);
      });
  }, []);

  return (
    <img src={src} className="character" alt="Marvel character"/>
  );
}

export default Character;
