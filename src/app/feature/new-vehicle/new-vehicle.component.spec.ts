import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVehicleComponent } from '@app/feature/new-vehicle/new-vehicle.component';
import { SharedModule } from '@app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewVehicleComponent', () => {
  let component: NewVehicleComponent;
  let fixture: ComponentFixture<NewVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewVehicleComponent
      ],
      imports: [
        SharedModule,
        HttpClientTestingModule
      ],
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
