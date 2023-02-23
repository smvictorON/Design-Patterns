export default class Engine {

  constructor(private _power: number) {

  }

  getPower(): number {
    return this._power
  }

  setPower(power: number) {
    this._power = power
  }
}