import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { EventsService } from '@app/core/events/events.service';
import { EventDto } from '@app/shared/dtos/event-dto';


@Injectable()
export class EventsRestService implements EventsService {

  eventDto: EventDto;

  public constructor(private http: HttpClient) {
  }

  public getEvents(): Observable<EventDto[]> {
    return this.http.get<EventDto[]>(environment.api + '/events');
  }

}