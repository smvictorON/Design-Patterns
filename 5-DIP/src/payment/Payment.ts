import DbProductFactory from "../factory/DbProductFactory";
import MySQLProduct from "../model/MySQLProduct";

export default class Payment{
  pay(productId: number): void{

    //ERRADO
    //Aqui temos um problema que se precisamors modificar a classe MySQLProduct
    //teriamos que trocar em todos os lugares, e tambem em relação a Payment a classe
    //MySQLProduct é baixo nível
    // const dbProduct = new MySQLProduct()

    //CORRETO
    //dessa forma a responsabilidade de devolver a integração com o banco correto fica
    //na factory que apenas mudando o type devolve a instacia correta para essa variável
    //issa acontece pois as duas MySQLProduct e MongoDBProducto implementam a mesma interface
    const dbProduct = DbProductFactory.create()
    const product = dbProduct.getProductById(productId)

    console.log(product);
  }
}