export default interface IVehicle {
  startVehicle(): void
  //Os 2 métodos abaixo violam o principio ISP pois se criar uma classe de carro implementando
  //essa interface, ele implementar o método da moto que será inútil
  // configurationCar(color: string, year: number, engine: number, seats: number): void
  // configurationMotorcycle(color: string, year: number, engine: number): void
}