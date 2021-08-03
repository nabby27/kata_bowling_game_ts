export class Game {

    private _rolls: number[] = new Array(21).fill(0);
    private _currentRoll = 0;

    public roll(pinsKnockedDown: number): void {
        this._rolls[this._currentRoll] = pinsKnockedDown;
        this._currentRoll++;
    }

    public score(): number {
        let score = 0;

        for (let i = 0; i < this._rolls.length; i++) {
            score += this._rolls[i];
        }

        return score;
    }
}