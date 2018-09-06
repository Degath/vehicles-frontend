import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fleet } from '@app/shared/models/fleet';

@Injectable()
export abstract class FleetService {

  public getFleets: () => Observable<Fleet[]>;

  public addFleet: (fleet: Fleet) => Observable<Fleet>;
}
