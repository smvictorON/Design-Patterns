export default class Wheel {

  constructor(private _rim: number) {

  }

  getPower(): number {
    return this._rim
  }

  setPower(power: number) {
    this._rim = power
  }
}