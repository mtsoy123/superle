// import React from 'react';
import { React, useEffect, useState } from 'react';
import characterArray from '../utils/charactersArray';
import { api } from '../utils/Api';

function Character() {
  // eslint-disable-next-line max-len
  const [character] = useState(() => characterArray[Math.floor(Math.random() * (characterArray.length - 1 + 1)) + 1].id);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    api.getCharacter(character)
      .then((res) => {
        console.log(res);
        setSrc(`${res.data.results[0].thumbnail.path}.${res.data.results[0].thumbnail.extension}`);
      });
  }, []);

  return (
    <img src={src} className="character" alt="Marvel character"/>
  );
}

export default Character;
