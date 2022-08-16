import {
    Flex,
    Spacer,
} from "@chakra-ui/react";
import { FC } from "react";
import { useRecoilState } from "recoil";
import { player1State, player2State, } from "state";
import SinglePlayerSelector from "./SinglePlayerSelector";

const PlayerSelector: FC = () => {

    const [player1, setPlayer1] = useRecoilState(player1State);
    const [player2, setPlayer2] = useRecoilState(player2State);

    return (

        <Flex justify="spaceBetween">
            <SinglePlayerSelector
                placeholder="Paul Chuckle"
                player={player1}
                updatePlayer={setPlayer1}
            />
            <Spacer />
            <SinglePlayerSelector
                placeholder="Barry Chuckle"
                player={player2}
                updatePlayer={setPlayer2}
            />
        </Flex>
    );
};

export default PlayerSelector;
