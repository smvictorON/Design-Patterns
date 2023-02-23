import IMotorcycle from "./IMotorcycle";
import IVehicle from "./IVehicle";

export default class Motorcycle implements IMotorcycle, IVehicle{

  constructor(color: string, year: number, engine: number) {
    this.configurationMotorcycle(color, year, engine)
  }

  startVehicle(): void {
    console.log('Ligando os motores...')
  }

  //Implementando a interface de Veiculo não faz sentido ter esse método
  //por que essa classe desrespeita somente a motos
  //mesmo removendo aparecerá um erro dizendo que precisa ser implementado pois
  //é da interface, ou seja é um método inútil
  //Implementando a interface especifica da Moto não é preciso ter esse método
  // configurationCar(color: string, year: number, engine: number, seats: number): void {
  //   throw new Error("Method not implemented.");
  // }

  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(`Moto: ${color}, ${year}, ${engine}`)
    this.startVehicle()
  }
}