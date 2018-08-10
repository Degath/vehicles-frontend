import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVehicleComponent } from '@app/feature/new-vehicle/new-vehicle.component';
import { SharedModule } from '@app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehiclesService } from '@app/core/vehicles/vehicles.service';
import { VehiclesRestService } from '@app/core/vehicles/vehicles-rest.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewVehicleComponent', () => {
  let component: NewVehicleComponent;
  let fixture: ComponentFixture<NewVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewVehicleComponent
      ],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        SharedModule
      ],
      providers: [
        { provide: VehiclesService, useClass: VehiclesRestService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
