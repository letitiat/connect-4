import { boardCols } from "const";
import { atom } from "recoil";
import { Board, Player, PlayerObject } from "types";

export const boardState = atom<Board>({
  key: "boardState",
  default: Array(boardCols).fill([]),
});

export const playerState = atom<Player>({
  key: "playerState",
  default: 1,
});

export const gameOverState = atom<boolean>({
  key: "gameOverState",
  default: false,
});

export const player1State = atom<PlayerObject>({
  key: "player1State",
  default: { id: 1, name: 'Blue', colour: 'blue.500' }
});

export const player2State = atom<PlayerObject>({
  key: "player2State",
  default: { id: 2, name: 'Red', colour: 'red.500' }
});