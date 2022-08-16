import { DiagonalSolver } from "utils/DiagonalSolver";

test("x/y coords should be invalid", () => {

    const board = [
        [],
        [],
        [],
    ];

    var solver = new DiagonalSolver(board);

    const width = board.length;

    // Gone outside of bounds on left
    expect(solver.getIsValid(-1, 0)).toEqual(false);

    // Gone outside of bounds on right
    expect(solver.getIsValid(width, 0)).toEqual(false);

    // Gone outside of bounds on top
    expect(solver.getIsValid(0, 6)).toEqual(false); // Because the maxHeight of the board is 5

    // Gone outside of bounds on bottom
    expect(solver.getIsValid(0, -1)).toEqual(false);
});

test("x/y coords should be valid", () => {

    const board = [
        [],
        [],
        [],
    ];

    var solver = new DiagonalSolver(board);

    const width = board.length;

    // left
    expect(solver.getIsValid(0, 0)).toEqual(true);

    // right
    expect(solver.getIsValid(width - 1, 0)).toEqual(true);

    // top
    expect(solver.getIsValid(0, 5)).toEqual(true); // Because the maxHeight of the board is 5

    // bottom
    expect(solver.getIsValid(0, 0)).toEqual(true);
});

test("should get '0' from board due to being invalid", () => {

    const board = [
        [],
        [],
        [],
    ];

    var solver = new DiagonalSolver(board);

    expect(solver.getBoardValue(-1, 0)).toEqual(0);
});

test("should get '0' from board", () => {

    const board = [
        [1, 0],
        [1, 2],
        [1],
    ];

    var solver = new DiagonalSolver(board);

    expect(solver.getBoardValue(0, 1)).toEqual(0);
});

test("should get '1' from board", () => {

    const board = [
        [1, 0],
        [1, 2],
        [1],
    ];

    var solver = new DiagonalSolver(board);

    expect(solver.getBoardValue(0, 0)).toEqual(1);
});

test("should get '2' from board", () => {

    const board = [
        [1, 0],
        [1, 2],
        [1],
    ];

    var solver = new DiagonalSolver(board);

    expect(solver.getBoardValue(1, 1)).toEqual(2);
});

test("should successfully get an ascending diagonal", () => {

    const board = [
        [1],
        [2, 1],
        [2, 2, 1],
        [1, 2, 2, 1],
        [1, 0, 0, 0, 0]
    ];

    var solver = new DiagonalSolver(board);

    expect(solver.getDiagonalAscending({ col: 3, row: 3 })).toEqual([1, 1, 1, 1, 0]);
});

test("should successfully get a descending diagonal", () => {

    const board = [
        [1, 2, 2, 1],
        [2, 2, 1],
        [2, 1],
        [1],
    ];

    var solver = new DiagonalSolver(board);

    expect(solver.getDiagonalDescending({ col: 3, row: 0 })).toEqual([1, 1, 1, 1]);
});
