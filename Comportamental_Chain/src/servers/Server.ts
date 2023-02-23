import Middleware from "../middlewares/Middleware";
import * as chalk from "chalk";

export default class Server {
  private middleware: Middleware;

  public setMiddleware(middleware: Middleware): void {
    this.middleware = middleware
  }

  logIn(email: string, password: string): boolean{

    if(this.middleware.check(email, password)){
      console.log(chalk.green("Usuário Logado!"))

      return true
    }

    return false
  }

}