import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from '@app/feature/vehicle-list/vehicle-list.component';
import { NewVehicleComponent } from '@app/feature/new-vehicle/new-vehicle.component';
import { TableModule } from 'primeng/table';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { RouterModule } from '@angular/router';
import { FleetListComponent } from './fleet-list/fleet-list.component';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    SharedModule,
    TableModule,
    InputTextModule
  ],
  providers: [
  ],
  declarations: [
    VehicleListComponent,
    NewVehicleComponent,
    VehicleDetailComponent,
    FleetListComponent,
    VehicleDetailComponent
  ],
})
export class FeatureModule { }
