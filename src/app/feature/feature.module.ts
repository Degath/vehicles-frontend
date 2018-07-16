import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesManagementComponent } from '@app/feature/vehicles-management/vehicles-management.component';
import { NewVehicleComponent } from '@app/feature/new-vehicle/new-vehicle.component';
import {TableModule} from 'primeng/table';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';


@NgModule({
  imports: [
    CommonModule,
    TableModule,
    CoreModule,
    SharedModule
  ],  
  providers: [
  ],
  declarations: [
    VehiclesManagementComponent,
    NewVehicleComponent
  ],
})
export class FeatureModule { }
