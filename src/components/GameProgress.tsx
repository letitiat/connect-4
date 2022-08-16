import { Heading } from "@chakra-ui/react";
import usePlayers from "hooks/usePlayers";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { gameOverState, } from "state";

const GameProgress: FC = () => {
  const gameOver = useRecoilValue(gameOverState);

  const {
    currentPlayer: { name },
  } = usePlayers();
  return (
    <Heading as="h3" size="lg">
      {gameOver ? `${name} wins! 🎉` : `${name}'s turn`}
    </Heading>
  );
};

export default GameProgress;
