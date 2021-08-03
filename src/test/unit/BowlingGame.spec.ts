import { Game } from '../../app/Game'

describe('Bowling Game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game();
    })

    test('test gutter game', () => {
        rollMany(20, 0);
        expect(game.score()).toEqual(0);
    });

    test('test all ones', () => {
        rollMany(20, 1);
        expect(game.score()).toEqual(20);
    });

    test('test one spare', () => {
        rollSpare();
        game.roll(3);
        rollMany(17, 0);
        expect(game.score()).toEqual(16);
    });

    test('test one strike', () => {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        expect(game.score()).toEqual(24);
    });

    function rollMany(numberOfRolls: number, pinsKnockedDown: number) {
        for (let i = 0; i < numberOfRolls; i++) {
            game.roll(pinsKnockedDown);
        }
    }

    function rollStrike() {
        game.roll(10);
    }

    function rollSpare() {
        game.roll(5);
        game.roll(5);
    }
});
