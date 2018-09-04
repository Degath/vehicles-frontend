import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesRestService } from '@app/core/vehicles/vehicles-rest.service';
import { VehiclesService } from '@app/core/vehicles/vehicles.service';
import { HttpClientModule } from '@angular/common/http';
import { FleetService } from '@app/core/fleets/fleet.service';
import { FleetRestService } from '@app/core/fleets/fleet-rest.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: VehiclesService, useClass: VehiclesRestService },
    { provide: FleetService, useClass: FleetRestService },
  ],
  declarations: []
})
export class CoreModule { }
