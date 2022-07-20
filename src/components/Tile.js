import React from 'react';

function Tile({
  openedTile,
  id,
}) {
  return (
    <div
      className={`grid__tile ${openedTile.includes(id) ? 'grid__tile_type_opened' : 'grid__tile_type_default'}`}>

    </div>
  );
}

export default Tile;
