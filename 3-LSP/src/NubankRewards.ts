import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument{
  validate(): void {
    console.log("Verificando Pontuação")
  }
  collectPayment(): void {
    console.log("Pagando com a Pontuação!")
  }

}