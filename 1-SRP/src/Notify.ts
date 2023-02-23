import Client from "./Client";

export default class Notify {

  constructor(private cliente: Client){

  }

  //Uma das vantagens de centralizar e especificar uma classe para o
  //email é que pode ser usado em varios lugares se precisar copiar
  //e tambem podem ser adicionadas outros tipos de notificação
  sendEmail(): boolean {
    console.log("Enviado Email...");

    this.cliente.email
    return true
  }
}