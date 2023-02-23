import NubankCard from "./NubankCard";

//Dessa forma cada uma das classes tem sua propria validação porém compartilham o metodo de pagamento
export default class DebitCard extends NubankCard {

  validate(): void {
    console.log("Verificando Saldo")
  }

}