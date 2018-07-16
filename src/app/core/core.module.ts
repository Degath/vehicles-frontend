import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesRestService } from '@app/core/vehicles/vehicles-rest.service';
import { VehiclesService } from '@app/core/vehicles/vehicles.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: VehiclesService, useClass: VehiclesRestService },
  ],
  declarations: []
})
export class CoreModule { }
