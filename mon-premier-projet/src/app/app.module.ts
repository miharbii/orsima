import { MaterialModule } from './material/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import { FlexLayoutModule } from '@angular/flex-layout';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarreRechercheComponent } from './barre-recherche/barre-recherche.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { FormateurComponent } from './formateur/formateur.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { AjoutElementComponent } from './ajout-element/ajout-element.component';
import { AjoutFormateurComponent } from './ajout-formateur/ajout-formateur.component';
import { ListStagiaireComponent } from './list-stagiaire/list-stagiaire.component';
import { DialogListRservationComponent } from './dialog-list-rservation/dialog-list-rservation.component';
// import { CalendrierComponent } from './calendrier/calendrier.component';




@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    BarreRechercheComponent,
    CalendrierComponent,
    FormateurComponent,
    StagiaireComponent,
    AjoutElementComponent,
    AjoutFormateurComponent,
    ListStagiaireComponent,
    DialogListRservationComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxMaterialTimepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
