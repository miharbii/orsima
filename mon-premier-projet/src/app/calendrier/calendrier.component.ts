import { SessionService } from './../session.service';
import { DialogListRservationComponent } from './../dialog-list-rservation/dialog-list-rservation.component';
import { StagiaireFormateurService } from './../stagiaire-formateur.service';
import { ListStagiaireComponent } from './../list-stagiaire/list-stagiaire.component';
import { SidenavService } from './../sidenav.service';
import { FormateurService } from './../formateur.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Reservation } from 'src/Thing.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


interface Pokemon {
  value: string[];
  viewValue: string[];
}
interface PokemonGroup {
  name: string;
  pokemon: Pokemon[];
}


@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {

  minDate = new Date();
  dateDebut: Date;
  dateFin: Date;
  // vraiMois: number;
  heureDebut: string;
  heureFin: string;
  formateurInterneChoisi: string;
  formateurExterneChoisi: string;
  supportCours: string;
  pauseDejeuner: string ;
  sessionVide: boolean;
  typeDeFormateur: string;
  stagiaireSelectionner: string[];
  tousReservation: Reservation[];




  constructor(public formateurService: FormateurService, public sidenavService: SidenavService,
              public dialog: MatDialog, private http: HttpClient, public stagiaireFormateurService: StagiaireFormateurService,
              private snackBar: MatSnackBar, public sessionService: SessionService) {
  this.dateDebut = new Date() ;
  this.sessionService.vraiMois = this.dateDebut.getMonth() + 1;
  this.dateFin = new Date();
  this.heureDebut = '08:30';
  this.heureFin = '17:30';
  this.sidenavService.formateurInterne = true ;
  this.sidenavService.formateurExterne = false ;
  this.sessionVide =  true ;
  this.formateurInterneChoisi = '';
  this.formateurExterneChoisi = '';
  this.typeDeFormateur = '';
  this.sidenavService.typeDeFormateurCalendrier = 'intere';
  // this.sidenavService.typeDeFormateurCalendrier = '';
  this.supportCours = '';
  this.stagiaireSelectionner = [''];
  // this.stagiaireFormateurService.stagiaireSelectionnerCalendrier = [''];
  this.pauseDejeuner = '';


  }



  pokemonControl = new FormControl();

  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Interne',
      pokemon: [
        {value: this.formateurService.nomPrenomFormateurInterne, viewValue: this.formateurService.nomPrenomFormateurInterne},
      ]
    },
    {
      name: 'Externe',
      pokemon: [
        {value: this.formateurService.nomPrenomFormateurExterne, viewValue: this.formateurService.nomPrenomFormateurExterne},
      ]
    },
  ];


  ngOnInit(): void {
  }
  monFiltreDebut = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 5 && day !== 6;
  }
  monFiltrefin = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 5 && day !== 6;
  }

  essaieDateDebut(): void{
    console.log(this.heureDebut);
    console.log(this.pauseDejeuner);
  }


  openDialogueListStagiaire(): void{
    this.dialog.open(ListStagiaireComponent, { disableClose: true });
  }

  openDialogueListReservation(): void{
    this.dialog.open(DialogListRservationComponent, { disableClose: true });

  }

  async postReservation(reservation: Reservation){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/reservation', reservation).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  testPourFomateur(): void{

  }
  async enregistrer(): Promise<void> {

    console.log(this.minDate.getMonth());
    this.sessionService.vraiMois = this.dateDebut.getMonth() + 1;
    const dateCompletDebut = this.dateDebut.getDate() + '/' + this.sessionService.vraiMois + '/' +  this.dateDebut.getFullYear() + '-' ;
    const dateCompletFin = this.dateFin.getDate() + '/' + this.sessionService.vraiMois + '/' +  this.dateFin.getFullYear() ;
    this.typeDeFormateur = this.sidenavService.typeDeFormateurCalendrier;
    this.stagiaireSelectionner = this.stagiaireFormateurService.stagiaireSelectionnerCalendrier;
    if ( this.sidenavService.formateurInterne){
      this.formateurExterneChoisi = '';

      const reservation: Reservation = {
        date: dateCompletDebut + dateCompletFin,
        heureDebut: this.heureDebut,
        heureFin: this.heureFin,
        typeFormateur: this.sidenavService.typeDeFormateurCalendrier,
        nomFormateur: this.formateurInterneChoisi,
        supportDeCours: this.supportCours,
        nomDesStagiaires: this.stagiaireSelectionner,
        pauseDejeuner: this.pauseDejeuner,
      };
      if (this.dateDebut !== null && this.dateFin !== null && this.heureDebut !== '' && this.heureFin !== '' &&
        this.typeDeFormateur !== '' && this.formateurInterneChoisi !== '' &&
        this.supportCours !== '' && this.stagiaireFormateurService.stagiaireSelectionnerCalendrier.length !== 0  &&
        this.pauseDejeuner !== ''){

          this.openSnackBarFonctionne();
          console.log(this.sessionService.vraiMois);
          await this.postReservation(reservation);
          this.renitialiserSession();

      } else {
        this.openSnackBarFonctionnePas();
      }

    } else if (  this.sidenavService.formateurExterne){
      this.formateurInterneChoisi = '';
      const reservation: Reservation = {
        date: dateCompletDebut + dateCompletFin,
        heureDebut: this.heureDebut,
        heureFin: this.heureFin,
        typeFormateur: this.sidenavService.typeDeFormateurCalendrier,
        nomFormateur: this.formateurExterneChoisi,
        supportDeCours: this.supportCours,
        nomDesStagiaires: this.stagiaireSelectionner,
        pauseDejeuner: this.pauseDejeuner,
      };
      if (this.dateDebut !== null && this.dateFin !== null && this.heureDebut !== '' && this.heureFin !== '' &&
      this.typeDeFormateur !== '' && this.formateurExterneChoisi !== '' &&
      this.supportCours !== '' && this.stagiaireFormateurService.stagiaireSelectionnerCalendrier.length !== 0  &&
      this.pauseDejeuner !== ''){
        // this.sessionVide = true;

        this.openSnackBarFonctionne();
        await this.postReservation(reservation);
        this.renitialiserSession();

      } else {
        this.openSnackBarFonctionnePas();
       }
    }

  }

  renitialiserSession(): void {
    if ( this.sidenavService.formateurInterne){
      this.dateDebut = new Date() ;
      this.dateFin = new Date()  ;
      this.heureDebut = '08:30';
      this.heureFin = '17:30';
      this.typeDeFormateur = '';
      this.formateurInterneChoisi = '';
      this.supportCours = '';
      this.stagiaireFormateurService.stagiaireSelectionnerCalendrier.length = 0;
      this.pauseDejeuner = '';
    } else  if ( this.sidenavService.formateurExterne){
      this.dateDebut = new Date() ;
      this.dateFin = new Date() ;
      this.heureDebut = '08:30';
      this.heureFin = '17:30';
      this.typeDeFormateur = '';
      this.formateurExterneChoisi = '';
      this.supportCours = '';
      this.stagiaireFormateurService.stagiaireSelectionnerCalendrier.length = 0;
      this.pauseDejeuner = '';
    }

  }

  openSnackBarFonctionne(): void{
    this.snackBar.open('Session créée!', '', {duration: 2000, });
  }
  openSnackBarFonctionnePas(): void {
    this.snackBar.open('Session non créée veuillez remplir toutes les cases  !', '', {duration: 3000, });

  }
  async getReservation() {
    // this.static = true;
    this.sessionService.tousReservation = await this.http.get<Reservation[]>('http://localhost:3000/api/reservation').toPromise();
    // console.log(this.tousReservation);
    this.sessionService.insererReservation();
    console.log(this.sessionService.touteLaReservationBD);

    return this.sessionService.tousReservation;
  }
}
