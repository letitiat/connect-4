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

const ColourSelector: FC<ColourSelectorInput> = ({
    updateColour,
    defaultColour,
}) => {
    const [color, setColor] = useState(defaultColour);

    const colors = [
        "green.500",
        "blue.800",
        "yellow.500",
        "orange.500",
        "purple.500",
        "green.300",
        "yellow.300",
        "teal.100",
        "cyan.800",
        "purple.300",
        "pink.300",
        "pink.800",
        "red.400",
        "gray.500",
        "orange.300"
    ];

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
                    aria-label={color}
                    background={color}
                    height="50px"
                    width="50px"
                    padding={0}
                    minWidth="unset"
                    borderRadius={50}
                ></Button>
            </PopoverTrigger>
            <PopoverContent width="170px">
                <PopoverBody>
                    <SimpleGrid columns={5} spacing={2}>
                        {colors.map((c) => {
                            const isDisabled = selectedColours.includes(c);
                            return (
                                <Button
                                    key={c}
                                    aria-label={c}
                                    background={c}
                                    className={`colour-button${isDisabled ? '-disabled' : ''}`}
                                    height="22px"
                                    width="22px"
                                    border={isDisabled ? 'solid 3px black' : ''}
                                    padding={0}
                                    minWidth="unset"
                                    borderRadius={50}
                                    _hover={{ background: c }}
                                    onClick={() => {
                                        updateColour(c);
                                        setColor(c);
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