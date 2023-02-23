import ICar from "./ICar";

export default class Car implements ICar{

  constructor(color: string, year: number, engine: number, seats: number) {
    this.configurationCar(color, year, engine, seats)
  }

  startVehicle(): void {
    console.log('Ligando os motores...')
  }

  configurationCar(color: string, year: number, engine: number, seats: number): void {
    console.log(`Carro: ${color}, ${year}, ${engine}, ${seats}`)
    this.startVehicle()
  }

  //Implementando a interface de Veiculo não faz sentido ter esse método
  //por que essa classe desrespeita somente a carros
  //mesmo removendo aparecerá um erro dizendo que precisa ser implementado pois
  //é da interface, ou seja é um método inútil
  //Implementando a interface especifica do Carro não é preciso ter esse método
  // configurationMotorcycle(color: string, year: number, engine: number): void {
  //   throw new Error("Method not implemented.");
  // }
}