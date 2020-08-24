import { SidenavService } from './sidenav.service';
import { Stagiare } from './../Thing.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASIC_URL = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class StagiareService {

  tousStagiaire: Stagiare[];
  unStagiaire: Stagiare;
  static: boolean;
  stagiereSelectionner: boolean;


  nomStagiaire: string[] = [''] ;
  prenomStagiaire: string[] = [''] ;
  nomPrenomStagiaire: string[] = [''] ;



  constructor( private http: HttpClient) {
    this.static = true;

  }

  insererNomPrenom(): void{

    for ( let i = 0; i < this.tousStagiaire.length ; i++) {
      this.nomPrenomStagiaire[i] = this.tousStagiaire[i].nom  + ' ' + this.tousStagiaire[i].prenom;

    }
  }
  async getStagiaire() {
      this.static = true;
      this.tousStagiaire = await this.http.get<Stagiare[]>('http://localhost:3000/api/tousStagiare').toPromise();
      console.log(this.tousStagiaire);
      this.insererNomPrenom();

      return this.tousStagiaire;
  }

  async selectionStagiere(nomPrenom: string){
    this.stagiereSelectionner = true;
    console.log('la fatigue');
    this.unStagiaire = await this.http.get<Stagiare>('http://localhost:3000/api/stuff/' + nomPrenom ).toPromise();

    console.log(this.unStagiaire);
  }

}
