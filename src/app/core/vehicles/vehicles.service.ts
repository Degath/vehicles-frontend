import { Injectable } from '@angular/core';
import { Vehicle } from '@app/shared/models/vehicle';
import { Observable } from 'rxjs';

@Injectable()
export abstract class VehiclesService {

  public getVehicles: () => Observable<Vehicle[]>;

  public addVehicle: (vehicle: Vehicle) => Observable<Vehicle>;

}
