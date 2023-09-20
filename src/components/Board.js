import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fireShot, updateGameStatus } from "../redux/actions";
import Tile from "./Tile";

function Board() {
  const { shots, ships, gameStatus } = useSelector((state) => state);
  const dispatch = useDispatch();

  const checkGameOver = () => {
    const allShipPositions = ships.flatMap((ship) => ship.positions);
    const allShipsHit = allShipPositions.every((position) =>
      shots.some((shot) => shot.x === position[0] && shot.y === position[1])
    );
    if (allShipsHit) {
      dispatch(updateGameStatus("over"));
    }
  };

  const handleTileClick = (x, y) => {
    if (!shots.some((shot) => shot.x === x && shot.y === y)) {
      dispatch(fireShot(x, y));
      checkGameOver();
    }
  };

  const renderTiles = () => {
    let tiles = [];
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const shot = shots.find((shot) => shot.x === x && shot.y === y);
        const isHit = ships.some((ship) =>
          ship.positions.some((pos) => pos[0] === x && pos[1] === y)
        );
        tiles.push(
          <Tile
            key={`${x}-${y}`}
            x={x}
            y={y}
            shot={shot}
            isHit={isHit}
            onTileClick={handleTileClick}
          />
        );
      }
    }
    return tiles;
  };

  return (
    <>
      <div>
        <div className="score">
          {ships.map((ship) => {
            return (
              <div>
                <img src={`/assets/${ship.ship}.png`} alt={ship.ship} />
                <div className="result">
                  {new Array(ship.hit).fill().map((ship) => {
                    return <img src="/assets/Hit small.png" alt="hit" />;
                  })}
                  {new Array(ship.positions.length - ship.hit)
                    .fill()
                    .map((ship) => {
                      return <img src="/assets/Miss small.png" alt="miss" />;
                    })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="board">{renderTiles()}</div>
      </div>
      {gameStatus === "over" && (
        <div className="game-over">Game Over! You've sunk all ships!</div>
      )}
    </>
  );
}

export default Board;
