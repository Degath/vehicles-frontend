import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NewVehicleFormComponent } from '@app/shared/forms/new-vehicle-form/new-vehicle-form.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {SliderModule} from 'primeng/slider';
import {SpinnerModule} from 'primeng/spinner';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import { NewFleetComponent } from './forms/new-fleet/new-fleet.component';

@NgModule({
  imports: [
    AutoCompleteModule,
    ButtonModule,
    CommonModule,
    ConfirmDialogModule,
    DropdownModule,
    FieldsetModule,
    FormsModule,
    SliderModule,
    SpinnerModule,
    ToastModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ],
  declarations: [
    NewVehicleFormComponent,
    NewFleetComponent
  ],
  exports: [
    NewVehicleFormComponent
  ]
})
export class SharedModule { }
