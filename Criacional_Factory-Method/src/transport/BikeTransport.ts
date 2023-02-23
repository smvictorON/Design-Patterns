import Transport from "./Transport";
import Bike from "./vehicles/Bike";
import IVehicle from "./vehicles/interfaces/IVehicle";

//Esse é um exemplo de Factory Method
export default class BikeTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Bike()
  }

}