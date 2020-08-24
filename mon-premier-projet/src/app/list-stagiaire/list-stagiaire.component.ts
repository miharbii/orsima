import { StagiaireFormateurService } from './../stagiaire-formateur.service';
import { CalendrierComponent } from './../calendrier/calendrier.component';
import { StagiareService } from './../stagiare.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-stagiaire',
  templateUrl: './list-stagiaire.component.html',
  styleUrls: ['./list-stagiaire.component.scss']
})
export class ListStagiaireComponent implements OnInit {

  stagiaireSelectionne: string[];
  constructor(public stagiareService: StagiareService,  public dialogRef: MatDialogRef<CalendrierComponent>,
              public stagiaireFormateurService: StagiaireFormateurService) {
    this.stagiaireSelectionne = [''];
   }

  ngOnInit(): void {
  }

  tets(): void{
    // this.stagiaireSelectionne += event;
    console.log(this.stagiaireSelectionne);
    this.stagiaireFormateurService.stagiaireSelectionnerCalendrier = this.stagiaireSelectionne;
    this.dialogRef.close();
  }
  onNgModelChange(event): void{
    console.log(event);
  }
  annuler(): void{
    this.stagiaireSelectionne = [];
    this.dialogRef.close();
  }
}
