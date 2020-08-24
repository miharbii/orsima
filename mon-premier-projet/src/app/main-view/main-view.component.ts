import { CoursService } from './../cours.service';
import { AjoutFormateurComponent } from './../ajout-formateur/ajout-formateur.component';
import { FormateurService } from './../formateur.service';
import { AjoutElementService } from './../ajout-element.service';
import { StagiareService } from './../stagiare.service';
import { Stagiare } from './../../Thing.model';
import { SidenavService } from './../sidenav.service';
import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AjoutElementComponent } from '../ajout-element/ajout-element.component';
import { StagiaireFormateurService } from '../stagiaire-formateur.service';

declare var require: any;

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {
  nom: string;
  prenom: string;
  compagnie: string;
  nomPrenom: string;
  tousStagiaire: Stagiare[];
  // private http: Http;
  constructor(public sidenavService: SidenavService, private http: HttpClient,
              public stagiareService: StagiareService, public dialog: MatDialog,
              public ajoutElementService: AjoutElementService, public formateurService: FormateurService,
              public coursService: CoursService, public stagiaireFormateurService: StagiaireFormateurService) {
    this.nom = '';
    this.prenom = '';
    this.compagnie = '';
    this.nomPrenom = this.nom + ' ' + this.prenom;
    this.tousStagiaire = [];
    this.stagiareService.getStagiaire();
    this.formateurService.getFormateurInterne();
    this.formateurService.getFormateurExterne();


  }






  supprimerStagiere(nomPrenom: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/api/supprimerStagiare/' + nomPrenom).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  supprimerFormateur(nomPrenom: string) {
    console.log (' est ce quei passe');
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/api/supprimerFormateur/' + nomPrenom).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

// modifier

  onModifier(): void{
    this.ajoutElementService.modifier = true;
    this.dialog.open(AjoutElementComponent, { disableClose: true });
    console.log( this.ajoutElementService.modifier );
  }
  onModifierFormateur(): void {
    this.sidenavService.formateurInterne = true;
    this.sidenavService.formateurExterne = false;
    this.ajoutElementService.modifier = true;
    this.dialog.open(AjoutFormateurComponent, { disableClose: true });

  }
}

