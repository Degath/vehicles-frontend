import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVehicleFormComponent } from '@app/shared/forms/new-vehicle-form/new-vehicle-form.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { FieldsetModule } from 'primeng/fieldset';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { VehiclesService } from '@app/core/vehicles/vehicles.service';
import { VehiclesRestService } from '@app/core/vehicles/vehicles-rest.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewVehicleFormComponent', () => {
  let component: NewVehicleFormComponent;
  let fixture: ComponentFixture<NewVehicleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVehicleFormComponent ],
      imports: [
        AutoCompleteModule,
        ButtonModule,
        BrowserAnimationsModule,
        CommonModule,
        ConfirmDialogModule,
        DropdownModule,
        FieldsetModule,
        FormsModule,
        HttpClientTestingModule,
        SliderModule,
        SpinnerModule,
        ToastModule
      ],
      providers: [
        { provide: VehiclesService, useClass: VehiclesRestService },
        ConfirmationService,
        MessageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
