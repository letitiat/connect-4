interface DiagonalInput {
    col: number,
    row: number,
}

class DiagonalSolver {
    board: number[][];
    colCount: number;
    maxX: number;
    maxY: number;

    constructor(newBoard: number[][]) {
        this.board = newBoard;
        this.colCount = this.board.length;
        this.maxX = this.colCount - 1;
        this.maxY = 5;
    }

    /**
     * Checks if the x/y coords are on the board
     *
     * @param {number} x The 'x' coordinate
     * @param {number} y The 'y' coordinate
     * @return {boolean} is the coordinate on the board
     */
    getIsValid = (x: number, y: number) => x >= 0 &&
        y >= 0 &&
        x <= this.maxX &&
        y <= this.maxY;

    /**
     * 
     * @param {number} x The 'x' coordinate
     * @param {number} y The 'y' coordinate
     * @returns Either the value from the board (1, 2), or 0 if nothing is there
     */
    getBoardValue = (x: number, y: number) => {
        if (this.getIsValid(x, y)) {
            return this.board[x][y];
        }

        return 0;
    }

    getDiagonalDescending = ({
        col,
        row,
    }: DiagonalInput) => {
        const result = [];

        let y = col + row;

        for (let i = 0; i < this.colCount; i++) {
            result.push(this.getBoardValue(i, y));
            y--;
        }

        return result;
    }

    getDiagonalAscending = ({
        col,
        row,
    }: DiagonalInput) => {
        const result = [];

        let x = col - row;
        for (let i = 0; i < this.colCount; i++) {
            result.push(this.getBoardValue(x, i));
            x++;
        }

        return result;
    }

    getDiagonalArrays = (params: DiagonalInput) => {

        const diagonalLeftArray = this.getDiagonalDescending(params);
        const diagonalRightArray = this.getDiagonalAscending(params);

        return {
            diagonalLeftArray,
            diagonalRightArray,
        };
    };
}

export {
    DiagonalSolver,
}
