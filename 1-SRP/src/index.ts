import Client from "./Client";
import Notify from "./Notify";

const cliente = new Client();
//Separando as classe poderia ser passado o cliente direto na crianção de uma notificação
const notificação = new Notify(cliente);

notificação.sendEmail()