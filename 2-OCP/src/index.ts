import TypeVehicle from "./TypeVehicle";
import Car from "./vehicles/Car";
import Motorcyle from "./vehicles/Motorcycle";
import Vehicle from "./vehicles/Vehicle";

const type = TypeVehicle.CAR
let vehicle;

//CORRETO
//dessa forma cada um respeita sua propria classe, com sua propria interface, e se
//for necessario adicionar um novo tipo de veiculo, pode ser criado um novo sem
//modificar os que ja existem
if(type === TypeVehicle.CAR){
  vehicle = new Car('prata', 2016, 1.8, 5, 4)
}else if(type === TypeVehicle.MOTORCYCLE){
  vehicle = new Motorcyle('preto', 2020, 300)
}

//ERRADO
// if(type === TypeVehicle.CAR){
//   vehicle = new Vehicle('prata', 2016, 1.8, 5, 4)
//   vehicle.car()
// }else if(type === TypeVehicle.MOTORCYCLE){
//   //Desse modo ele não aceita que omitamos os valores declarados na classe
//   //mesmo se colocarmos como opcional na classe, isso fara com que o carro
//   //possa ser definido sem esses parametros

//   //Até conseguimos rodar se passarmos por exemplo 0 portas e 1 assento
//   //porém como foi desrespeitado o principio OCP terão alguns sideeffects
//   vehicle = new Vehicle('prata', 2016, 1.8, 1, 0)
//   vehicle.motorcycle()
// }