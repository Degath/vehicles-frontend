import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailComponent } from './vehicle-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { FleetListComponent } from '@app/feature/fleet-list/fleet-list.component';
import { VehicleListComponent } from '@app/feature/vehicle-list/vehicle-list.component';
import { TableModule } from 'primeng/table';

const appRoutes: Routes = [
  { path: 'fleets', component: FleetListComponent }
  ];
  
describe('VehicleDetailComponent', () => {
  let component: VehicleDetailComponent;
  let fixture: ComponentFixture<VehicleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        VehicleDetailComponent,
        FleetListComponent,
      ],
      imports: [
        TableModule,
        RouterModule.forRoot(
          appRoutes
        ),
        HttpClientTestingModule
      ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
