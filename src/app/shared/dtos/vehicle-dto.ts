import { Transmission } from "@app/shared/models/transmission";
import { Vehicle } from "@app/shared/models/vehicle";

export class VehicleDto {
    constructor(
        public aggregateId: number,
        public manufacturer: string,
        public model: string,
        public capacity: number,
        public power: number,
        public transmission: Transmission,
        public fleetId: number,
        public productionYear: number
    ) { }

    public static from(vehicle: Vehicle) {
        return new VehicleDto(vehicle.aggregateId, vehicle.manufacturer, vehicle.model, vehicle.capacity, vehicle.power, vehicle.transmission, vehicle.fleetId, vehicle.productionYear);
    }   
}
