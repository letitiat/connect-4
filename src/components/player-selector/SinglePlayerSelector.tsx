import {
    Input,
    Box,
    Heading
} from "@chakra-ui/react";
import { FC } from "react";
import ColourSelector from "components/player-selector/ColourSelector";
import { SinglePlayerSelectorInput } from "types/inputs";

const SinglePlayerSelector: FC<SinglePlayerSelectorInput> = ({
    placeholder,
    player: { id, name, colour },
    updatePlayer,
}) => {

    // Updates the name in the player X state 
    const updatePlayerName = (name: string) => {
        updatePlayer((p: SinglePlayerSelectorInput) => ({
            ...p,
            name,
        }));
    };

    // Updates the colour in the player X state 
    const updatePlayerColour = (colour: string) => {
        updatePlayer((p: SinglePlayerSelectorInput) => ({
            ...p,
            colour,
        }));
    };

    return (
        <Box display='flex' mt='2' flexDirection='column' alignItems='center'>
            <Heading as="h4" size='md' mb={1}>Player {id}: {name}</Heading>
            <Heading as="h4" size='xs' mb={2}>Enter your name, and pick your favourite colour.</Heading>
            <Input
                mb={4}
                placeholder={placeholder}
                onChange={(e) => updatePlayerName(e.target.value)}
                value={name}
            />
            <ColourSelector
                updateColour={updatePlayerColour}
                defaultColour={colour}
            />
        </Box>
    );
};

export default SinglePlayerSelector;
