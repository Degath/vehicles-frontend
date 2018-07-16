import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesManagementComponent } from '@app/feature/vehicles-management/vehicles-management.component';
import { VehiclesService } from '@app/core/vehicles/vehicles.service';
import { VehiclesRestService } from '@app/core/vehicles/vehicles-rest.service';
import { TableModule } from 'primeng/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehiclesManagementComponent', () => {
  let component: VehiclesManagementComponent;
  let fixture: ComponentFixture<VehiclesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesManagementComponent ],
      providers: [
        { provide: VehiclesService, useClass: VehiclesRestService }
      ],
      imports: [
        TableModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
