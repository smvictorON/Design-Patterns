import Drone from "../aerials/Drone";
import IAircraft from "../aerials/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Scooter from "../land/Scooter";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class Lime implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Scooter()
  }
  createTransportAircraft(): IAircraft {
    return new Drone()
  }

}