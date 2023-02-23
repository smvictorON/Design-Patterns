import Client from "./vehicles/client/Client";
import Company from './vehicles/consts/Company'
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";
import Lime from "./vehicles/factories/Lime";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";

const currentCompany = Company.LIME
let factory: ITransportFactory

switch(currentCompany){
  case Company.UBER:
    factory = new UberTransport
    break;
  case Company.NINENINE:
    factory = new NineNineTransport
    break;
  case Company.LIME:
    factory = new Lime
    break;
  default:
    console.error("Desconhecido!")
}

const client = new Client(factory)

client.startRoute()