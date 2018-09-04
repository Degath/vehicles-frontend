import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '@app/app.component';
import { VehicleListComponent } from '@app/feature/vehicle-list/vehicle-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NewVehicleComponent } from '@app/feature/new-vehicle/new-vehicle.component';
import { AccordionModule } from 'primeng/accordion';
import { FeatureModule } from '@app/feature/feature.module';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { VehicleDetailComponent } from '@app/feature/vehicle-detail/vehicle-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FleetListComponent } from '@app/feature/fleet-list/fleet-list.component';

const appRoutes: Routes = [
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'add-vehicle', component: NewVehicleComponent },
  { path: 'vehicles/:id', component: VehicleDetailComponent },
  { path: 'fleets', component: FleetListComponent }
];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FeatureModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
