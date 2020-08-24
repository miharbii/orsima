import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AjoutElementService {

  nomAModifier: string;
  prenomAModifier: string;
  nomPrenomAModifier: string;
  modifier: boolean;
  constructor() {
    this.modifier = false;
    this.nomAModifier = '';
    this.prenomAModifier = '';
    this.nomPrenomAModifier = '';
   }

  getNomPrenomAModifier( nomPrenom: string): void {
    this.nomPrenomAModifier = nomPrenom;
  }
}
