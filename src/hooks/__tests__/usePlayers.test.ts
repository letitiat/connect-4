import { act, renderHook } from "@testing-library/react";
import { usePlayers } from "hooks";
import { RecoilRoot } from "recoil";

const render = () => {
    const { result } = renderHook(
        () => usePlayers(), {
        wrapper: RecoilRoot,
    });

    return result;
}

test("getting player id '1' returns player 1", () => {

    const { getPlayerById } = render().current;

    const player1 = getPlayerById(1);

    expect(player1).toBeDefined();
    expect(player1.id).toEqual(1);
});

test("getting player id '2' returns player 2", () => {

    const { getPlayerById } = render().current;

    const player2 = getPlayerById(2);

    expect(player2).toBeDefined();
    expect(player2.id).toEqual(2);
});

test("getting player id 3 is undefined", () => {

    const { getPlayerById } = render().current;
    expect(() => getPlayerById(3)).toThrow(TypeError);
});

test("getting player 1 returns a colour", () => {

    const { getPlayerColour } = render().current;
    const colour = getPlayerColour(1);
    expect(colour).toBeDefined();
});

test("getting player 2 returns a colour", () => {

    const { getPlayerColour } = render().current;
    const colour = getPlayerColour(2);
    expect(colour).toBeDefined();
});