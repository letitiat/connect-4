import { PlayerObject } from "./game";

export type SinglePlayerSelectorInput = {
    placeholder: string,
    player: PlayerObject
    updatePlayer: Function,
};

export type ColourSelectorInput = {
    updateColour: Function,
    defaultColour: string,
}