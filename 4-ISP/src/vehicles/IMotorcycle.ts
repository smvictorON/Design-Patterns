//Posso extender o veiculo aqui ou na classe que implementa esse interface, implementar as 2 interfaces!
export default interface IMotorcycle {
  configurationMotorcycle(color: string, year: number, engine: number): void
}