import IDbProduct from "./IDbProduct";

export default class MySQLProduct implements IDbProduct {
  getProductById(productId: number): string{
    return `MySQL: Exibindo produto: ${productId}`
  }
}

//ERRADO
//Dessa forma ele não está implementando nenhuma interface e isso não é legal
// export default class MySQLProduct {
//   getProductById(productId: number): string{
//     return `MySQL: Exibindo produto: ${productId}`
//   }
// }