import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Iniciando decolagem...");

  }
  getCargo(): void {
    console.log("Pegamos os passagerios, ligando hélices!")
  }
  checkWind(): void {
    console.log("Ventos a 30km sul!")
  }
}