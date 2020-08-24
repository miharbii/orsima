import { Formateur } from './../Thing.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StagiaireFormateurService } from './stagiaire-formateur.service';
// import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  tousFormateurInterne: Formateur[];
  tousFormateurExterne: Formateur[];
  unFormateur: Formateur;
  formateurSelectionner: boolean;
  nomFormateur: string[] = [''];
  prenomFormateur: string[] = [''];
  nomPrenomFormateurInterne: string[] = [''];
  nomPrenomFormateurExterne: string[] = [''];


  constructor( private http: HttpClient,public stagiaireFormateurService: StagiaireFormateurService ) { }

  insererNomPrenomInterne(): void{
    for ( let i = 0; i < this.tousFormateurInterne.length ; i++) {
      this.nomPrenomFormateurInterne[i] = this.tousFormateurInterne[i].nom  + ' ' + this.tousFormateurInterne[i].prenom;
    }
  }

  insererNomPrenomExterne(): void{
    for ( let i = 0; i < this.tousFormateurExterne.length ; i++) {
      this.nomPrenomFormateurExterne[i] = this.tousFormateurExterne[i].nom  + ' ' + this.tousFormateurExterne[i].prenom;
    }
  }

  async getFormateurInterne() {
    this.tousFormateurInterne = await this.http.get<Formateur[]>('http://localhost:3000/api/tousFormateurInterne').toPromise();
    console.log(this.tousFormateurInterne);
    this.insererNomPrenomInterne();
    return this.tousFormateurInterne;
  }

  async getFormateurExterne() {
    this.tousFormateurExterne = await this.http.get<Formateur[]>('http://localhost:3000/api/tousFormateurExterne').toPromise();
    console.log(this.tousFormateurExterne);
    this.insererNomPrenomExterne();
    return this.tousFormateurExterne;
  }
  async formateureSelectionne(nomPrenom: string){
    this.stagiaireFormateurService.formateurSelectionner = true;
    this.stagiaireFormateurService.stagiaireSelectionner = false;

    console.log('la fatigue');
    this.unFormateur = await this.http.get<Formateur>('http://localhost:3000/api/unFormateur/' + nomPrenom ).toPromise();

    // console.log(this.unFormateur.nomPrenom);
  }

}
