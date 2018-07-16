import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NewVehicleFormComponent } from '@app/shared/forms/new-vehicle-form/new-vehicle-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],  
  providers: [
  ],
  declarations: [
    NewVehicleFormComponent
  ],
  exports: [
    NewVehicleFormComponent
  ]
})
export class SharedModule { }
