import { CoursService } from './../cours.service';
import { AjoutElementService } from './../ajout-element.service';
import { AjoutElementComponent } from './../ajout-element/ajout-element.component';
import { Stagiare } from './../../Thing.model';
import { StagiareService } from './../stagiare.service';
import { SidenavService } from './../sidenav.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';



let RECHERCHE: string [];

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent implements OnInit {
  nom: string;
  prenom: string;
  compagnie: string;
  tousStagiaire: Stagiare[];

  stagiaireForm: FormGroup = this.formBuilder.group({
    stagiaireGroup: '',
  });
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;


  constructor(private formBuilder: FormBuilder, private sidenavService: SidenavService,
              private http: HttpClient, public stagiareService: StagiareService, public dialog: MatDialog,
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
    if ( this.sidenavService.stagiaireOuvert) {
      RECHERCHE = this.stagiareService.nomPrenomStagiaire.filter(option => option.toLowerCase().indexOf(filterValue) === 0);

    }
    return RECHERCHE;

  }

  openDialog(): void {
    this.ajoutElementService.modifier = false;
    this.dialog.open(AjoutElementComponent, { disableClose: true });
    console.log(this.ajoutElementService.modifier);
  }

}
