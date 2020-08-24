import { StagiareService } from './stagiare.service';
import { SideNav, CatalogueFormation } from './enum';
import { Injectable } from '@angular/core';


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
  constructor(public stagiareService: StagiareService) {
    this.calendrierOuvert = false;
    this.catalogueDeFormationOuvert = false;
    this.formateurOuvert = false;
    this.stagiaireOuvert = false;
    this.dellOuvert = false;
    this.fortinetOuvert = false;
    this.microsoftOuvert = false;
    this.veritasOuvert = false;
    this.vmwareOuvert = false;
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
                                this.stagiareService.stagiereSelectionner = false;
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
                                            this.stagiareService.stagiereSelectionner = false;

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
                              this.stagiareService.stagiereSelectionner = false;

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
                              this.stagiareService.stagiereSelectionner = false;
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
}
