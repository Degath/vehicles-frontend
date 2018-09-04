import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFleetComponent } from './new-fleet.component';
import { FleetService } from '@app/core/fleets/fleet.service';
import { FleetRestService } from '@app/core/fleets/fleet-rest.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

describe('NewFleetComponent', () => {
  let component: NewFleetComponent;
  let fixture: ComponentFixture<NewFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFleetComponent ],
      imports: [
        ConfirmDialogModule,
        ToastModule
      ],
      providers: [
        { provide: FleetService, useClass: FleetRestService },
        ConfirmationService,
        MessageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
