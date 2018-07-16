import { Transmission } from "@app/shared/models/transmission";

export class Vehicle {
    constructor(
        public aggregateId: number,
        public manufacturer: string,
        public model: string,
        public capacity: number,
        public power: number,
        public transmission: Transmission,
        public fleetId: number,
        public productionYear: number) { }
}