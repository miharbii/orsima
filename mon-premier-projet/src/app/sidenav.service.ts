import { FormateurService } from './formateur.service';
import { StagiareService } from './stagiare.service';
import { SideNav, CatalogueFormation, TypeFormateur, TypeFormateurString } from './enum';
import { Injectable } from '@angular/core';
import { StagiaireFormateurService } from './stagiaire-formateur.service';


@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  calendrierOuvert: boolean;
  catalogueDeFormationOuvert: boolean;
  formateurOuvert: boolean;
  stagiaireOuvert: boolean;
  dellOuvert: boolean;
  fortinetOuvert: boolean;
  microsoftOuvert: boolean;
  veritasOuvert: boolean;
  vmwareOuvert: boolean;
  formateurInterne: boolean;
  formateurExterne: boolean;
  typeDeFormateurCalendrier: string;
  constructor(public stagiareService: StagiareService, public formateurService: FormateurService,
              public stagiaireFormateurService: StagiaireFormateurService) {
    this.calendrierOuvert = false;
    this.catalogueDeFormationOuvert = false;
    this.formateurOuvert = false;
    this.stagiaireOuvert = false;
    this.dellOuvert = false;
    this.fortinetOuvert = false;
    this.microsoftOuvert = false;
    this.veritasOuvert = false;
    this.vmwareOuvert = false;
    this.formateurInterne = false;
    this.formateurExterne = false;
   }
  ouvrirSidNav(nav: SideNav): void{
    switch (nav) {
      case SideNav.CALENDRIER:  this.calendrierOuvert = !this.calendrierOuvert;
                                this.catalogueDeFormationOuvert = false;
                                this.formateurOuvert = false;
                                this.stagiaireOuvert = false;
                                this.dellOuvert = false;
                                this.fortinetOuvert = false;
                                this.microsoftOuvert = false;
                                this.veritasOuvert = false;
                                this.vmwareOuvert = false;
                                this.stagiaireFormateurService.stagiaireSelectionner = false;
                                this.stagiaireFormateurService.formateurSelectionner = false;
                                this.formateurExterne = false;
                                this.formateurInterne = false;

                                break;
      case SideNav.CATALOGUE_DE_FORMATION:  this.catalogueDeFormationOuvert = !this.catalogueDeFormationOuvert;
                                            this.calendrierOuvert = false;
                                            this.formateurOuvert = false;
                                            this.stagiaireOuvert = false;
                                            this.dellOuvert = false;
                                            this.fortinetOuvert = false;
                                            this.microsoftOuvert = false;
                                            this.veritasOuvert = false;
                                            this.vmwareOuvert = false;
                                            // this.stagiareService.stagiereSelectionner = false;
                                            // this.formateurService.formateurSelectionner = false;

                                            this.formateurExterne = false;
                                            this.formateurInterne = false;

                                            break;
      case SideNav.FORMATEUR: this.formateurOuvert = !this.formateurOuvert;
                              this.calendrierOuvert = false;
                              this.catalogueDeFormationOuvert = false;
                              this.stagiaireOuvert = false;
                              this.dellOuvert = false;
                              this.fortinetOuvert = false;
                              this.microsoftOuvert = false;
                              this.veritasOuvert = false;
                              this.vmwareOuvert = false;
                              // this.stagiareService.stagiereSelectionner = false;
                              // this.formateurService.formateurSelectionner = false;

                              this.formateurExterne = false;
                              this.formateurInterne = false;

                              break;
      case SideNav.STAGIAIRE: this.stagiaireOuvert = !this.stagiaireOuvert;
                              this.calendrierOuvert = false;
                              this.catalogueDeFormationOuvert = false;
                              this.formateurOuvert = false;
                              this.dellOuvert = false;
                              this.fortinetOuvert = false;
                              this.microsoftOuvert = false;
                              this.veritasOuvert = false;
                              this.vmwareOuvert = false;
                              // this.stagiareService.stagiereSelectionner = false;
                              // this.formateurService.formateurSelectionner = false;

                              this.formateurExterne = false;
                              this.formateurInterne = false;

                              break;
    }
  }
  ouvrirSidNavCatalogue(catalogue: CatalogueFormation): void {
    switch ( catalogue) {
      case CatalogueFormation.DELL: this.dellOuvert = !this.dellOuvert;
                                    this.fortinetOuvert = false;
                                    this.microsoftOuvert = false;
                                    this.veritasOuvert = false;
                                    this.vmwareOuvert = false;
                                    console.log( this.dellOuvert);
                                    break;
      case CatalogueFormation.FORTINET: this.fortinetOuvert = !this.fortinetOuvert;
                                        this.dellOuvert = false;
                                        this.microsoftOuvert = false;
                                        this.veritasOuvert = false;
                                        this.vmwareOuvert = false;
                                        console.log( this.dellOuvert);

                                        break;
      case CatalogueFormation.MICROSOFT:  this.microsoftOuvert = !this.microsoftOuvert;
                                          this.dellOuvert = false;
                                          this.fortinetOuvert = false;
                                          this.veritasOuvert = false;
                                          this.vmwareOuvert = false;
                                          console.log( this.dellOuvert);

                                          break;
      case CatalogueFormation.VERITAS:  this.veritasOuvert = !this.veritasOuvert;
                                        this.dellOuvert = false;
                                        this.fortinetOuvert = false;
                                        this.microsoftOuvert = false;
                                        this.vmwareOuvert = false;
                                        console.log( this.dellOuvert);

                                        break;
      case CatalogueFormation.VMWARE: this.vmwareOuvert = !this.vmwareOuvert;
                                      this.dellOuvert = false;
                                      this.fortinetOuvert = false;
                                      this.microsoftOuvert = false;
                                      this.veritasOuvert = false;
                                      console.log( this.dellOuvert);

    }
  }
  sidenavFormateur(typeFormateur: TypeFormateur): void {
    switch (typeFormateur) {
      case TypeFormateur.INTERNE: this.formateurInterne = !this.formateurInterne;
                                  this.formateurExterne = false;
                                  break;
      case TypeFormateur.EXTERNE: this.formateurExterne = !this.formateurExterne;
                                  this.formateurInterne = false;
                                  break;
    }
  }
  choisirTypeFormateur( type: string): void {
    switch (type ) {
      case TypeFormateurString.INTERNE: this.formateurInterne = true;
                                        this.typeDeFormateurCalendrier = TypeFormateurString.INTERNE;
                                        this.formateurExterne = false;
                                        break;
      case TypeFormateurString.EXTERNE: this.formateurExterne = true;
                                        this.typeDeFormateurCalendrier = TypeFormateurString.EXTERNE;

                                        this.formateurInterne = false;
    }
  }

}
