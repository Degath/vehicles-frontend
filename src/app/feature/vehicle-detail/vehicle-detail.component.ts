import { Component, OnInit, Input } from '@angular/core';
import { VehiclesService } from '@app/core/vehicles/vehicles.service';
import { VehicleDto } from '@app/shared/dtos/vehicle-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  givenId: string;
  selectedVehicleDto: VehicleDto
  constructor(private vehiclesService: VehiclesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getVehicleId();
    this.getVehicleDetails(this.givenId);
  }

  getVehicleId() {
    this.activatedRoute.params.subscribe(params => {
      this.givenId = params["id"];
    });
  }

  public getVehicleDetails(givenId: string) {
    this.vehiclesService.getVehicle(givenId).subscribe(
      vehicle => {
        this.selectedVehicleDto = VehicleDto.from(vehicle);
      }
    );
  }
}
