import Transport from "./Transport";
import Motorcycle from "./vehicles/Motorcycle";
import IVehicle from "./vehicles/interfaces/IVehicle";

//Esse é um exemplo de Factory Method
export default class MotorcycleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Motorcycle()
  }

}