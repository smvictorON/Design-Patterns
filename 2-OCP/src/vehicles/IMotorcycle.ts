export default interface IMotorcycle {

  startVehicle(): void
  configure(
    color: string,
    year: number,
    engine: number
  ): void;

}