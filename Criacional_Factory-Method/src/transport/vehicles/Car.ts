import IVehicle from "./interfaces/IVehicle";

export default class Car implements IVehicle {
  startRoute(): void {
    this.getCargo()
    console.log("Iniciando trajeto ...")
  }
  getCargo(): void {
    console.log("Pegamos o passageiro, estamos prontos!")
  }
}