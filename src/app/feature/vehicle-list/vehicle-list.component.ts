import { Component, OnInit } from '@angular/core';
import { Vehicle } from '@app/shared/models/vehicle';
import { VehiclesService } from '@app/core/vehicles/vehicles.service';
import { VehicleDto } from '@app/shared/dtos/vehicle-dto';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[] =[];
  selectedVehicleDto: VehicleDto;
  columns: any[];


  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.columns = [
      { field: 'manufacturer', header: 'Manufacturer' },
      { field: 'model', header: 'Model' },
      { field: 'capacity', header: `Capacity` },
      { field: 'power', header: `Power` },
      { field: 'transmission', header: `Transmission` },
      { field: 'productionYear', header: `Production Year` }
    ];
    this.loadVehiclesData();
  }

  loadVehiclesData() {
    this.vehiclesService.getVehicles().subscribe(response => {
      response.forEach(vehicle => {
        this.vehicles.push(VehicleDto.from(vehicle));
      });
    });
  }


}
