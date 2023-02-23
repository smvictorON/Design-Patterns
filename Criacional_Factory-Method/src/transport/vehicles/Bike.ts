import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle {
  startRoute(): void {
    this.getCargo()
    console.log("Iniciando trajeto ...")
  }
  getCargo(): void {
    console.log("Pegamos a mochila, estamos prontos!")
  }
}