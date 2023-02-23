import DataBase from "../servers/DataBase"
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware"
import * as chalk from "chalk";

export default class CheckPermissionMid extends Middleware {
  public check(email: string, password: string): boolean {
    const users = DataBase.filter(item => item.email === email);

    if(!users.length) {
      console.log(chalk.red("Email inválido!"))
      return false
    }

    if(users[0].permission === PermissionType.ADMIN){
      console.log(chalk.blue("Seja bem vindo Admin!"))
      return true
    }

    console.log(chalk.blue("Seja bem vindo Usuário!"))

    return this.checkNext(email,password)
  }
}