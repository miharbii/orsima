import { CoursService } from './../cours.service';
import { FormateurService } from './../formateur.service';
import { AjoutFormateurComponent } from './../ajout-formateur/ajout-formateur.component';
import { AjoutElementService } from './../ajout-element.service';
// import { AjoutElementComponent } from './../ajout-element/ajout-element.component';
import { Stagiare } from './../../Thing.model';
// import { StagiareService } from './../stagiare.service';
import { SidenavService } from './../sidenav.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

let RECHERCHE: string [];


@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.scss']
})
export class FormateurComponent implements OnInit {
  nom: string;
  prenom: string;
  compagnie: string;
  tousStagiaire: Stagiare[];

  stagiaireForm: FormGroup = this.formBuilder.group({
    stagiaireGroup: '',
  });
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;




  constructor(private formBuilder: FormBuilder, public sidenavService: SidenavService,
              private http: HttpClient, public formateurService: FormateurService, public dialog: MatDialog,
              public ajoutElementService: AjoutElementService, public coursService: CoursService) {}

  ngOnInit(): void {
    console.log('ici');
    this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
    );
  }


  private _filter(value: string): string[] {

    const filterValue = value.toLowerCase();
    if (this.sidenavService.formateurOuvert) {
      if (this.sidenavService.formateurInterne) {
        RECHERCHE = this.formateurService.nomPrenomFormateurInterne.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      } else if (this.sidenavService.formateurExterne ) {
        RECHERCHE = this.formateurService.nomPrenomFormateurExterne.filter(option => option.toLowerCase().indexOf(filterValue) === 0);

      }

    }
    return RECHERCHE;

  }


  openDialog(): void {
    this.ajoutElementService.modifier = false;
    this.sidenavService.formateurInterne = true;
    this.sidenavService.formateurExterne = false;

    this.dialog.open(AjoutFormateurComponent, { disableClose: true });
  }

}
