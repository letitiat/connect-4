import { boardCols } from "const";
import { atom } from "recoil";
import { Board, Player, PlayerObject } from "types";
import { localStorageEffect } from "utils/localStorageEffect";

export const boardState = atom<Board>({
  key: "boardState",
  default: Array(boardCols).fill([]),
  effects: [
    localStorageEffect('boardState'),
  ]
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
  default: { id: 1, name: 'Blue', colour: 'blue.500' },
  effects: [
    localStorageEffect('player1State'),
  ]
});

export const player2State = atom<PlayerObject>({
  key: "player2State",
  default: { id: 2, name: 'Red', colour: 'red.500' },
  effects: [
    localStorageEffect('player2State'),
  ]
});