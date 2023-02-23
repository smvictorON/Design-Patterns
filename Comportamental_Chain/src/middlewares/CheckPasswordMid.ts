import Middleware from "./Middleware";
import * as chalk from "chalk";

export default class CheckPasswordMid extends Middleware {
  public check(email: string, password: string): boolean {
    if(password === '123456'){
      console.log(chalk.yellow("Senha fraca!"))
    }

    return this.checkNext(email, password)
  }
}