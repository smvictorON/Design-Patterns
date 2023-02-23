export default class Vehicle {

  //Essa classe nao esta legal pq está acomplando car e motorcycle na class vehicle

  constructor(
    private color: string,
    private year: number,
    private engine: number,
    private seats: number,
    private doors: number
  ) {

  }

  startVehicle(): void {
    console.log("Ligando os motores")
  }

  car(): void{
    console.log(`Criando um carro: ${this.color}, ${this.year}, ${this.engine}, ${this.seats}, ${this.doors}`)

    this.startVehicle()
  }

  motorcycle(): void{
    console.log(`Criando uma moto: ${this.color}, ${this.year}, ${this.engine}`)

    this.startVehicle()
  }
}