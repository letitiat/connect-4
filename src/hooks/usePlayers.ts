import { useRecoilValue } from "recoil";
import { playerState, player1State, player2State } from "state";

const usePlayers = () => {

    const player = useRecoilValue(playerState);
    const player1 = useRecoilValue(player1State);
    const player2 = useRecoilValue(player2State);

    const players = [
        player1,
        player2,
    ];

    const getPlayerById = (id: number) => {
        const player = players.find((p) => p.id === id);

        if (!player) {
            throw new TypeError('No player found!');
        }

        return player;
    }

    const getPlayerColour = (id: number) => {
        const player = players.find((p) => p.id === id);
        if (!player) {
            return 'gray.300';
        }

        return player.colour;
    }

    const currentPlayer = getPlayerById(player);

    return {
        player1,
        player2,
        players,
        getPlayerById,
        getPlayerColour,
        currentPlayer,
    }
};

export default usePlayers;
