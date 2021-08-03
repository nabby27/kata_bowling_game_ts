export class Game {

    private _rolls: number[] = new Array(21).fill(0);
    private _currentRoll = 0;

    public roll(pinsKnockedDown: number): void {
        this._rolls[this._currentRoll] = pinsKnockedDown;
        this._currentRoll++;
    }

    public score(): number {
        let score = 0;
        let i = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this._rolls[i] + this._rolls[i + 1] == 10) { // spare
                score += 10 + this._rolls[i + 2]
            } else {
                score += this._rolls[i] + this._rolls[i + 1];
            }
            i += 2;
        }

        return score;
    }
}