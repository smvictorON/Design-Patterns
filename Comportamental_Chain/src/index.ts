import CheckPermissionMid from "./middlewares/CheckPermissionMid";
import CheckUserMid from "./middlewares/CheckUserMid";
import Server from "./servers/Server";
import * as readline from "readline"
import CheckPasswordMid from "./middlewares/CheckPasswordMid";

const setPromptQuestions = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question("Digite o seu email: ", email => {
    rl.question("Digite a sua senha: ", password => {
      server.logIn(email, password)

      rl.close();
    })
  })

  rl.on("close", setPromptQuestions)
}

const server = new Server()
const middleware = new CheckUserMid()

middleware.linkWith(new CheckPasswordMid()).linkWith(new CheckPermissionMid())

// middleware.linkWith(new CheckPasswordMid)
// middleware.linkWith(new CheckPermissionMid)

server.setMiddleware(middleware)
setPromptQuestions()
// server.logIn("admin@gmail.com", "123456")