export class Game {

    private _rolls: number[] = new Array(21).fill(0);
    private _currentRoll = 0;

    public roll(pinsKnockedDown: number): void {
        this._rolls[this._currentRoll] = pinsKnockedDown;
        this._currentRoll++;
    }

    public score(): number {
        let score = 0;
        let frameIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this._rolls[frameIndex] === 10) {
                score += 10 + this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2]
                frameIndex++;
            } else if (this.isSpare(frameIndex)) {
                score += 10 + this._rolls[frameIndex + 2]
                frameIndex += 2;
            } else {
                score += this._rolls[frameIndex] + this._rolls[frameIndex + 1];
                frameIndex += 2;
            }
        }

        return score;
    }

    private isSpare(frameIndex: number): boolean {
        return this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10;
    }
}