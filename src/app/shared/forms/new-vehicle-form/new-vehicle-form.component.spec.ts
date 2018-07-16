import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVehicleFormComponent } from '@app/shared/forms/new-vehicle-form/new-vehicle-form.component';

describe('NewVehicleFormComponent', () => {
  let component: NewVehicleFormComponent;
  let fixture: ComponentFixture<NewVehicleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVehicleFormComponent ]
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
