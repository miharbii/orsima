import { CoursService } from './../cours.service';
// import { StagiareService } from './../stagiare.service';
import { SidenavService } from './../sidenav.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {startWith, map} from 'rxjs/operators';



let RECHERCHE: string [];


@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.scss']
})
export class BarreRechercheComponent implements OnInit {

  stateForm: FormGroup = this.formBuilder.group({
  stateGroup: '',
  });
  myControl = new FormControl();
  dell: string[] = ['DELL EMC Unity Implementation and Administration', 'DELL EMC VxRail Appliance Administration and Management', 'DELL EMC Data Domain System Administration',
   'DELL EMC Networker Implementation and Management', 'DELL EMC Avamar Management', 'DELL EMC SC Series Implementation and Administration',
  'DELL EMC RecoverPoint', 'DELL EMC M1000eInstallation, Administration and Troubleshooting', 'DELL Networking Data Center Advanced Features & Administration', 'DELL Networking Campus'];
  fortinet: string[] = ['FortiGate Infrastructure', 'FortiGate Security', 'FortiADC', 'FortiWeb'];
  microsoft: string[] = ['Implementing a Software-Defined Datacenter', 'SQL Server Administering a SQL Database Infrastructure', 'System Center Operation Manager',
  'System Center Configuration Manager', 'System Center Service Manager', 'Installation, Storage, and Compute with Windows Server 2016', 'Identity with Windows Server 2016',
  'Office 365 Administration and Troubleshooting', 'Administration de Microsoft Exchange Server'];
  veritas: string[] = ['Veritas Backup Exec Administration', 'Veritas NetBackup'];
  vmWare: string[] = ['VMware vSphere Install, Configure and Manage', 'VMware vSAN deploy and manage', 'VMware NSX Install, Configure, Manage', 'VMware vSphere troubleshooting workshop',
  'VMware vCenter Site Recovery Manager', 'VMware vRealize Operations'];
  filteredOptions: Observable<string[]>;


  constructor(public sidenavService: SidenavService,  private formBuilder: FormBuilder,
              public coursService: CoursService) {}
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (this.sidenavService.dellOuvert){
      this.dell.sort();
      RECHERCHE = this.dell.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    } else if ( this.sidenavService.fortinetOuvert) {
      this.fortinet.sort();
      RECHERCHE = this.fortinet.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    } else if ( this.sidenavService.microsoftOuvert) {
      this.microsoft.sort();
      RECHERCHE = this.microsoft.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    } else if ( this.sidenavService. veritasOuvert) {
      this.veritas.sort();
      RECHERCHE = this.veritas.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    } else if ( this.sidenavService.vmwareOuvert) {
      this.vmWare.sort();
      RECHERCHE = this.vmWare.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    return RECHERCHE;
  }
}
