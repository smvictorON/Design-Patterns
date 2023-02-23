import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle{
  startRoute(): void {
    this.getCargo()
    console.log('Iniciando a entrega!');
  }
  getCargo(): void {
    console.log('Pegamos a encomenda!')
  }
}