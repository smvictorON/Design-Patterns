import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder
const director: Director = new Director(builder)

director.constructSedanCar();

const sedan: Vehicle = builder.getVehicle()

console.log(`Criando veiculo do tipo ${sedan.vehicleType} com ${sedan.wheelsTotal} rodas`);

director.constructTruck()

const truck: Vehicle = builder.getVehicle()

console.log(`Criando veiculo do tipo ${truck.vehicleType} com ${truck.wheelsTotal} rodas`);

director.constructMoto()

const moto: Vehicle = builder.getVehicle()

console.log(`Criando veiculo do tipo ${moto.vehicleType} com ${moto.wheelsTotal} rodas`);