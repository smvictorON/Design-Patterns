import IPaymentInstrument from "./IPaymentInstrument";

//Adicionando o abstract proibe que essa classe seja instanciada
export default abstract class NubankCard implements IPaymentInstrument {
  validate(): void {
    console.log("Validação")
  }
  collectPayment(): void {
    console.log("Pagamento Realizado!")
  }
}