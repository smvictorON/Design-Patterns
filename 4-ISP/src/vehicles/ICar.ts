import IVehicle from "./IVehicle";

//Posso extender o veiculo aqui ou na classe que implementa esse interface, implementar as 2 interfaces!
export default interface ICar extends IVehicle{
  configurationCar(color: string, year: number, engine: number, seats: number): void
}