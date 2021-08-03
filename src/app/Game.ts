export class Game {

    private _score = 0;

    public roll(pinsKnockedDown: number): void {
        this._score += pinsKnockedDown;
    }

    public score(): number {
        return this._score;
    }
}