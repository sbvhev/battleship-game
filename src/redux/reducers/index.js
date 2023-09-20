import { FIRE_SHOT, UPDATE_GAME_STATUS } from "../actions";

const initialState = {
  shots: [],
  ships: [
    {
      ship: "carrier",
      positions: [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
        [6, 9],
      ],
      status: "miss",
      hit: 0,
    },
    {
      ship: "battleship",
      positions: [
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
      ],
      status: "miss",
      hit: 0,
    },
    {
      ship: "cruiser",
      positions: [
        [8, 1],
        [8, 2],
        [8, 3],
      ],
      status: "miss",
      hit: 0,
    },
    {
      ship: "submarine",
      positions: [
        [3, 0],
        [3, 1],
        [3, 2],
      ],
      status: "miss",
      hit: 0,
    },
    {
      ship: "destroyer",
      positions: [
        [0, 0],
        [1, 0],
      ],
      status: "miss",
      hit: 0,
    },
  ],
  gameStatus: "ongoing",
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRE_SHOT:
      const updatedShips = state.ships.map((ship) => {
        if (
          ship.positions.some(
            (pos) => pos[0] === action.payload.x && pos[1] === action.payload.y
          )
        ) {
          return { ...ship, status: "hit", hit: ship.hit + 1 };
        }

        return ship;
      });

      return {
        ...state,
        shots: [...state.shots, action.payload],
        ships: updatedShips,
      };
    case UPDATE_GAME_STATUS:
      return {
        ...state,
        gameStatus: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
