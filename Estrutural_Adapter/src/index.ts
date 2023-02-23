import PayonnerAdapater from "./adapters/PayonnerAdapter";
import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import MercadoPago from "./mercado_pago/MercadoPago";
import IPayonnerPayment from "./payonner/IPayonnerPayment";
import Payonner from "./payonner/Payonner";
import IPayPalPayment from "./paypal/IPayPalPayment";
import PayPal from "./paypal/PayPal";

// const payment: IPayPalPayment = new PayPal()
// const payment: IPayPalPayment = new PayonnerAdapater(new Payonner())
const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago())

payment.paypalPayment()
payment.paypalReceive()