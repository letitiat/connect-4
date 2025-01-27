import { ChakraProvider, Container, VStack } from "@chakra-ui/react";
import Board from "components/Board";
import GameControls from "components/GameControls";
import GameProgress from "components/GameProgress";
import { FC } from "react";
import { RecoilRoot } from "recoil";
import PlayerSelectorModal from "./player-selector/PlayerSelectorModal";

const App: FC = () => (
  <ChakraProvider>
    <RecoilRoot>
      <Container py={4} as={VStack}>
        <PlayerSelectorModal />
        <Board />
        <GameProgress />
        <GameControls />
      </Container>
    </RecoilRoot>
  </ChakraProvider>
);

export default App;
