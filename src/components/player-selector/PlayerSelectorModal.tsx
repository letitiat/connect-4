import {
    Container,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    Button,
    PopoverBody,
} from "@chakra-ui/react";
import { FC } from "react";
import PlayerSelector from "./PlayerSelector";

const PlayerSelectorModal: FC = () => {

    return (
        <Container centerContent>
            <Popover>
                <PopoverTrigger>
                    <Button>Enter your player information!</Button>
                </PopoverTrigger>
                <PopoverContent width="800px">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Who are you?</PopoverHeader>
                    <PopoverBody>
                        <PlayerSelector />
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Container>
    );
};

export default PlayerSelectorModal;
