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


    public static toVehicleDto(entity: Vehicle) {
        return new VehicleDto(entity.aggregateId, entity.manufacturer,entity.model,entity.capacity, entity.power, entity.transmission, entity.fleetId, entity.productionYear);
    }

    public static toVehicle(dto: VehicleDto){
        return new Vehicle(dto.aggregateId, dto.manufacturer, dto.model, dto.capacity, dto.power, dto.transmission, dto.fleetId, dto.productionYear);
    }
}


