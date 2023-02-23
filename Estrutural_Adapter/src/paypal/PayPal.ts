import Token from "../utils/Token";
import IPayPalPayment from "./IPayPalPayment";

export default class PayPal implements IPayPalPayment {
  private token: Token;

  authToken(): Token {
    return new Token()
  }

  paypalPayment(): void {
    this.token = this.authToken()
    console.log("TOKEN:", this.token.getToken())
    console.log("Enviando pegamentos via PayPal")
  }

  paypalReceive(): void {
    console.log("Recebendo pagamentos via PayPal")
  }
}