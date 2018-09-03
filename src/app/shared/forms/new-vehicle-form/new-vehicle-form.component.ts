import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { SelectItem, SelectItemGroup, ConfirmationService, Message, MessageService } from 'primeng/api';
import { Vehicle } from '@app/shared/models/vehicle';
import { Manufacturer } from '@app/shared/models/manufacturer';
import { VehiclesService } from '@app/core/vehicles/vehicles.service';


@Component({
  selector: 'app-new-vehicle-form',
  templateUrl: './new-vehicle-form.component.html',
  styleUrls: ['./new-vehicle-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewVehicleFormComponent implements OnInit {

  @Output() public vehicleSubmitted: EventEmitter<Vehicle> = new EventEmitter<Vehicle>();
  private vehicle: Vehicle = new Vehicle();
  private currentYear: number = new Date().getFullYear();
  private transmissions: SelectItem[] = [
    { label: 'Automatic', value: 'AUTOMATIC' },
    { label: 'Manual', value: 'MANUAL' }
  ];
  private manufacturers: Manufacturer[] = [
    new Manufacturer("Audi", ["A3", "A4", "A5", "A6"]),
    new Manufacturer("BMW", ["M3", "M5"]),
    new Manufacturer("Seat", ["Leon", "Toledo"]),
  ];
  private filteredManufacturers: any[];
  private filteredModels: any[];

  constructor(private vehiclesService: VehiclesService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.clearForm();
  }

  clearForm() {
    this.vehicle = new Vehicle();
    this.vehicle.productionYear = this.currentYear;
    this.vehicle.power = 100;
  }

  filterManufacturers(event) {
    this.filteredManufacturers = [];
    for (let i = 0; i < this.manufacturers.length; i++) {
      let manufacturer = this.manufacturers[i].name;
      if (this.propertyContainsValueFromEvent(manufacturer, event))  {
        this.filteredManufacturers.push(manufacturer);
      }
    }
  }

  filterModels(event) {
    this.filteredModels = [];
    for (let manufacturer of this.manufacturers) {
      if (manufacturer.name === this.vehicle.manufacturer) {
        for (let model of manufacturer.models) {
          if (this.propertyContainsValueFromEvent(model, event)) {
            this.filteredModels.push(model);
          }
        }
      }
    }
  }

  propertyContainsValueFromEvent (input: string, event: any) {
    return input.toLowerCase().includes(event.query.toLowerCase());
  }
  

  onSubmit() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to add this vehicle? The changes are irreversible!  ',
      accept: () => {
        this.addVehicle();
      }
    });
  }

  addVehicle() {
    this.vehiclesService.addVehicle(this.vehicle).subscribe(data => {
      this.vehicleSubmitted.emit(this.vehicle);
      this.messageService.add({ severity: 'success', summary: 'Add vehicle', detail: 'Vehicle submitted' });
    });
  }
}
