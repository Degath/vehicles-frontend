import { Injectable } from "@angular/core";
import { FleetService } from "@app/core/fleets/fleet.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@env/environment";
import { FleetDto } from "@app/shared/dtos/fleet-dto";

@Injectable()
export class FleetRestService implements FleetService {

    public constructor(private http: HttpClient) {
    }

    public getFleets(): Observable<FleetDto[]> {
        return this.http.get<FleetDto[]>(environment.api + '/fleets');
    }

    public addFleet(fleetDto: FleetDto): Observable<FleetDto> {
        return this.http.post<FleetDto>(environment.api + '/fleets', fleetDto);
      }
}
