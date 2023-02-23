import Payonner from "../payonner/Payonner";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

//aqui é implmentando a classe na qual voce quer que seja retornado a estrutura
export default class PayonnerAdapater implements IPayPalPayment {
  private token: Token

  constructor(private payoneer: Payonner) {
    console.log("Adaptando o Payonner para o PayPal!")
  }

  authToken(): Token {
    return new Token()
  }

  paypalPayment(): void {
    return this.payoneer.sendPayment()
  }

  paypalReceive(): void {
    return this.payoneer.receivePayment()
  }

}