import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListComponent } from '@app/feature/vehicle-list/vehicle-list.component';
import { VehiclesService } from '@app/core/vehicles/vehicles.service';
import { VehiclesRestService } from '@app/core/vehicles/vehicles-rest.service';
import { TableModule } from 'primeng/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailComponent } from '@app/feature/vehicle-detail/vehicle-detail.component';

const appRoutes: Routes = [
  { path: 'vehicles/:id', component: VehicleDetailComponent },
  ];
  
describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleListComponent, VehicleDetailComponent ],
      providers: [
        { provide: VehiclesService, useClass: VehiclesRestService }
      ],
      imports: [
        TableModule,
        HttpClientTestingModule,
        RouterModule.forRoot(
          appRoutes
        ),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
