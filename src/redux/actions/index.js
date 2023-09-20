export const FIRE_SHOT = "FIRE_SHOT";
export const UPDATE_GAME_STATUS = "UPDATE_GAME_STATUS";

export const fireShot = (x, y) => {
  return {
    type: FIRE_SHOT,
    payload: { x, y },
  };
};

export const updateGameStatus = (status) => {
  return {
    type: UPDATE_GAME_STATUS,
    payload: status,
  };
};
