import { Injectable } from '@angular/core';
import { Reservation } from 'src/Thing.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  touteLaReservationBD: string [];
  tousReservation: Reservation[];
  nomPrenomStagiaireBD: string[][];
  dateBD: string[];
  heureBD: string[];
  FormateurBD: string[];
  supportCoursBD: string[];
  pauseBD: string[];
  vraiMois: number;

  constructor() {
    this.touteLaReservationBD = [];
    this.nomPrenomStagiaireBD = [];
    this.dateBD = [];
    this.heureBD = [];
    this.FormateurBD = [];
    this.supportCoursBD = [];
    this.pauseBD = [];
    this.touteLaReservationBD = [];

  }
  insererReservation(): void{
    console.log(this.tousReservation.length);
    for ( let i = 0; i < this.tousReservation.length ; i++) {
      this.nomPrenomStagiaireBD[i] = this.tousReservation[i].nomDesStagiaires;
      this.dateBD[i] = ' date: ' + this.tousReservation[i].date ;
      this.heureBD[i] = ` debut de l'heur: ` + this.tousReservation[i].heureDebut + ` fin de l'heur` + this.tousReservation[i].heureFin  ;
      this.FormateurBD[i] = ' type de formateur: ' + this.tousReservation[i].typeFormateur + ' nom et prenom: ' + 
      this.tousReservation[i].nomFormateur ;
      this.supportCoursBD[i] = ' support de cours: ' + this.tousReservation[i].supportDeCours ;
      this.pauseBD[i] = ' pause dejeuner: ' + this.tousReservation[i].pauseDejeuner ;
      this.touteLaReservationBD[i] = this.FormateurBD[i] + this.nomPrenomStagiaireBD[i] + this.dateBD[i] + this.heureBD[i] +
      this.supportCoursBD[i] + this.pauseBD[i] ;
      console.log(this.tousReservation[i].heureFin);
    }
  
  }
}
