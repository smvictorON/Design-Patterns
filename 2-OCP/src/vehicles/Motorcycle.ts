import IMotorcycle from "./IMotorcycle";

export default class Motorcyle implements IMotorcycle {

  constructor(
    color: string,
    year: number,
    engine: number
  ){
    this.configure(color, year, engine)
  }

  startVehicle(): void {
    console.log("Ligando os motores")
  }
  configure(color: string, year: number, engine: number): void {
    console.log(`Criando uma moto: ${color}, ${year}, ${engine}`);
    this.startVehicle()
  }
}