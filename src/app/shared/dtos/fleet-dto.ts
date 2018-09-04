import { Fleet } from "@app/shared/models/fleet";

export class FleetDto {
    constructor(
        public name: string
    ) { }

    public static from(fleet: Fleet) {
        return new FleetDto(fleet.name);
    }
}
