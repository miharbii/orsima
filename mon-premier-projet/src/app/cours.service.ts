import { StagiaireFormateurService } from './stagiaire-formateur.service';
import { SidenavService } from './sidenav.service';
import { Injectable } from '@angular/core';
import { CoursDELL, CoursFortinet, CoursMicrosoft, coursVeritas, CoursVmware } from './enum';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  VMwareNSXInstallConfigureManage: boolean;
  VMwarevCenterSiteRecoveryManager: boolean;
  VMwarevRealizeOperations: boolean;
  VMwarevSANdeployandmanage: boolean;
  VMwarevSphereInstallConfigureandManage: boolean;
  VMwarevSpheretroubleshootingworkshop: boolean;
  dellEmcAvamarManagement: boolean;
  dellEmcDataDomainSystemeAdminitration: boolean;
  dellEmcM1000eInstallationAdministationTrousbleshooting: boolean;
  dellEmcNetworkerImplementationManagement: boolean;
  dellEmcRecoverPoint: boolean;
  dellEmcScSeriesImplenetationAdministration: boolean;
  dellEmcUnityImplementationADMINISTRATION: boolean;
  dellEmcVxrailApplianceAdministrationManagement: boolean;
  dellNetworkingCampus: boolean;
  dellNetworkingDataCenterAdvancedFeaturesAdministration: boolean;
  fortiAdc: boolean;
  fortiGateInfrastructure: boolean;
  fortiGateSecutity: boolean;
  fortiWeb: boolean;
  AdministrationMicrosoftExchangeServer: boolean;
  IdentityWindowsServer2016: boolean;
  ImplementingSoftwareDefinedDatacenter: boolean;
  InstallationStorageComputeWindowsServer2016: boolean;
  Office365AdministrationTroubleshooting: boolean;
  SQLServerAdministeringSQLDatabaseInfrastructure: boolean;
  SystemCenterConfigurationManager: boolean;
  SystemCenterOperationManager: boolean;
  SystemCenterServiceManager: boolean;
  VeritasBackupExecAdministration: boolean;
  VeritasNetBackup: boolean;
  constructor(public sidenavService: SidenavService, public stagiaireFormateurService: StagiaireFormateurService) { }

  coursSelectionner( option: string): void {
    this.stagiaireFormateurService.formateurSelectionner = false;
    this.stagiaireFormateurService.stagiaireSelectionner = false;
    if( this.sidenavService.dellOuvert) {
      this.coursDell(option);

    } else if ( this.sidenavService.fortinetOuvert){

      this.coursFortinet(option);

    } else if ( this.sidenavService.microsoftOuvert) {
      this.courMicrosoft(option);
    } else if ( this.sidenavService.veritasOuvert) {
      this.coursVeritas(option);
    } else if ( this.sidenavService.vmwareOuvert) {
      this.coursVmware(option);
    }

  }
  annulerVMware(): void{
    this.VMwareNSXInstallConfigureManage = false;
    this.VMwarevCenterSiteRecoveryManager = false;
    this.VMwarevRealizeOperations = false;
    this.VMwarevSANdeployandmanage = false;
    this.VMwarevSphereInstallConfigureandManage = false;
    this.VMwarevSpheretroubleshootingworkshop = false;

  }
  annulerDell(): void{
    this.dellEmcAvamarManagement = false;
    this.dellEmcDataDomainSystemeAdminitration = false;
    this.dellEmcM1000eInstallationAdministationTrousbleshooting = false;
    this.dellEmcNetworkerImplementationManagement = false ;
    this.dellEmcRecoverPoint = false;
    this.dellEmcScSeriesImplenetationAdministration = false;
    this.dellEmcUnityImplementationADMINISTRATION = false;
    this.dellEmcVxrailApplianceAdministrationManagement = false;
    this.dellNetworkingCampus = false;
    this.dellNetworkingDataCenterAdvancedFeaturesAdministration = false;
  }
  annulerFortinet(): void {
    this.fortiAdc = false;
    this.fortiGateInfrastructure = false;
    this.fortiGateSecutity = false;
    this.fortiWeb = false;
  }
  annulerMicrosoft(): void{
    this.AdministrationMicrosoftExchangeServer = false ;
    this.IdentityWindowsServer2016 = false ;
    this.ImplementingSoftwareDefinedDatacenter = false ;
    this.InstallationStorageComputeWindowsServer2016 = false ;
    this.Office365AdministrationTroubleshooting = false ;
    this.SQLServerAdministeringSQLDatabaseInfrastructure = false ;
    this.SystemCenterConfigurationManager = false ;
    this.SystemCenterOperationManager = false ;
    this.SystemCenterServiceManager = false ;

  }
  annulerVeritas(): void {
    this.VeritasBackupExecAdministration = false ;
    this.VeritasNetBackup = false ;
  }

  coursVmware(option: string): void {
    this.annulerFortinet();
    this.annulerVeritas();
    //  pour mioctrosoft
    this.annulerMicrosoft();
    //  pour dell
    this.annulerDell();

    switch (option) {
      case CoursVmware.VMwareNSXInstallConfigureManage :
        this.VMwareNSXInstallConfigureManage = true;
        this.VMwarevCenterSiteRecoveryManager = false;
        this.VMwarevRealizeOperations = false;
        this.VMwarevSANdeployandmanage = false;
        this.VMwarevSphereInstallConfigureandManage = false;
        this.VMwarevSpheretroubleshootingworkshop = false;
        break;
      case CoursVmware.VMwarevCenterSiteRecoveryManager :
        this.VMwareNSXInstallConfigureManage = false;
        this.VMwarevCenterSiteRecoveryManager = true;
        this.VMwarevRealizeOperations = false;
        this.VMwarevSANdeployandmanage = false;
        this.VMwarevSphereInstallConfigureandManage = false;
        this.VMwarevSpheretroubleshootingworkshop = false;
        break;
      case CoursVmware.VMwarevRealizeOperations :
        this.VMwareNSXInstallConfigureManage = false;
        this.VMwarevCenterSiteRecoveryManager = false;
        this.VMwarevRealizeOperations = true;
        this.VMwarevSANdeployandmanage = false;
        this.VMwarevSphereInstallConfigureandManage = false;
        this.VMwarevSpheretroubleshootingworkshop = false;
        break;
      case CoursVmware.VMwarevSANdeployandmanage :
        this.VMwareNSXInstallConfigureManage = false;
        this.VMwarevCenterSiteRecoveryManager = false;
        this.VMwarevRealizeOperations = false;
        this.VMwarevSANdeployandmanage = true;
        this.VMwarevSphereInstallConfigureandManage = false;
        this.VMwarevSpheretroubleshootingworkshop = false;
        break;
      case CoursVmware.VMwarevSphereInstallConfigureandManage :
        this.VMwareNSXInstallConfigureManage = false;
        this.VMwarevCenterSiteRecoveryManager = false;
        this.VMwarevRealizeOperations = false;
        this.VMwarevSANdeployandmanage = false;
        this.VMwarevSphereInstallConfigureandManage = true;
        this.VMwarevSpheretroubleshootingworkshop = false;
        break;
      case CoursVmware.VMwarevSpheretroubleshootingworkshop :
        this.VMwareNSXInstallConfigureManage = false;
        this.VMwarevCenterSiteRecoveryManager = false;
        this.VMwarevRealizeOperations = false;
        this.VMwarevSANdeployandmanage = false;
        this.VMwarevSphereInstallConfigureandManage = false;
        this.VMwarevSpheretroubleshootingworkshop = true;
        break;
    }
  }
  coursFortinet( option: string): void {
    this.annulerVMware();
    this.annulerVeritas();
    //  pour mioctrosoft
    this.annulerMicrosoft();
    //  pour dell
    this.annulerDell();
    switch( option) {
      case CoursFortinet.fortiAdc:
        this.fortiAdc = true;
        this.fortiGateInfrastructure = false;
        this.fortiGateSecutity = false;
        this.fortiWeb = false;
        break;
      case CoursFortinet.fortiGateInfrastructure:
        this.fortiAdc = false;
        this.fortiGateInfrastructure = true;
        this.fortiGateSecutity = false;
        this.fortiWeb = false;
        break;
      case CoursFortinet.fortiGateSecutity:
        this.fortiAdc = false;
        this.fortiGateInfrastructure = false;
        this.fortiGateSecutity = true;
        this.fortiWeb = false;
        break;
      case CoursFortinet.fortiWeb:
        this.fortiAdc = false;
        this.fortiGateInfrastructure = false;
        this.fortiGateSecutity = false;
        this.fortiWeb = true;
        break;
    }
  }
  coursVeritas(option: string): void{
    this.annulerVMware();

    //  pour mioctrosoft 
    this.annulerMicrosoft();
    //  pour fortinet
    this.annulerFortinet();
    //  pour dell
    this.annulerDell();
    switch (option) {
      case coursVeritas.VeritasBackupExecAdministration:
        this.VeritasBackupExecAdministration = true ;
        this.VeritasNetBackup = false ;
        break;
      case coursVeritas.VeritasNetBackup: 
        this.VeritasBackupExecAdministration = false ;
        this.VeritasNetBackup = true ;
        break;
    }
  }
  courMicrosoft( option: string): void {
    this.annulerVMware();

    this.annulerVeritas();

    //  pour fortinet
    this.annulerFortinet();

    //  pour dell
    this.annulerDell();
    switch (option) {
      case CoursMicrosoft.AdministrationMicrosoftExchangeServer:
        this.AdministrationMicrosoftExchangeServer = true ;
        this.IdentityWindowsServer2016 = false ;
        this.ImplementingSoftwareDefinedDatacenter = false ;
        this.InstallationStorageComputeWindowsServer2016 = false ;
        this.Office365AdministrationTroubleshooting = false ;
        this.SQLServerAdministeringSQLDatabaseInfrastructure = false ;
        this.SystemCenterConfigurationManager = false ;
        this.SystemCenterOperationManager = false ;
        this.SystemCenterServiceManager = false ;

        break;
      case  CoursMicrosoft.IdentityWindowsServer2016:
        this.IdentityWindowsServer2016 = true ;
        this.AdministrationMicrosoftExchangeServer = false ;
        this.ImplementingSoftwareDefinedDatacenter = false ;
        this.InstallationStorageComputeWindowsServer2016 = false ;
        this.Office365AdministrationTroubleshooting = false ;
        this.SQLServerAdministeringSQLDatabaseInfrastructure = false ;
        this.SystemCenterConfigurationManager = false ;
        this.SystemCenterOperationManager = false ;
        this.SystemCenterServiceManager = false ;

        break;

      case  CoursMicrosoft.ImplementingSoftwareDefinedDatacenter:
        this.ImplementingSoftwareDefinedDatacenter = true ;
        this.IdentityWindowsServer2016 = false ;
        this.AdministrationMicrosoftExchangeServer = false ;
        this.InstallationStorageComputeWindowsServer2016 = false ;
        this.Office365AdministrationTroubleshooting = false ;
        this.SQLServerAdministeringSQLDatabaseInfrastructure = false ;
        this.SystemCenterConfigurationManager = false ;
        this.SystemCenterOperationManager = false ;
        this.SystemCenterServiceManager = false ;
        break;

      case  CoursMicrosoft.InstallationStorageComputeWindowsServer2016:
        this.InstallationStorageComputeWindowsServer2016 = true ;
        this.IdentityWindowsServer2016 = false ;
        this.AdministrationMicrosoftExchangeServer = false ;
        this.ImplementingSoftwareDefinedDatacenter = false ;
        this.Office365AdministrationTroubleshooting = false ;
        this.SQLServerAdministeringSQLDatabaseInfrastructure = false ;
        this.SystemCenterConfigurationManager = false ;
        this.SystemCenterOperationManager = false ;
        this.SystemCenterServiceManager = false ;

        break;


      case  CoursMicrosoft.Office365AdministrationTroubleshooting:
        this.Office365AdministrationTroubleshooting = true ;
        this.IdentityWindowsServer2016 = false ;
        this.AdministrationMicrosoftExchangeServer = false ;
        this.ImplementingSoftwareDefinedDatacenter = false ;
        this.InstallationStorageComputeWindowsServer2016 = false ;
        this.SQLServerAdministeringSQLDatabaseInfrastructure = false ;
        this.SystemCenterConfigurationManager = false ;
        this.SystemCenterOperationManager = false ;
        this.SystemCenterServiceManager = false ;

        break;


      case  CoursMicrosoft.SQLServerAdministeringSQLDatabaseInfrastructure:
        this.SQLServerAdministeringSQLDatabaseInfrastructure = true ;
        this.IdentityWindowsServer2016 = false ;
        this.AdministrationMicrosoftExchangeServer = false ;
        this.ImplementingSoftwareDefinedDatacenter = false ;
        this.InstallationStorageComputeWindowsServer2016 = false ;
        this.Office365AdministrationTroubleshooting = false ;
        this.SystemCenterConfigurationManager = false ;
        this.SystemCenterOperationManager = false ;
        this.SystemCenterServiceManager = false ;

        break;
      case  CoursMicrosoft.SystemCenterConfigurationManager:
        this.SystemCenterConfigurationManager = true ;
        this.IdentityWindowsServer2016 = false ;
        this.AdministrationMicrosoftExchangeServer = false ;
        this.ImplementingSoftwareDefinedDatacenter = false ;
        this.InstallationStorageComputeWindowsServer2016 = false ;
        this.Office365AdministrationTroubleshooting = false ;
        this.SQLServerAdministeringSQLDatabaseInfrastructure = false ;
        this.SystemCenterOperationManager = false ;
        this.SystemCenterServiceManager = false ;
        break;
      case  CoursMicrosoft.SystemCenterOperationManager:
        this.SystemCenterOperationManager = true ;
        this.IdentityWindowsServer2016 = false ;
        this.AdministrationMicrosoftExchangeServer = false ;
        this.ImplementingSoftwareDefinedDatacenter = false ;
        this.InstallationStorageComputeWindowsServer2016 = false ;
        this.Office365AdministrationTroubleshooting = false ;
        this.SQLServerAdministeringSQLDatabaseInfrastructure = false ;
        this.SystemCenterConfigurationManager = false ;
        this.SystemCenterServiceManager = false ;

        break;
      case  CoursMicrosoft.SystemCenterServiceManager:
          this.SystemCenterServiceManager = true ;
          this.IdentityWindowsServer2016 = false ;
          this.AdministrationMicrosoftExchangeServer = false ;
          this.ImplementingSoftwareDefinedDatacenter = false ;
          this.InstallationStorageComputeWindowsServer2016 = false ;
          this.Office365AdministrationTroubleshooting = false ;
          this.SQLServerAdministeringSQLDatabaseInfrastructure = false ;
          this.SystemCenterConfigurationManager = false ;
          this.SystemCenterOperationManager = false ;

          break;
    }
  }
  coursDell( option: string): void {
    this.annulerVMware();

    this.annulerVeritas();

    // Pour microsoft 
    this.annulerMicrosoft();
    //  pour fortinet
    this.annulerFortinet();

    switch ( option) {
      case CoursDELL.dellEmcAvamarManagement:
        this.dellEmcAvamarManagement = true;
        this.dellEmcDataDomainSystemeAdminitration = false;
        this.dellEmcM1000eInstallationAdministationTrousbleshooting = false;
        this.dellEmcNetworkerImplementationManagement = false ;
        this.dellEmcRecoverPoint = false;
        this.dellEmcScSeriesImplenetationAdministration = false;
        this.dellEmcUnityImplementationADMINISTRATION = false;
        this.dellEmcVxrailApplianceAdministrationManagement = false;
        this.dellNetworkingCampus = false;
        this.dellNetworkingDataCenterAdvancedFeaturesAdministration = false;
        break;
      case CoursDELL.dellEmcDataDomainSystemeAdminitration:
        this.dellEmcDataDomainSystemeAdminitration = true;
        this.dellEmcAvamarManagement = false;
        this.dellEmcM1000eInstallationAdministationTrousbleshooting = false;
        this.dellEmcNetworkerImplementationManagement = false ;
        this.dellEmcRecoverPoint = false;
        this.dellEmcScSeriesImplenetationAdministration = false;
        this.dellEmcUnityImplementationADMINISTRATION = false;
        this.dellEmcVxrailApplianceAdministrationManagement = false;
        this.dellNetworkingCampus = false;
        this.dellNetworkingDataCenterAdvancedFeaturesAdministration = false;
        break;
      case CoursDELL.dellEmcM1000eInstallationAdministationTrousbleshooting:
        this.dellEmcM1000eInstallationAdministationTrousbleshooting = true;
        this.dellEmcAvamarManagement = false;
        this.dellEmcDataDomainSystemeAdminitration = false;
        this.dellEmcNetworkerImplementationManagement = false ;
        this.dellEmcRecoverPoint = false;
        this.dellEmcScSeriesImplenetationAdministration = false;
        this.dellEmcUnityImplementationADMINISTRATION = false;
        this.dellEmcVxrailApplianceAdministrationManagement = false;
        this.dellNetworkingCampus = false;
        this.dellNetworkingDataCenterAdvancedFeaturesAdministration = false;
        break;
      case CoursDELL.dellEmcNetworkerImplementationManagement:
        this.dellEmcNetworkerImplementationManagement = true ;
        this.dellEmcAvamarManagement = false;
        this.dellEmcDataDomainSystemeAdminitration = false;
        this.dellEmcM1000eInstallationAdministationTrousbleshooting = false;
        this.dellEmcRecoverPoint = false;
        this.dellEmcScSeriesImplenetationAdministration = false;
        this.dellEmcUnityImplementationADMINISTRATION = false;
        this.dellEmcVxrailApplianceAdministrationManagement = false;
        this.dellNetworkingCampus = false;
        this.dellNetworkingDataCenterAdvancedFeaturesAdministration = false;
        break;
      case CoursDELL.dellEmcRecoverPoint:
        this.dellEmcRecoverPoint = true;
        this.dellEmcAvamarManagement = false;
        this.dellEmcDataDomainSystemeAdminitration = false;
        this.dellEmcM1000eInstallationAdministationTrousbleshooting = false;
        this.dellEmcNetworkerImplementationManagement = false ;
        this.dellEmcScSeriesImplenetationAdministration = false;
        this.dellEmcUnityImplementationADMINISTRATION = false;
        this.dellEmcVxrailApplianceAdministrationManagement = false;
        this.dellNetworkingCampus = false;
        this.dellNetworkingDataCenterAdvancedFeaturesAdministration = false;
        break;
      case CoursDELL.dellEmcScSeriesImplenetationAdministration:
        this.dellEmcScSeriesImplenetationAdministration = true;
        this.dellEmcAvamarManagement = false;
        this.dellEmcDataDomainSystemeAdminitration = false;
        this.dellEmcM1000eInstallationAdministationTrousbleshooting = false;
        this.dellEmcNetworkerImplementationManagement = false ;
        this.dellEmcRecoverPoint = false;
        this.dellEmcUnityImplementationADMINISTRATION = false;
        this.dellEmcVxrailApplianceAdministrationManagement = false;
        this.dellNetworkingCampus = false;
        this.dellNetworkingDataCenterAdvancedFeaturesAdministration = false;
        break;
      case CoursDELL.dellEmcUnityImplementationADMINISTRATION:
        this.dellEmcUnityImplementationADMINISTRATION = true;
        this.dellEmcAvamarManagement = false;
        this.dellEmcDataDomainSystemeAdminitration = false;
        this.dellEmcM1000eInstallationAdministationTrousbleshooting = false;
        this.dellEmcNetworkerImplementationManagement = false ;
        this.dellEmcRecoverPoint = false;
        this.dellEmcScSeriesImplenetationAdministration = false;
        this.dellEmcVxrailApplianceAdministrationManagement = false;
        this.dellNetworkingCampus = false;
        this.dellNetworkingDataCenterAdvancedFeaturesAdministration = false;
        break;
      case CoursDELL.dellEmcVxrailApplianceAdministrationManagement:
        this.dellEmcVxrailApplianceAdministrationManagement = true;
        this.dellEmcAvamarManagement = false;
        this.dellEmcDataDomainSystemeAdminitration = false;
        this.dellEmcM1000eInstallationAdministationTrousbleshooting = false;
        this.dellEmcNetworkerImplementationManagement = false ;
        this.dellEmcRecoverPoint = false;
        this.dellEmcScSeriesImplenetationAdministration = false;
        this.dellEmcUnityImplementationADMINISTRATION = false;
        this.dellNetworkingCampus = false;
        this.dellNetworkingDataCenterAdvancedFeaturesAdministration = false;
        break;
      case CoursDELL.dellNetworkingCampus:
        this.dellNetworkingCampus = true;
        this.dellEmcAvamarManagement = false;
        this.dellEmcDataDomainSystemeAdminitration = false;
        this.dellEmcM1000eInstallationAdministationTrousbleshooting = false;
        this.dellEmcNetworkerImplementationManagement = false ;
        this.dellEmcRecoverPoint = false;
        this.dellEmcScSeriesImplenetationAdministration = false;
        this.dellEmcUnityImplementationADMINISTRATION = false;
        this.dellEmcVxrailApplianceAdministrationManagement = false;
        this.dellNetworkingDataCenterAdvancedFeaturesAdministration = false;
        break;
      case CoursDELL.dellNetworkingDataCenterAdvancedFeaturesAdministration:
        this.dellNetworkingDataCenterAdvancedFeaturesAdministration = true;
        this.dellEmcAvamarManagement = false;
        this.dellEmcDataDomainSystemeAdminitration = false;
        this.dellEmcM1000eInstallationAdministationTrousbleshooting = false;
        this.dellEmcNetworkerImplementationManagement = false ;
        this.dellEmcRecoverPoint = false;
        this.dellEmcScSeriesImplenetationAdministration = false;
        this.dellEmcUnityImplementationADMINISTRATION = false;
        this.dellEmcVxrailApplianceAdministrationManagement = false;
        this.dellNetworkingCampus = false;
        break;
    }
  }
  annulerToutCours(): void{
    this.annulerDell();
    this.annulerFortinet();
    this.annulerMicrosoft();
    this.annulerVMware();
    this.annulerVeritas();
  }
}
