import { Information } from "@app/shared/models/information";
import { Engine } from "@app/shared/models/engine";

export class Event {
    constructor() { }

    public aggregateId: number;
    public occurredAt: Date;
    public information: Information;
    public engine: Engine;
}