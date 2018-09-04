import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '@app/app.component';
import { VehiclesManagementComponent } from '@app/feature/vehicles-management/vehicles-management.component';
import { HttpClientModule } from '@angular/common/http';
import { NewVehicleComponent } from '@app/feature/new-vehicle/new-vehicle.component';
import { AccordionModule } from 'primeng/accordion';
import { FeatureModule } from '@app/feature/feature.module';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'vehicles', component: VehiclesManagementComponent },
  { path: 'add-vehicle', component: NewVehicleComponent }
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
