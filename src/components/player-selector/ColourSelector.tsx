import { useState, FC } from "react";
import {
    Popover,
    PopoverTrigger,
    Button,
    PopoverContent,
    PopoverBody,
    SimpleGrid,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { player1State, player2State, } from "state";
import { ColourSelectorInput } from "types/inputs";
import { colours } from "const";

const ColourSelector: FC<ColourSelectorInput> = ({
    updateColour,
    defaultColour,
}) => {

    // Get the list of colours we've already selected
    // so we can't re-select
    const selectedColours = [
        useRecoilValue(player1State).colour,
        useRecoilValue(player2State).colour,
    ];

    return (
        <Popover variant="picker">
            <PopoverTrigger>
                <Button
                    aria-label={defaultColour}
                    background={defaultColour}
                    height="40px"
                    width="40px"
                    padding={0}
                    minWidth="unset"
                    borderRadius={50}
                ></Button>
            </PopoverTrigger>
            <PopoverContent width="170px">
                <PopoverBody>
                    <SimpleGrid columns={5} spacing={2}>
                        {colours.map((c) => {
                            const isDisabled = selectedColours.includes(c);
                            return (
                                <Button
                                    key={c}
                                    aria-label={c}
                                    background={c}
                                    height="22px"
                                    width="22px"
                                    border={isDisabled ? 'solid 3px black' : ''}
                                    padding={0}
                                    minWidth="unset"
                                    borderRadius={50}
                                    _hover={{ background: c }}
                                    onClick={() => {
                                        // sets colour for player x
                                        updateColour(c);
                                    }}
                                    disabled={isDisabled}
                                ></Button>
                            )
                        })}
                    </SimpleGrid>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}

export default ColourSelector;