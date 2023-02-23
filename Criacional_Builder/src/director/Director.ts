import IBuilder from "../builders/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director {
  constructor(private builder: IBuilder) {

  }

  constructSedanCar(){
    this.builder.setVehicleType(VehicleType.SEDAN)
    this.builder.setSeats(5)
    this.builder.setTransmission(Transmission.AUTOMATIC)
    this.builder.setEngine(new Engine(1.8))
    this.builder.addWheel(new Wheel(16))
    this.builder.addWheel(new Wheel(16))
    this.builder.addWheel(new Wheel(16))
    this.builder.addWheel(new Wheel(16))
  }

  constructTruck(){
    this.builder.setVehicleType(VehicleType.TRUCK)
    this.builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL)
    this.builder.setEngine(new Engine(6.0))
    this.builder.setSeats(3)
    this.builder.addWheel(new Wheel(18))
    this.builder.addWheel(new Wheel(18))
    this.builder.addWheel(new Wheel(18))
    this.builder.addWheel(new Wheel(18))
    this.builder.addWheel(new Wheel(18))
    this.builder.addWheel(new Wheel(18))
  }

  constructMoto(){
    this.builder.setVehicleType(VehicleType.MOTO)
    this.builder.setSeats(2)
    this.builder.setTransmission(Transmission.MANUAL)
    this.builder.setEngine(new Engine(300))
    this.builder.addWheel(new Wheel(16))
    this.builder.addWheel(new Wheel(16))
  }
}