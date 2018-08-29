import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesRestService } from '@app/core/vehicles/vehicles-rest.service';
import { VehiclesService } from '@app/core/vehicles/vehicles.service';
import { HttpClientModule } from '@angular/common/http';
import { EventsService } from '@app/core/events/events.service';
import { EventsRestService } from '@app/core/events/events-rest.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: VehiclesService, useClass: VehiclesRestService },
    { provide: EventsService, useClass: EventsRestService },
  ],
  declarations: []
})
export class CoreModule { }
