import React from "react";

function Tile({ x, y, shot, isHit, onTileClick }) {
  return (
    <div className={`tile unguessed`} onClick={() => onTileClick(x, y)}>
      {shot && isHit && <img src="/assets/Hit.png" alt="hit" />}
      {shot && !isHit && <img src="/assets/Miss small.png" alt="hit" />}
    </div>
  );
}

export default Tile;
