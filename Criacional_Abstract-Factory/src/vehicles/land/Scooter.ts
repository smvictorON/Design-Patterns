import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {
  startRoute(): void {
    this.getCargo()
    console.log('Iniciando a entrega!');
  }
  getCargo(): void {
    console.log("Encomenda guardada!")
  }

}