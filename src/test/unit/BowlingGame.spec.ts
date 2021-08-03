import { Game } from '../../app/Game'

describe('Bowling Game', () => {
    let game: Game;

    function rollMany(numberOfRolls: number, pinsKnockedDown: number) {
        for (let i = 0; i < numberOfRolls; i++) {
            game.roll(pinsKnockedDown);
        }
    }

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
});
