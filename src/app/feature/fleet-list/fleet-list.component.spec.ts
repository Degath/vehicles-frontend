import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetListComponent } from './fleet-list.component';
import { TableModule } from 'primeng/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FleetService } from '@app/core/fleets/fleet.service';
import { FleetRestService } from '@app/core/fleets/fleet-rest.service';

describe('FleetListComponent', () => {
  let component: FleetListComponent;
  let fixture: ComponentFixture<FleetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetListComponent ],
      providers: [
        { provide: FleetService, useClass: FleetRestService }
      ],
      imports: [
        TableModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
