import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment {
  private token: Token;

  authToken(): Token {
    return new Token()
  }

  pagar(): void {
    this.token = this.authToken()
    console.log("TOKEN:", this.token.getToken())
    console.log("Enviando pegamentos via MercadoPago")
  }

  receber(): void {
    console.log("Recebendo pagamentos via MercadoPago")
  }
}