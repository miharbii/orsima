import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StagiaireFormateurService {

  formateurSelectionner: boolean;
  stagiaireSelectionner: boolean;
  stagiaireSelectionnerCalendrier: string[];
  constructor() {
    this.stagiaireSelectionnerCalendrier = [];
   }
}
