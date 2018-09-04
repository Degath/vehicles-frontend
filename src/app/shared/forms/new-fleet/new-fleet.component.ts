import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Fleet } from '@app/shared/models/fleet';
import { FleetService } from '@app/core/fleets/fleet.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-fleet',
  templateUrl: './new-fleet.component.html',
  styleUrls: ['./new-fleet.component.css']
})
export class NewFleetComponent implements OnInit {

  @Output() public fleetSubmitted: EventEmitter<Fleet> = new EventEmitter<Fleet>();
  private fleet: Fleet = new Fleet();

  constructor(private fleetService: FleetService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService ) {}

  ngOnInit() {
  }

  clearForm() {
    this.fleet = new Fleet();
  }


  onSubmit() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to add this fleet? The changes are irreversible!',
      accept: () => {
        this.addFleet();
      }
    });
  }

  addFleet() {
    this.fleetService.addFleet(this.fleet).subscribe(data => {
      this.fleetSubmitted.emit(this.fleet);
      this.messageService.add({ severity: 'success', summary: 'Add fleet', detail: 'Fleet submitted' });
    });
  }
}
