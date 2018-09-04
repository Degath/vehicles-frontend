import { Component, OnInit } from '@angular/core';
import { Fleet } from '@app/shared/models/fleet';
import { FleetService } from '@app/core/fleets/fleet.service';
import { FleetDto } from '@app/shared/dtos/fleet-dto';

@Component({
  selector: 'app-fleet-list',
  templateUrl: './fleet-list.component.html',
  styleUrls: ['./fleet-list.component.css']
})
export class FleetListComponent implements OnInit {

  fleets: Fleet[] = [];
  columns: any[];

  constructor(private fleetService: FleetService) { }

  ngOnInit() {
    this.columns = [
      { field: 'name', header: 'Name' }
    ];
    this.loadFleetsData();
  }

  loadFleetsData() {
    this.fleetService.getFleets().subscribe(fleets => {
      fleets.forEach(fleet => {
        this.fleets.push(FleetDto.from(fleet))
      });
    });
  }
}
