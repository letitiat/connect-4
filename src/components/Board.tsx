import { Circle, Flex } from "@chakra-ui/react";
import { boardRows } from "const";
import { usePlayPiece } from "hooks";
import usePlayers from "hooks/usePlayers";
import { FC } from "react";
// Returns the value of the given Recoil state.
// This hook will subscribe the component to
// re-render if there are changes in the Recoil state.
import { useRecoilValue } from "recoil";
import { boardState, gameOverState } from "state";

const padCol = (col: number[]): number[] =>
  col.join("").padEnd(boardRows, "0").split("").map(Number);

const Board: FC = () => {
  const play = usePlayPiece();
  const board = useRecoilValue(boardState);
  const gameOver = useRecoilValue(gameOverState);

  const {
    currentPlayer: { colour },
    getPlayerColour,
  } = usePlayers();

  return (
    <Flex justify="center">
      {board.map((col, i) => (
        <Flex
          key={i}
          role="group"
          onClick={() => play(i)}
          flexDirection="column-reverse"
          cursor={gameOver ? "auto" : "pointer"}
        >
          {padCol(col).map((p, j) => (
            <Circle
              m={1}
              size="40px"
              key={`${i}-${j}`}
              boxShadow="inner"
              bg={getPlayerColour(p)}
            />
          ))}
          <Circle
            m={1}
            size="40px"
            boxShadow="base"
            visibility="hidden"
            bg={colour}
            _groupHover={{
              visibility: gameOver ? "hidden" : "visible",
            }}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default Board;
