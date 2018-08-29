import { Transmission } from "@app/shared/models/transmission";

export class Engine {
    constructor() { }

    public capacity: number;
    public power: number;
    public transmission: Transmission;
}