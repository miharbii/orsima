import { AjoutElementService } from './../ajout-element.service';
import { MainViewComponent } from './../main-view/main-view.component';
// import { Stagiare } from './../../Thing.model';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StagiaireComponent } from '../stagiaire/stagiaire.component';
import { Stagiare } from './../../Thing.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajout-element',
  templateUrl: './ajout-element.component.html',
  styleUrls: ['./ajout-element.component.scss']
})
export class AjoutElementComponent implements OnInit {
  nom: string;
  nomModifier: string;
  prenom: string;
  prenomModifier: string;
  compagnie: string;
  compagnieModifier: string;
  nomPrenom: string;
  nomPrenomModifier: string;
  tousStagiaire: Stagiare[];


  constructor( public dialogRef: MatDialogRef<StagiaireComponent>, public dialogRefMain: MatDialogRef<MainViewComponent>,
               private http: HttpClient, public ajoutElementService: AjoutElementService ) {
    this.nom = '';
    this.nomModifier = '';
    this.prenom = '';
    this.prenomModifier = '';
    this.compagnie = '';
    this.compagnieModifier = '';
    this.nomPrenomModifier = '';
    this.nomPrenom = '';
    this.tousStagiaire = [];
  }

  ngOnInit(): void {
  }

  annuler(): void {
    this.dialogRef.close();
  }
  async enregistrer(): Promise<void> {
    const stagiare: Stagiare = {
      nom: this.nom,
      prenom: this.prenom,
      compagnie: this.compagnie,
      nomPrenom: this.nom + ' ' + this.prenom,
    };

    if ( !this.ajoutElementService.modifier) {
      if ( this.nom !== '' && this.prenom !== '' && this.compagnie !== '') {
        this.dialogRef.close();
        await this.postStagiaire(stagiare);
        console.log('psss');
      }
    } else if ( this.ajoutElementService.modifier) {
      if ( this.nom !== '' && this.prenom !== '' && this.compagnie !== '') {
        this.dialogRefMain.close();
        console.log(stagiare.nomPrenom);
        await this.modifyThing(this.ajoutElementService.nomPrenomAModifier, stagiare);
      }
    }
    this.ajoutElementService.modifier = false;
    console.log(  this.ajoutElementService.modifier);

  }
  async postStagiaire(stagiare: Stagiare){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/tousStagiare', stagiare).subscribe(
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

  modifyThing(nomPrenom: string, stagiaire: Stagiare) {
    console.log(stagiaire);
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3000/api/stuff/' + nomPrenom, stagiaire).subscribe(
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
