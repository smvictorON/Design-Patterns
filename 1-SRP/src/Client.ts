export default class Client {

  email: string

  create(): void {

  }

  read(): void {

  }

  update(): void {

  }

  delete(): void {

  }

  //Está errado pois o email deve estar em uma classe separada, nessa
  //classe somente deve conter coisas especificas para o Client a maneira
  //correta é criar uma classe somente para o envio de email separado!
  //essa função foi migrada para a Notify.ts
  sendEmail(): boolean {
    return true
  }
}