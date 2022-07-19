import React from 'react';

function Tile({
  openedTile,
  id,
}) {
  console.log(openedTile);
  console.log(Array.isArray(openedTile));
  return (
    <div
      className={`grid__tile ${openedTile.includes(id) ? 'grid__tile_type_opened' : 'grid__tile_type_default'}`}>

    </div>
  );
}

export default Tile;
