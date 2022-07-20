import React from 'react';
import Tile from './Tile';
import Character from './Character';

function Grid({
  characterId,
  tiles,
  openedTile,
}) {
  function renderTiles(tilesArr) {
    return tilesArr.map((item) => (<Tile key={item} id={item} openedTile={openedTile}/>));
  }

  return (
    <div className="grid">
      {renderTiles(tiles)}
      <Character
        characterId={characterId}
      />
    </div>
  );
}

export default Grid;
