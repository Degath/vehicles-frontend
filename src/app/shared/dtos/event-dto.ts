import { Event } from "@app/shared/models/event";
import { Information } from "@app/shared/models/information";
import { Engine } from "@app/shared/models/engine";

export class EventDto {
    constructor(
        public aggregateId: number,
        public occurredAt: Date,
        public information: Information,
        public engine: Engine
    ) { }

    public static from(event: Event) {
        return new EventDto(event.aggregateId, event.occurredAt, event.information, event.engine);
    }   
}


