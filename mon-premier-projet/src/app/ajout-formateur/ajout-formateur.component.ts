import { FormateurService } from './../formateur.service';
import { SidenavService } from './../sidenav.service';
import { Formateur } from './../../Thing.model';
import { FormateurComponent } from './../formateur/formateur.component';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AjoutElementService } from '../ajout-element.service';
import { HttpClient } from '@angular/common/http';
import { MainViewComponent } from '../main-view/main-view.component';

@Component({
  selector: 'app-ajout-formateur',
  templateUrl: './ajout-formateur.component.html',
  styleUrls: ['./ajout-formateur.component.scss']
})
export class AjoutFormateurComponent implements OnInit {
  nom: string ;
  prenom: string;
  nomPrenom: string;
  typeInterne: boolean;

  constructor(public dialogRef: MatDialogRef<FormateurComponent>, public ajoutElementService: AjoutElementService,
              private http: HttpClient, public sidenavService: SidenavService,
              public dialogRefMain: MatDialogRef<MainViewComponent>) {
    this.nomPrenom = '';
    this.prenom = '';
    this.nom = '';
    this.typeInterne = false;
  }

  ngOnInit(): void {
  }
  async enregistrer(): Promise<void> {
    const formateur: Formateur = {
      nom: this.nom,
      prenom: this.prenom,
      typeInterne: this.sidenavService.formateurInterne,
      nomPrenom: this.nom + ' ' + this.prenom,
    };

    if ( !this.ajoutElementService.modifier) {
      if ( this.nom !== '' && this.prenom !== '') {
        this.dialogRef.close();
        await this.postFormateur(formateur);
        console.log('psss');
      }
    } else if ( this.ajoutElementService.modifier) {
      if ( this.nom !== '' && this.prenom !== '' ) {
        this.dialogRefMain.close();
        // console.log(stagiare.nomPrenom);
        await this.modifyFormateur(this.ajoutElementService.nomPrenomAModifier, formateur);
      }
    }
    this.ajoutElementService.modifier = false;
    console.log(  this.ajoutElementService.modifier);


  }

  annuler(): void {
    this.dialogRef.close();
  }

  async postFormateur(formateur: Formateur){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/tousFormateur', formateur).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  modifyFormateur(nomPrenom: string, formateur: Formateur) {
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/api/modifierFormateur/' + nomPrenom, formateur).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
