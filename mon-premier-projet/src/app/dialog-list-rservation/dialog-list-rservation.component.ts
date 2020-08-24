import { SessionService } from './../session.service';
import { Component, OnInit } from '@angular/core';
import { CalendrierComponent } from '../calendrier/calendrier.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-list-rservation',
  templateUrl: './dialog-list-rservation.component.html',
  styleUrls: ['./dialog-list-rservation.component.scss']
})
export class DialogListRservationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CalendrierComponent>, public sessionService: SessionService) { }

  ngOnInit(): void {
  }

  annuler(): void{
    this.dialogRef.close();
  }

}
