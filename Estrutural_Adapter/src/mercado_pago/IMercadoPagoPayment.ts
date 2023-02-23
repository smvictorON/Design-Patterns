import Token from "../utils/Token";

export default interface IMercadoPago {
  authToken(): Token;
  pagar(): void;
  receber(): void;
}