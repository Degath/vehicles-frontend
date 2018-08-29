import { Component, OnInit } from '@angular/core';
import { Event } from '@app/shared/models/event';
import { EventsService } from '@app/core/events/events.service';
import { EventDto } from '@app/shared/dtos/event-dto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  events: EventDto[] = [];

  constructor(private eventsService: EventsService) {
   }

  ngOnInit() {
    this.loadEvents();
    console.log(new Date());
  }

  loadEvents(){
    this.eventsService.getEvents().subscribe(response => {
      response.forEach(event=> {
        this.events.push(EventDto.from(event));
      });
    });
  }
}
