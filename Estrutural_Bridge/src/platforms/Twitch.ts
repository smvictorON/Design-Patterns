import IPlatform from "./IPlatform";

export default class Twitch implements IPlatform {
  constructor() {
    this.configureRMTP()
    console.log("Twitch: Tramissão Iniciada!")
  }

  configureRMTP(): void {
    this.authToken()
    console.log("Twitch: Configurando Broadcasting!")
  }
  authToken(): void {
    console.log("Twitch: Autorizando aplicação!")
  }

}