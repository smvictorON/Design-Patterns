import MercadoPago from "../mercado_pago/MercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

//aqui é implmentando a classe na qual voce quer que seja retornado a estrutura
export default class MercadoPagoAdapater implements IPayPalPayment {
  private token: Token

  constructor(private mercado_pago: MercadoPago) {
    console.log("Adaptando o MercadoPago para o PayPal!")
  }

  authToken(): Token {
    return new Token()
  }

  paypalPayment(): void {
    return this.mercado_pago.pagar()
  }

  paypalReceive(): void {
    return this.mercado_pago.receber()
  }

}