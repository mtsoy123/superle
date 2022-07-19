import React from 'react';
import Tile from './Tile';
import Character from './Character';

function Grid() {
  return (
    <div className="grid">
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Character
        // character={character}
      />
    </div>
  );
}

export default Grid;
