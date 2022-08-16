import { PlayerObject } from "./game";

// equivalent of PropTypes.Shape (kinda)
export type SinglePlayerSelectorInput = {
    placeholder: string,
    player: PlayerObject
    updatePlayer: Function,
};

export type ColourSelectorInput = {
    updateColour: Function,
    defaultColour: string,
}