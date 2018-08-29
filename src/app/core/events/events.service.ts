import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '@app/shared/models/event';

@Injectable()
export abstract class EventsService {

  constructor() { }

  public getEvents: () => Observable<Event[]>;

}
