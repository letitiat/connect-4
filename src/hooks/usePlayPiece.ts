import { boardRows } from "const";
import { useRecoilState } from "recoil";
// Returns a tuple where the first element is the value of state and the
// second element is a setter function that will update the value of the
// given state when called.
import { boardState, gameOverState, playerState } from "state";
import { DiagonalSolver } from "utils/DiagonalSolver";

const testWin = (arr: number[]): boolean => /1{4}|2{4}/.test(arr.join(""));
// Checks for 4 '1's or 4 '2's in a row

const usePlayPiece = () => {
  const [board, setBoard] = useRecoilState(boardState);
  const [player, setPlayerTurn] = useRecoilState(playerState);
  const [gameOver, setGameOver] = useRecoilState(gameOverState);

  return (col: number) => {
    // Prevent adding a piece when the game is over
    if (gameOver) {
      return;
    }

    // Prevent adding a piece when the column is full
    if (board[col].length === boardRows) {
      return;
    }

    // Play piece (non mutating)
    const newBoard = board.map((column, i) =>
      i === col ? [...column, player] : column
    );

    const row = newBoard[col].length - 1;
    const diagonalSolver = new DiagonalSolver(newBoard);

    const {
      diagonalLeftArray,
      diagonalRightArray,
    } = diagonalSolver.getDiagonalArrays({
      col,
      row,
    });

    if (
      testWin(newBoard[col]) || // Did win vertically
      testWin(newBoard.map((col) => col[row] || 0)) || // Did win horizontally
      testWin(diagonalLeftArray) ||
      testWin(diagonalRightArray)
      // To win diagonally
      // TODO: Did win diagonally
    ) {
      setGameOver(true);
    } else {
      setPlayerTurn(player === 1 ? 2 : 1);
    }

    setBoard(newBoard);
  };
};

export default usePlayPiece;
