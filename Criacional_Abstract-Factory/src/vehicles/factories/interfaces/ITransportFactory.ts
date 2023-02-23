import ILandVehicle from '../../land/interfaces/ILandVehicle'
import IAircraft from '../../aerials/interfaces/IAircraft'

export default interface ITransportFactory {
  createTransportVehicle(): ILandVehicle;
  createTransportAircraft(): IAircraft;
}