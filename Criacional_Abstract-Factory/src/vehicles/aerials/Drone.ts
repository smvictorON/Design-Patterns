import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Iniciando decolagem...");
  }
  getCargo(): void {
    console.log("Carga Acoplada!")
  }
  checkWind(): void {
    console.log("Vento a 10km, posso subir!")
  }

}