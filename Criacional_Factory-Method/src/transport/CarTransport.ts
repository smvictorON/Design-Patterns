import Transport from "./Transport";
import Car from "./vehicles/Car";
import IVehicle from "./vehicles/interfaces/IVehicle";

//Esse é um exemplo de Factory Method
export default class CarTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Car()
  }
}